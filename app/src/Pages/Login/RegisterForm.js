import React, {useState} from 'react';
import './Login.scss'
import logo from '../../Images/logo_white.png'
import { Grid, Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import { GoogleLogin, GoogleOAuthProvider} from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';



const RegisterForm = (props) => {

    const {navigate, routeChange} = props;

    // const bcrypt = require('bcrypt');
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    
    // const [password, setPassword]


    const handleRegister = async (e) => {
        e.preventDefault();

        // const hashedPassword = await bcrypt.hash(password, 10);
    // Create an object with the user's information
        const userData = {
          fields: {
            first_name: firstname,
            last_name: lastname,
            email: email,
            password: password,
          },
        };

        const url = 'https://api.airtable.com/v0/appZKbOG56UrV0Dvp/Users';
        const headers = {
            'Authorization': 'Bearer patINoqscdJqGN99D.da9df089db04370b459a32adefdeb497b54c2c26902a6ae906c4ce71319ad629',
            'Content-Type': 'application/json',
        };

        // const searchParams = new URLSearchParams({
        //         filterByFormula: `AND({Email} = '${email}', {Name} = '${name}')`,
        // });
        // const searchUrl = `${url}?${searchParams}`;

        // Make a POST request to your Airtable endpoint
        try {
          const response = await fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(userData),
          });

          if (response.ok) {
            // Registration successful
            console.log('Registration successful!');
            navigate('/home');
            // You can redirect to a success page or perform any other action here
          } else {
            // Registration failed
            console.log('Registration failed.');
            // You can display an error message or perform any other action here
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