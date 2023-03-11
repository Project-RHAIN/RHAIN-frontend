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
  height: 10,
  padding: '15px 0',
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '4px solid #3880ff',
    '&:focus, &:hover, &$active': {
      boxShadow: 'none',
    },
    '&$active': {
      backgroundColor: '#fff',
      border: '4px solid #fff',
    },
  },
  '& .MuiSlider-valueLabel': {
    fontSize: 14,
    fontWeight: 'bold',
    top: 5,
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
    height: 10,
    borderRadius: 5,
    backgroundImage: `linear-gradient(to right, #ff0000 0%, #ff8800 33.33%, #ffff00 50%, #00cc00 66.67%, #00cc00 100%)`,
  },
  '& .MuiSlider-rail': {
    opacity: 0.5,
    backgroundColor: '#bfbfbf',
    height: 10,
    borderRadius: 5,
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
