import React from "react";
import { Paper, Typography } from "@mui/material";
import logo from '../../Images/logo_white.png'
import './Data.scss'

const Data = () => {


    return (
        <div className="OuterWrapperData">
            <Paper className="dataWrapper">
                <a href="/">
                    <img src={logo} alt="Logo" height="80px"/>
                </a>
                <h1>Project RHAIN</h1>
                <Typography className="fullform">Regional Healthcare Analysis and Improvement Network</Typography>
                <h2>What do we do with your data?</h2>
                <p  className='dataText'>Your data is simply used to verify your identity and allow access to our dashboard for security purposes.
                We do not sell or share this data with any third party.
                </p>                
                <h2>Data</h2>
                <p  className='dataText'>We believe in transparent insights. The data we show on our dashboard is thoroughly vetted 
                and verified before being presented. Below is a list of all sources we gather our data from organized in the manner in which
                it is seen in the dashboard.
                </p>                
            </Paper>
        </div>            
    )

}

export default Data;