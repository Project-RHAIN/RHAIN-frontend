import React from "react";
import { Paper, Typography, Button } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { useNavigate } from "react-router-dom";
import InfoIcon from '@mui/icons-material/Info';
import logo from '../../Images/logo_white.png'
import './NotFound.scss'

const NotFound = () => {

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
                <h2>Oops! Page not found</h2>                          
            </Paper>
        </div>            
    )

}

export default NotFound;