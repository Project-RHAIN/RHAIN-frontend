import React, {useState} from 'react';
import './Login.scss'
// import { API_KEY, BASE_ID, TABLE_NAME } from './config';
//import logo from '../../Images/logo_white.png'
import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import { generateToken} from "../../Utils/handleToken";
import { GoogleLogin, GoogleOAuthProvider} from '@react-oauth/google';
//import { useNavigate } from 'react-router-dom';
import md5 from 'md5';



const RegisterForm = (props) => {

    const {navigate} = props;

    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };


    const validatePassword = (password) => {
         const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
         return passwordRegex.test(password);
    }



    const handleRegister = async (e) => {
        e.preventDefault();

        if (!firstname || !lastname || !password) {
            setErrorMessage('Please fill in all the required fields.');
            return;
        }
        
        if (!validateEmail(email)) {
            setErrorMessage('Please enter a valid email address.');
            return;
        }

        if(!validatePassword(password)) {
            setErrorMessage('Password should be at least 8 characters long and contain at least one letter and one digit. No special characters');
            return;
        }

        const hashedPassword = md5(password);
       
        const userData = {
          fields: {
            first_name: firstname,
            last_name: lastname,
            email: email,
            password: hashedPassword,
          },
        };


        const url = `https://api.airtable.com/v0/${process.env.REACT_APP_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}`;
        const headers = {
            'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`,
            'Content-Type': 'application/json',
        };


        try {
          const requestURL = `https://api.airtable.com/v0/${process.env.REACT_APP_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}?filterByFormula={email}='${email}'` 
          const response = await fetch(requestURL, {
            method: 'GET',
            headers: headers,
          });
          const data = await response.json();
          if (data.records.length > 0) {
                setErrorMessage('User already exists. Please login instead.');
          }
          else{
               const resp = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(userData),
               });
              if (resp.ok) {
                // Registration successful
                const validationObject = {
                    email: email,
                    password: hashedPassword
                 }
                 const userObject = {
                    email: email,
                    first_name: firstname,
                    last_name: lastname,
                    picture: ''
                 }
                 const token = generateToken(validationObject)
                 localStorage.setItem('token', token);
                 localStorage.setItem('user', JSON.stringify(userObject));
                // console.log('Registration successful!');
                navigate('/home');
              } else {
                // Registration failed
                setErrorMessage('Registration failed.');
              }
          }
        } catch (error) {
          console.error('Error:', error);
        }
    };

    return (
        <>
            {/* <HealthAndSafetyIcon className='logo' /> */}                    
            {/* <img src={logo} alt="Logo" height="70px"/>
            <h1>Sign up here!</h1> */}
            <TextField
                label="First Name"
                type="text"
                variant="outlined"
                margin="normal"
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
                required
                fullWidth
            />
            <TextField
                label="Last Name"
                type="text"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
                variant="outlined"
                margin="normal"
                required
                fullWidth
            />
            <TextField
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                variant="outlined"
                margin="normal"
                required
                fullWidth
            />
            <TextField
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                variant="outlined"
                margin="normal"
                required
                fullWidth
            />   
            <div className="login-options">
                <Button variant="contained" disableElevation className='login-button' onClick={handleRegister} >
                    Register
                </Button>
                <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENTID}>
                <GoogleLogin 
                    onSuccess={
                        credentialResponse => {
                        // console.log(credentialResponse );
                        fetch('http://rhain-backend_web:8000/verifyGoogle', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            clientId: credentialResponse.clientId,
                            credential: credentialResponse.credential
                        }),
                        })
                        .then(response => response.json())
                        .then(data => {
                        // Assuming the backend sends email, firstName, and lastName in the response
                        const { email, first_name, last_name, picture } = data;

                        // Store the email, firstName, and lastName in variables or state on the frontend
                        const storedEmail = email;
                        const storedFirstName = first_name;
                        const storedLastName = last_name;
                        const storedPicture = picture;

                        // Continue with other actions or UI updates
                        const validationObject = {
                            email: storedEmail,
                            first_name: storedFirstName,
                            last_name: storedLastName,
                            picture: storedPicture
                         }
                        //  console.log("GOOGLE VALIDATED DETAILS", validationObject)
                         const token = generateToken(validationObject)
                         localStorage.setItem('token', token);
                         localStorage.setItem('user', JSON.stringify(validationObject));

                         navigate('/home');
                        })
                        .catch(error => {
                            console.log('API request failed', error);
                            // Handle the error condition
                          });                        
                        }
                    }
                    onError={() => {
                        console.log('Registration Failed');
                    }}
                    // type="icon"
                    // shape="circle"
                    text="signup_with"
                    theme="filled_black"
                />
                </GoogleOAuthProvider>            
            </div>
            {errorMessage && <p>{errorMessage}</p>}
        </>            
    );
    }

export default RegisterForm;