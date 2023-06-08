import React, {useEffect} from "react";
import Heading from "../Common/Heading/Heading";
import {TextField} from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel'
import { FormGroup,Checkbox } from "@mui/material";

const Filters = (props) => {

    const {visualizations, curVis, setCurVis, trend, setTrend, visTabs, tabValue, mapVis, setMapVis, heatMap, setHeatMap} = props.visData

    // console.log("In Filters", visTabs[curVis][tabValue].label)

    const handleVisChange = (event) => {
      setCurVis(event.target.value)
    }

    const changeTrendData = (event) => {
      setTrend(event.target.checked)
    }

    const changeHeatMap = (event) => {
      setHeatMap(event.target.checked)
    }

    const handleParameterChange = (event) => {
      setMapVis(event.target.value)
    }

    const checkEffect = visTabs[curVis][tabValue].label

    useEffect(() => {      
      setMapVis('')
    },[checkEffect])

    return (
        <div>
            <React.Fragment>
                <Heading>Filters</Heading>
            </React.Fragment>
            <div>
                <TextField
                style={{marginLeft:"15px", marginTop :"15px", width: '90%'}}
                id="outlined-select-currency-native"
                onChange={handleVisChange}
                select
                size="small"
                label="Visualizations"
                fullWidth
                value={curVis}
                placeholder="Visualizations"
                SelectProps={{
                    native: true,
                }}
                // helperText="Please select Quality"
                >
                {visualizations.map((option) => (
                    <option key={option.value} value={option.value}>
                    {option.label}
                    </option>
                ))}
                </TextField>
            </div>            
            <div>
                <FormGroup style={{marginLeft: '15px'}}>
                    <FormControlLabel 
                      control={
                        <Checkbox 
                          checked={trend}
                          onChange={changeTrendData}
                        />
                      } 
                      label="See trend data" />
                    <FormControlLabel 
                      control={
                        <Checkbox 
                          checked={heatMap}
                          onChange={changeHeatMap}
                        />
                      } 
                      label="Show Data on Map" />
                </FormGroup>
            </div>
            {heatMap ? 
            <div>
            <TextField
                style={{marginLeft:"15px", marginTop :"15px", width: '90%'}}
                id="mapOptions"
                onChange={handleParameterChange}
                select
                InputLabelProps={{ shrink: true }}
                size="small"
                label={visTabs[curVis][tabValue].label ? visTabs[curVis][tabValue].label : 'Select'}
                fullWidth
                value={mapVis ? mapVis : ''}
                placeholder={visTabs[curVis][tabValue].label ? visTabs[curVis][tabValue].label : 'Select'}
                SelectProps={{
                    native: true,
                }}                
                >
                <option disabled value="">
                  Select
                </option>
                {props.visParameters.map((ele,index) => (
                  <option key={index} value={ele}>
                    {ele}
                  </option>
                ))}                
                </TextField>
            </div> : null}
        </div>
    )
}

export default Filters