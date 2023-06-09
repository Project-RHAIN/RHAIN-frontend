import React from "react";
import { Paper, Typography, Button } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { useNavigate } from "react-router-dom";
import InfoIcon from '@mui/icons-material/Info';
import logo from '../../Images/logo_white.png'
import './Data.scss'
import file2018 from '../../Data/2018.xlsx';
import file2019 from '../../Data/2019.xlsx';
import file2020 from '../../Data/2020.xlsx';
import file2021 from '../../Data/2021.xlsx';
import file2022 from '../../Data/2022.xlsx';
import filepop from '../../Data/Pop_2022.xlsx';
import download from '../../Images/download.ico';

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
                <p  className='dataText'>We believe in transparent insights. The data we present on our dashboard is from reliable data stores. Below is a list of our sources organized by year. You can also download them by clicking the icon:
                </p>
                <ul>
                    <li><span style={{ color: 'white' }}>U.S Census County Health Rankings Data - 2018</span>&nbsp;<a href={file2018} download="2018_Data"><img src={download} alt='Download Here' width = '32' height = '32'/></a></li>
                    <li><span style={{ color: 'white' }}>U.S Census County Health Rankings Data - 2019</span>&nbsp;<a href={file2019} download="2019_Data"><img src={download} alt='Download Here' width = '32' height = '32'/></a></li>
                    <li><span style={{ color: 'white' }}>U.S Census County Health Rankings Data - 2020</span>&nbsp;<a href={file2020} download="2020_Data"><img src={download} alt='Download Here' width = '32' height = '32'/></a></li>
                    <li><span style={{ color: 'white' }}>U.S Census County Health Rankings Data - 2021</span>&nbsp;<a href={file2021} download="2021_Data"><img src={download} alt='Download Here' width = '32' height = '32'/></a></li>
                    <li><span style={{ color: 'white' }}>U.S Census County Health Rankings Data - 2022</span>&nbsp;<a href={file2022} download="2022_Data"><img src={download} alt='Download Here' width = '32' height = '32'/></a></li>
                    <li><span style={{ color: 'white' }}>U.S Census Population, Income and Area - 2022 </span>&nbsp;<a href={filepop} download="2022_Pop_Inc_Area_Data"><img src={download} alt='Download Here' width = '32' height = '32'/></a></li>
                </ul>                
            </Paper>
        </div>            
    )

}

export default Data;