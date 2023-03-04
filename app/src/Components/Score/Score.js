import React from "react";
import Heading from "../Common/Heading/Heading";
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Slider from '@mui/material/Slider';
import './Score.scss'

const marks = [
    {
      value: 0,
      label: '0',
    },    
    {
    value: 2,
    label: '',
    },    
    {
    value: 4,
    label: '',
    },    
    {
    value: 6,
    label: '',
    },    
    {
    value: 8,
    label: '',
    },    
    {
      value: 10,
      label: '10',
    },
];

const CustomSlider = styled(Slider)(({ theme }) => ({
    color: theme.palette.mode === 'dark' ? '#3880ff' : '#3880ff',
    height: 2,
    padding: '15px 0',
    '& .MuiSlider-thumb': {
      height: 18,
      width: 18,
      backgroundColor: theme.palette.primary,    
    },
    '& .MuiSlider-valueLabel': {
      fontSize: 12,
      fontWeight: 'bold',
      top: 4,
      backgroundColor: 'unset',
      color: theme.palette.text.primary,
      '&:before': {
        display: 'none',
      },
      '& *': {
        background: 'transparent',
        color: theme.palette.mode === 'dark' ? '#fff' : '#000',
      },
    },
    '& .MuiSlider-track': {
      border: 'none',
    },
    '& .MuiSlider-rail': {
      opacity: 0.5,
      backgroundColor: '#bfbfbf',
    },
    '& .MuiSlider-mark': {
      backgroundColor: '#bfbfbf',
      height: 8,
      width: 1,
      '&.MuiSlider-markActive': {
        opacity: 1,
        backgroundColor: 'currentColor',
      },
    },
  }));


  
const Score = (props) => {

    const {type, value} = props;

    return (
        <React.Fragment>
            <Heading>{type === "objective" ? "Objective" : "Perception"} Score</Heading>
            <Box
                className='score-box'
            >
            <CustomSlider
                aria-label="Custom marks"                
                value={value}                
                step={1}
                min={0}
                max={10}
                valueLabelDisplay="on"              
                disableSwap
                // valueLabelDisplay="auto"
                marks={marks}
            />
            </Box>
        </React.Fragment>
    )
}

export default Score;
