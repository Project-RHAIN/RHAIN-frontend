import React from "react";
import { TextField, Button } from "@mui/material";
import { GoogleLogin, GoogleOAuthProvider} from '@react-oauth/google';

const LoginForm = (props) => {

    const {navigate, routeChange} = props;

    return (
        <>
            {/* <HealthAndSafetyIcon className='logo' /> */}                    
            {/* <h1>Sign in here!</h1> */}
            <TextField
                label="Email"
                type="email"
                variant="outlined"
                margin="normal"
                required
                fullWidth
            />
            <TextField
                label="Password"
                type="password"
                variant="outlined"
                margin="normal"
                required
                fullWidth
            />   
            <Button onClick={LoginForm} variant='contained'>Login</Button><br/>
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