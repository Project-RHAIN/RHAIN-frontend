import React from "react";
import { Paper, Typography, Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo from '../../Images/logo_white.png'
import Utkarsh from "../../Images/Utkarsh.jpg"
import HomeIcon from '@mui/icons-material/Home';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import './About.scss'

const About = () => {

    const navigate = useNavigate();

    return (
        <div className="OuterWrapperAbout">
            <Paper className="aboutWrapper">
                <div style={{display: 'flex', justifyContent: 'left', position: 'absolute'}}>
                <Button variant="contained" className="navigationButtons" startIcon={<HomeIcon />} onClick={() => {navigate('/')}}>
                    Home
                </Button>
                <Button variant="contained" className="navigationButtons" startIcon={<BarChartIcon />} onClick={() => {navigate('/data')}}>
                    Data
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
                <h2>About Us</h2>                
                <p  className='aboutText'>Our goal is to leverage the power of big data methodologies to provide insights into the issues 
                surrounding healthcare delivery on a region-by-region basis. 
                We aim to identify the primary problems of quality, accessibility, and affordability, and assign a score for each aspect 
                for each region. 
                By aggregating multiple sources of data, such as doctor/hospital 
                reviews, income data, and proximity to hospitals, 
                we analyze the raw data to produce valuable metrics that define the healthcare standards in a region. 
                <br />Our user-friendly dashboard provides easy access to these insights, helping policymakers and healthcare professionals recognize the necessary actions to improve the system. 
                Join us on our mission to make healthcare accessible and affordable for everyone.</p>                
                <h2>Meet the Team</h2>   
                <Grid container>
                    <Grid item xs={3} className="gridItem">
                        <Paper className="personCard">
                            R
                        </Paper>
                    </Grid>
                    <Grid item xs={3} className="gridItem">
                        <Paper className="personCard">
                            S
                        </Paper>
                    </Grid>
                    <Grid item xs={3} className="gridItem">
                        <Paper className="personCard">
                            S
                        </Paper>
                    </Grid>
                    <Grid item xs={3} className="gridItem">
                        <Paper className="personCard">
                            <img className="headShot" alt="teampic" src={Utkarsh}/>
                            <p className="name"> Utkarsh Chhapekar</p>
                            <p className="designation"> Full-Stack Developer</p>
                            <div style={{display: 'flex', justifyContent: 'center'}}>
                                <LinkedInIcon className="linkIcons" onClick={() => window.open('https://www.linkedin.com/in/utkarsh-c/')}/>
                                <GitHubIcon className="linkIcons" onClick={() => window.open('https://github.com/Utkichaps')}/>
                                <LinkIcon className="linkIcons" onClick={() => window.open('https://utkichaps.me')}/>
                                
                            </div>                            
                        </Paper>
                    </Grid>
                </Grid>
            </Paper>
        </div>            
    )

}

export default About;