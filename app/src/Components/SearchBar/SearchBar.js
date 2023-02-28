import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from '@mui/material/MenuItem';
import Heading from "../Common/Heading/Heading";

const Searchbar = () => {
  const [stateValue, setstateValue] = useState("");
  const [countyValue, setCountyValue] = useState("");

  const states = [
    { State: "California", County: ["Los Angeles","San Diego","San Jose","San Francisco","Fresno","Sacramento","Long Beach","Oakland","Bakersfield","Anaheim","Santa Ana","Riverside","Stockton","Chula Vista","Irvine","Fremont","San Bernardino","Modesto","Fontana","Oxnard","Moreno Valley","Huntington Beach","Glendale","Santa Clarita","Garden Grove","Oceanside","Rancho Cucamonga","Santa Rosa","Ontario","Lancaster","Elk Grove","Corona","Palmdale","Salinas","Pomona","Hayward","Escondido","Torrance","Sunnyvale","Orange","Fullerton","Pasadena","Thousand Oaks","Visalia","Simi Valley","Concord","Roseville","Victorville","Santa Clara","Vallejo","Berkeley","El Monte","Downey","Costa Mesa","Inglewood","Carlsbad","San Buenaventura (Ventura)","Fairfield","West Covina","Murrieta","Richmond","Norwalk","Antioch","Temecula","Burbank","Daly City","Rialto","Santa Maria","El Cajon","San Mateo","Clovis","Compton","Jurupa Valley","Vista","South Gate","Mission Viejo","Vacaville","Carson","Hesperia","Santa Monica","Westminster","Redding","Santa Barbara","Chico","Newport Beach","San Leandro","San Marcos","Whittier","Hawthorne","Citrus Heights","Tracy","Alhambra","Livermore","Buena Park","Menifee","Hemet","Lakewood","Merced","Chino","Indio","Redwood City"] },
    { State: "Alaska", County: ["Aleutians East", "Anchorage", "Bristol Bay", "Denali", "Dillingham", "Fairbanks North Star"] },
    { State: "Nevada", County: ["Las Vegas","Henderson","Reno","North Las Vegas","Sparks","Carson City"] },
    {State: "New Mexico", County: ["Albuquerque","Las Cruces","Rio Rancho","Santa Fe","Roswell","Farmington","Clovis"]},
    { State: "Alaska", County: ["Anchorage"]},
    {State: "Kansas", County: ["Wichita","Overland Park","Kansas City","Olathe","Topeka","Lawrence","Shawnee","Manhattan", "Lenexa","Salina","Hutchinson"]},
    ];

  const handleStateChange = (event) => {
    setstateValue(event.target.value);
    setCountyValue("");
  };

  const handleCountyChange = (event) => {
    setCountyValue(event.target.value);
  };
  return (
    <div>
        <React.Fragment>
            <Heading>Region</Heading>
        </React.Fragment>
      <TextField
        style={{marginLeft:"15px", marginTop :"15px", width: '90%'}}
        select
        fullWidth
        label="State"
        value={stateValue}
        onChange={handleStateChange}
        // helperText="Please select a state"
      >
        {states.map((state) => (
          <MenuItem key={state.State} value={state.State}>
            {state.State}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        style={{marginLeft:"15px", marginTop :"15px", width: '90%'}}
        select
        fullWidth
        label="County"
        value={countyValue}
        onChange={handleCountyChange}
        disabled={!stateValue}
        helperText={stateValue ? "" : "Please select a state first"}
      >
        {stateValue &&
          states
            .find((state) => state.State === stateValue)
            .County.map((county) => (
              <MenuItem key={county} value={county}>
                {county}
              </MenuItem>
            ))}
      </TextField>
    </div>
  );
};

export default Searchbar;
