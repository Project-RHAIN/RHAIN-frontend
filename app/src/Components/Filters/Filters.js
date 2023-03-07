import React from "react";
import Heading from "../Common/Heading/Heading";
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel'
import { FormGroup,Checkbox } from "@mui/material";
  const affordability = [
    {
      value: 'A',
      label: 'A',
    },
    {
      value: 'B',
      label: 'B',
    },
    {
      value: 'C',
      label: 'C',
    }
  ];

const Filters = (props) => {

    const {visualizations, curVis, setCurVis} = props.visData

    const handleVisChange = (event) => {
      setCurVis(event.target.value)
    }

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
            {/* <div>
                <TextField
                style={{marginLeft:"15px", marginTop :"15px", width: '90%'}}
                fullWidth
                id="outlined-select-currency-native"
                size="small"
                select
                label="Affordability"
                defaultValue="A"
                placeholder="Affordability"
                SelectProps={{
                    native: true,
                }}
                // helperText="Please select Affordability"
                >
                {affordability.map((option) => (
                    <option key={option.value} value={option.value}>
                    {option.label}
                    </option>
                ))}
                </TextField>
            </div> */}
            <div>
                <FormGroup style={{marginLeft: '15px'}}>
                    <FormControlLabel control={<Checkbox />} label="See trend data" />
                    <FormControlLabel control={<Checkbox />} label="Show Demographic Data" />
                </FormGroup>
            </div>
        </div>
    )
}

export default Filters