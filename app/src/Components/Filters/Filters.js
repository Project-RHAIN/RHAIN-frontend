import React from "react";
import Heading from "../Common/Heading/Heading";
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel'
import { FormGroup,Checkbox } from "@mui/material";


const quality = [
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

const Filters = () => {
    return (
        <div>
            <React.Fragment>
                <Heading>Filters</Heading>
            </React.Fragment>
            <div>
                <TextField
                style={{marginLeft:"15px", marginTop :"15px", width : '87%'}}
                id="outlined-select-currency-native"
                select
                label="Quality"
                defaultValue="A"
                placeholder="Quality"
                SelectProps={{
                    native: true,
                }}
                helperText="Please select Quality"
                >
                {quality.map((option) => (
                    <option key={option.value} value={option.value}>
                    {option.label}
                    </option>
                ))}
                </TextField>
            </div>
            <div>
                <TextField
                style={{marginLeft:"15px", marginTop :"15px", width : '87%'}}
                id="outlined-select-currency-native"
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
            </div>
            <div>
                <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Include Insurance Data" />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Show Hospital Data" />
                </FormGroup>
            </div>
        </div>
    )
}

export default Filters