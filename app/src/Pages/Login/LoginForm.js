import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { GoogleLogin, GoogleOAuthProvider} from '@react-oauth/google';
import { API_KEY, BASE_ID, TABLE_NAME } from './config';

const LoginForm = (props) => {

    const {navigate, routeChange} = props;

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

        const url = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`;
        const headers = {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json',
        };


        try {
          const requestURL = url + `?filterByFormula=AND(Email%3D"${email}",Password%3D"${password}")`; 
          const response = await fetch(requestURL, {
            method: 'GET',
            headers: headers,
          });
          const data = await response.json();
          if (data.records.length > 0) {
             console.log('Login successful!');
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
            <Button onClick={handleLogin} variant='contained'>Login</Button><br/>
            {errorMessage && <p>{errorMessage}</p>}
            <Button variant="contained" disableElevation className='login-button' onClick={routeChange} >
            <GoogleOAuthProvider clientId="888396688109-n3ms9snv8n9jbpn7bam27kvt4mce87gp.apps.googleusercontent.com">
            <GoogleLogin onSuccess={credentialResponse => {
                console.log(credentialResponse );
                navigate('/home');}}
            onError={() => {
                console.log('Login Failed');
            }}
            />
            </GoogleOAuthProvider>
            </Button>
        </>
    )
}

export default LoginForm;