import React from 'react';
import './Login.scss'
import logo from '../../Images/logo_white.png'
import { Grid, Button, Alert } from "@mui/material";
import BarChartIcon from '@mui/icons-material/BarChart';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate, useLocation } from 'react-router-dom';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
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
            {children}
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
    // console.log("MESSAGE", message)

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
                <p>RHAIN is an intelligent healthcare analytics platform developed to improve healthcare policy decision-making and reduce wasteful expenditure. 
                Leveraging the power of state-of-the-art machine learning and statistical techniques, our goal is to provide actionable insights into healthcare delivery issues on a county-by-county basis. 
                By aggregating and analyzing multiple sources of objective and perception data, such as doctor/hospital 
                reviews, socio-economic factors, and relevant county measures, 
                RHAIN produces valuable metrics and visualizations that define healthcare standards and revolutionalize county health evaluation. 
                <br />Our user-friendly dashboard provides easy access to these insights, helping policymakers recognize necessary actions to improve the system. 
                Join us on our mission to make healthcare accessible and affordable for everyone!</p>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                  <Button variant='outlined' size='medium' style={{marginRight: '20px', color: 'white'}} startIcon={<InfoIcon />} onClick={() => {navigate('/about')}}>
                    About Us
                  </Button>
                  <Button variant='outlined' size='medium' style={{color: 'white'}} startIcon={<BarChartIcon />} onClick={() => {navigate('/data')}}>
                    Data
                  </Button>                  
                </div>
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