import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { GoogleLogin, GoogleOAuthProvider} from '@react-oauth/google';
import './Login.scss'
// import { API_KEY, BASE_ID, TABLE_NAME } from './config';
import { generateToken} from "../../Utils/handleToken";
import md5 from 'md5';

const LoginForm = (props) => {

    const {navigate} = props;        


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            setErrorMessage('Please fill in all the required fields.');
            return;
        }
        
        if (!validateEmail(email)) {
            setErrorMessage('Please enter a valid email address.');
            return;
        }

        const url = `https://api.airtable.com/v0/${process.env.REACT_APP_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}`;
        // console.log(url)
        const headers = {
            'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`,
            'Content-Type': 'application/json',
        };

        const hashedPassword = md5(password);

        try {
          const requestURL = url + `?filterByFormula=AND(Email%3D"${email}",Password%3D"${hashedPassword}")`; 
          const response = await fetch(requestURL, {
            method: 'GET',
            headers: headers,
          });
          const data = await response.json();          
          if (data.records.length > 0) {
            //  console.log('Login successful!');
             const validationObject = {
                email: email,
                password: hashedPassword
             }

            //  console.log("LOGIN DATA", data.records[0].fields)

             const udata = data.records[0].fields

             const userObject = {
                email: email,
                first_name: udata.first_name,
                last_name: udata.last_name,
                picture: udata.profile_picture
             }
             
             const token = generateToken(validationObject)
             localStorage.setItem('token', token);
             localStorage.setItem('user', JSON.stringify(userObject));
            //  console.log('After Token generation!');
             navigate('/home');
          } else {
            setErrorMessage('Invalid email or password');
          }
        } catch (error) {
          console.error('Error:', error);
          setErrorMessage('An error occurred during login');
        }
    };

    return (
        <>
            {/* <HealthAndSafetyIcon className='logo' /> */}                    
            {/* <h1>Sign in here!</h1> */}
            <TextField
                label="Email"
                type="email"
                variant="outlined"
                margin="normal"
                onChange={(e) => setEmail(e.target.value)}
                required
                fullWidth
            />
            <TextField
                label="Password"
                type="password"
                variant="outlined"
                margin="normal"
                 onChange={(e) => setPassword(e.target.value)}
                required
                fullWidth
            />   
            <div className="login-options">
                <Button variant="contained" disableElevation className='login-button' onClick={handleLogin} >
                    Login
                </Button>
                <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENTID}>
                <GoogleLogin 
                    onSuccess={
                        credentialResponse => {
                        // console.log(credentialResponse );
                        fetch(`${process.env.REACT_APP_BACKEND_URL}/api/verifyGoogle`, {
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
                        console.log('Login Failed');
                    }}
                    // type="icon"
                    // shape="circle"
                    theme="filled_black"
                />
                </GoogleOAuthProvider>            
            </div>
            {errorMessage && <p>{errorMessage}</p>}            
        </>
    )
}

export default LoginForm;