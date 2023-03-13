import React, {useEffect, useState} from "react";
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

    const {type} = props;
    const [sliderValueObjective, setSliderValueObjective] = useState(0);
    const [sliderValuePerception, setSliderValuePerception] = useState(0);
    console.log(props)
    const {state, county} = props.locationObject;

    useEffect(() => {
      fetch(`http://localhost:8000/health-score?state_name=${state}&county_name=${county}`)
      .then(response => response.json())
      .then(data => {        
          // console.log((data["Health Score"]/10).toFixed(2))
          setSliderValueObjective((data["Health Score"]/10).toFixed(2))
      })
      .catch(error => console.error(error));

      fetch(`http://localhost:8000/perception-score?state_name=${state}&county_name=${county}`)
      .then(response => response.json())
      .then(data => {        
          // console.log((data["Health Score"]/10).toFixed(2))
          console.log(data["Perception score"])
          setSliderValuePerception(parseFloat(data["Perception score"]).toFixed(2))
      })
      .catch(error => console.error(error));

  },[county])

    return (
        <React.Fragment>
            <Heading>{type === "objective" ? "Objective" : "Perception"} Score</Heading>
            <Box
                className='score-box'
            >
            {sliderValuePerception ? 
            <CustomSlider
                aria-label="Custom marks"                
                value={type === "objective" ? sliderValueObjective : sliderValuePerception}
                step={1}
                min={0}
                max={10}
                valueLabelDisplay="on"              
                disableSwap
                // valueLabelDisplay="auto"
                marks={marks}
            /> : 
            <>No data to show</>}
            </Box>
        </React.Fragment>
    )
}

export default Score;
