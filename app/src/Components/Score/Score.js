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

const getTrackColor = (value) => {
  if (value <= 3) {
    return '#FF6B6B'; // red
  } else if (value <= 7) {
    return '#FFC107'; // yellow
  } else {
    return '#4CAF50'; // green
  }
}

const CustomSlider = styled(Slider)(({ theme, value }) => ({
  color: theme.palette.mode === 'dark' ? '#3880ff' : '#3880ff',
  height: 8,
  padding: '15px 0',
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
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
    height: 8,
    backgroundColor: getTrackColor(value),
  },
  '& .MuiSlider-rail': {
    opacity: 0.5,
    backgroundColor: '#bfbfbf',
    height: 8,
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
        // if()
        setSliderValuePerception(parseFloat(data["Perception score"]).toFixed(2))
    })
    .catch(error => console.error(error));

  },[county])

  if(type === "objective") {  
    return (
      <React.Fragment>
        <Heading>Objective Score</Heading>
          <Box
                  className='score-box'
              >
              {sliderValueObjective <= 10 &&  sliderValueObjective > 0 ?  
              <CustomSlider
                  aria-label="Custom marks"                
                  value={sliderValueObjective}
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
  return (
    <React.Fragment>
      <Heading>Perception Score</Heading>
        <Box
                className='score-box'
            >
            {sliderValuePerception <= 10 &&  sliderValuePerception > 0 ? 
            <CustomSlider
                aria-label="Custom marks"                
                value={sliderValuePerception}
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
