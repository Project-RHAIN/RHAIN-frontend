import React, { useState, Component } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from '@mui/material/MenuItem';
import Heading from "../Common/Heading/Heading";

import stateData from '../../Data/US_States_and_Cities.json'

const Searchbar = (props) => {
  
  const {state, setState, county, setCounty} = props.locationObject  
  // const states = [
  //   { State: "California", County: ["Los Angeles","San Diego","San Jose","San Francisco","Fresno","Sacramento","Long Beach","Oakland","Bakersfield","Anaheim","Santa Ana","Riverside","Stockton","Chula Vista","Irvine","Fremont","San Bernardino","Modesto","Fontana","Oxnard","Moreno Valley","Huntington Beach","Glendale","Santa Clarita","Garden Grove","Oceanside","Rancho Cucamonga","Santa Rosa","Ontario","Lancaster","Elk Grove","Corona","Palmdale","Salinas","Pomona","Hayward","Escondido","Torrance","Sunnyvale","Orange","Fullerton","Pasadena","Thousand Oaks","Visalia","Simi Valley","Concord","Roseville","Victorville","Santa Clara","Vallejo","Berkeley","El Monte","Downey","Costa Mesa","Inglewood","Carlsbad","San Buenaventura (Ventura)","Fairfield","West Covina","Murrieta","Richmond","Norwalk","Antioch","Temecula","Burbank","Daly City","Rialto","Santa Maria","El Cajon","San Mateo","Clovis","Compton","Jurupa Valley","Vista","South Gate","Mission Viejo","Vacaville","Carson","Hesperia","Santa Monica","Westminster","Redding","Santa Barbara","Chico","Newport Beach","San Leandro","San Marcos","Whittier","Hawthorne","Citrus Heights","Tracy","Alhambra","Livermore","Buena Park","Menifee","Hemet","Lakewood","Merced","Chino","Indio","Redwood City"] },
  //   { State: "Alaska", County: ["Aleutians East", "Anchorage", "Bristol Bay", "Denali", "Dillingham", "Fairbanks North Star"] },
  //   { State: "Nevada", County: ["Las Vegas","Henderson","Reno","North Las Vegas","Sparks","Carson City"] },
  //   {State: "New Mexico", County: ["Albuquerque","Las Cruces","Rio Rancho","Santa Fe","Roswell","Farmington","Clovis"]},
  //   { State: "Alaska", County: ["Anchorage"]},
  //   {State: "Kansas", County: ["Wichita","Overland Park","Kansas City","Olathe","Topeka","Lawrence","Shawnee","Manhattan", "Lenexa","Salina","Hutchinson"]},
  //   ];

  const handleStateChange = (event) => {
    setState(event.target.value);
    // setCountyValue("");
    // props.stateValue(event.target.value);
  };

  const handleCountyChange = (event) => {
    setCounty(event.target.value);
    // props.countyValue(event.target.value);

  };

  return (
    <div>
      <React.Fragment>
          <Heading>Region</Heading>
      </React.Fragment>
      <TextField
        style={{marginLeft:"10px", marginTop :"15px", width: '90%'}}
        size='small'
        select
        fullWidth
        label="State"
        value={state}
        onChange={handleStateChange}
      >
        {Object.keys(stateData).map((state) => (
          <MenuItem key={state} value={state}>
            {state}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        style={{marginLeft:"10px", marginTop :"15px", width: '90%'}}
        select
        fullWidth
        size='small'
        label="County"
        value={county}
        onChange={handleCountyChange}
        disabled={!state}
        helperText={state ? "" : "Please select a state first"}
      >
        {state &&
          stateData[state].map((cnty) => (
              <MenuItem key={cnty} value={cnty}>
                {cnty}
              </MenuItem>
            ))}
      </TextField>
    </div>
  );
};

export default Searchbar;
