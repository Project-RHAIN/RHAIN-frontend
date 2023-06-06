import React, {useState} from 'react';
import './Login.scss'
import logo from '../../Images/logo_white.png'
import { Grid, Button, Alert } from "@mui/material";
import TextField from '@mui/material/TextField';
import { GoogleLogin, GoogleOAuthProvider} from '@react-oauth/google';
import { useNavigate, useLocation } from 'react-router-dom';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

const Login = () => {

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `/home`; 
      navigate(path);
    }

    const location = useLocation();
    const message = location.state?.message;
    console.log("MESSAGE", message)

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function a11yProps(index) {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
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
                <p>Our goal is to leverage the power of big data methodologies to provide insights into the issues 
                surrounding healthcare delivery on a region-by-region basis. 
                We aim to identify the primary problems of quality, accessibility, and affordability, and assign a score for each aspect 
                for each region. 
                By aggregating multiple sources of data, such as doctor/hospital 
                reviews, income data, and proximity to hospitals, 
                we analyze the raw data to produce valuable metrics that define the healthcare standards in a region. 
                <br />Our user-friendly dashboard provides easy access to these insights, helping policymakers and healthcare professionals recognize the necessary actions to improve the system. 
                Join us on our mission to make healthcare accessible and affordable for everyone.</p>
                </div>          
            </Grid>

            <Grid item sm={4} className='column2'>
                <div className='login-section'>
                {message && <Alert style={{marginBottom: '10px'}} severity="error" variant="filled">{message}</Alert>}
                <img src={logo} alt="Logo" height="70px"/>
                <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" className='centeredTabs'>
                    <Tab label="Login" {...a11yProps(0)} />
                    <Tab label="Register" {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                <LoginForm navigate={navigate} routeChange={routeChange}/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                <RegisterForm navigate={navigate} routeChange={routeChange}/>
                </TabPanel>
                </Box>
                </div>
            </Grid>
        </Grid>
        </div>    
    );
    }

export default Login;