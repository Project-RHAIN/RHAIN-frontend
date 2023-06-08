import React from "react";
import { Paper, Typography, Button } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { useNavigate } from "react-router-dom";
import InfoIcon from '@mui/icons-material/Info';
import logo from '../../Images/logo_white.png'
import './Data.scss'

const Data = () => {

    const navigate = useNavigate();

    return (
        <div className="OuterWrapperData">
            <Paper className="dataWrapper">
            <div style={{display: 'flex', justifyContent: 'left', position: 'absolute'}}>
                <Button variant="contained" className="navigationButtons" startIcon={<HomeIcon />} onClick={() => {navigate('/')}}>
                    Home
                </Button>
                <Button variant="contained" className="navigationButtons" startIcon={<InfoIcon />} onClick={() => {navigate('/about')}}>
                    About
                </Button>
                <Button variant="contained" className="navigationButtons" startIcon={<DashboardIcon />} onClick={() => {navigate('/home')}}>
                    Dashboard
                </Button>
                </div>
                <a href="/">
                    <img src={logo} alt="Logo" height="80px" style={{marginTop: '40px'}}/>
                </a>
                <h1>Project RHAIN</h1>
                <Typography className="fullform">Regional Healthcare Analysis and Improvement Network</Typography>
                <h2>What do we do with your data?</h2>
                <p  className='dataText'>Your data is only used to verify your identity and allow access to our dashboard for security purposes.
                We do not sell or share this data with any third party.
                </p>                
                <h2>Health Data</h2>
                <p  className='dataText'>We believe in transparent insights. The data we show on our dashboard is thoroughly vetted 
                and verified before being presented. Below is a list of all sources we gather our data from organized in the manner in which
                it is seen in the dashboard.
                </p>                
            </Paper>
        </div>            
    )

}

export default Data;