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
                <p>Our goal is to leverage the power of big data methodologies to provide insights into the issues surrounding healthcare delivery on a region-by-region basis. We aim to identify the primary problems of quality, accessibility, and affordability, and assign a score for each aspect for each region. By aggregating multiple sources of data, such as doctor/hospital reviews, income data, and proximity to hospitals, we analyze the raw data to produce valuable metrics that define the healthcare standards in a region. <br />Our user-friendly dashboard provides easy access to these insights, helping policymakers and healthcare professionals recognize the necessary actions to improve the system. Join us on our mission to make healthcare accessible and affordable for everyone.</p>
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