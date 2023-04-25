import React, {useState} from 'react';
import './Login.scss'
import { Grid, Button } from "@mui/material";
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import TextField from '@mui/material/TextField';
import { GoogleLogin, GoogleOAuthProvider} from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';


const Login = () => {

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
    let path = `/home`; 
    navigate(path);
    }
    // const [password, setPassword]

    return (
        <div className='centered'>        
        <Grid container className='main-container'>

            <Grid item sm={8} className='column1'>  
                <div className='left-container'>
                {/* <GoogleLogin onSuccess={credentialResponse => {
                        console.log(credentialResponse);
                    }}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                />; */}

                <h1>Regional Healthcare Analysis and Improvement Network </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. <br /> Maecenas accumsan lacus vel facilisis volutpat est velit. Nec ultrices dui sapien eget mi proin sed libero enim. Facilisis magna etiam tempor orci eu lobortis elementum nibh. Sit amet massa vitae tortor. Commodo ullamcorper a lacus vestibulum sed arcu. Massa tincidunt dui ut ornare lectus sit amet.</p>
                </div>          
            </Grid>

            <Grid item sm={4} className='column2'>
                <div className='login-section'>
                    <HealthAndSafetyIcon className='logo' />
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
                </div>        
            </Grid>
        </Grid>
        </div>    
    );
    }

export default Login;