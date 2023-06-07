import React from "react";
import { Paper, Typography, Grid } from "@mui/material";
import logo from '../../Images/logo_white.png'
import './About.scss'

const About = () => {


    return (
        <div className="OuterWrapperAbout">
            <Paper className="aboutWrapper">
                <a href="/">
                    <img src={logo} alt="Logo" height="80px"/>
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
                            U
                        </Paper>
                    </Grid>
                </Grid>
            </Paper>
        </div>            
    )

}

export default About;