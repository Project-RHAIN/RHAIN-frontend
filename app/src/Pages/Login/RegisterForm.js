import React, {useState} from 'react';
import './Login.scss'
import { API_KEY, BASE_ID, TABLE_NAME } from './config';
import logo from '../../Images/logo_white.png'
import { Grid, Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import { GoogleLogin, GoogleOAuthProvider} from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
// import bcrypt from 'bcrypt';


const RegisterForm = (props) => {

    const {navigate, routeChange} = props;

    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };


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

       
        const userData = {
          fields: {
            first_name: firstname,
            last_name: lastname,
            email: email,
            password: password,
          },
        };


        const url = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`;
        const headers = {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json',
        };

        // Make a POST request to your Airtable endpoint
        try {
          const requestURL = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}?filterByFormula={email}='${email}'` 
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
                console.log('Registration successful!');
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
            <Button onClick={handleRegister} variant='contained'>Register</Button>
            {errorMessage && <p>{errorMessage}</p>}
            <Button variant="contained" disableElevation className='login-button' onClick={routeChange} >
            <GoogleOAuthProvider clientId="888396688109-n3ms9snv8n9jbpn7bam27kvt4mce87gp.apps.googleusercontent.com">
            <GoogleLogin onSuccess={credentialResponse => {
                console.log(credentialResponse );
                navigate('/home');}}
            onError={() => {
                console.log('Registration Failed');
            }}
            />
            </GoogleOAuthProvider>
            </Button>
        </>            
    );
    }

export default RegisterForm;