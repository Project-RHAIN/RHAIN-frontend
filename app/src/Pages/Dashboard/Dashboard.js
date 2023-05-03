import React, {useState} from "react";
import { Grid, Paper } from "@mui/material";
import Visualization from "../../Components/Visualization/Visualization";
import Insights from "../../Components/Insights/Insights";
import RegionalData from "../../Components/RegionalData/RegionalData";
import Map from "../../Components/Map/Map";
import Score from "../../Components/Score/Score";
import MenuBar from '../../Components/MenuBar/MenuBar'
import './Dashboard.scss'
import DoctorRatios from "../../Components/Graphs/DoctorRatios";
import Fitness from "../../Components/Graphs/Fitness"
import RegulatedIndustries from "../../Components/Graphs/RegulatedIndustries"
import Crime from "../../Components/Graphs/Crime";
import Health from "../../Components/Graphs/Health";
import SearchBar from "../../Components/SearchBar/SearchBar";
import Filters from "../../Components/Filters/Filters";

const Dashboard = (props) => {
    
    const [state, setState] = useState('');
    const [county, setCounty] = useState('');
    const [trend, setTrend] = useState(false);    
    const [tabValue, setTabValue] = React.useState(0);
    const [heatMap, setHeatMap] = useState(false);
    const [mapVis, setMapVis] = useState(null);
    const [visParameters, setVisParameters] = useState([]);

    const locationObject = {
        state: state,
        setState: setState,
        county: county,
        setCounty: setCounty,
        trend: trend
    }

    const visualizations = [
        {
          value: 'healthB',
          label: 'Health Behaviors',
        },
        {
          value: 'clinCare',
          label: 'Clinical Care',
        },
        {
          value: 'socioEco',
          label: 'Socio-economic factors',
        },
        // {
        //   value: 'physEnv',
        //   label: 'Physical Environment',
        // },
        {
          value: 'lifeQuality',
          label: 'Quality of Life',
        }
      ];

      const visTabs = {        
        'healthB': [
            {
                label: 'Fitness',
                component: <Fitness location={locationObject} setVisParameters={setVisParameters}/>
            },
            {
                label: 'Impact of Regulated Industries',
                component: <RegulatedIndustries location={locationObject} setVisParameters={setVisParameters}/>
            },
        ],
        'clinCare': [
            {
                label: 'Doctor Ratios',
                component: <DoctorRatios location={locationObject} setVisParameters={setVisParameters}/>
                // component: <>Doctor Ratios - primary care, dentists, mental health providers</>
            },
            // {
            //     label: 'Uninsured',
            //     component: <>Uninsured - Adults, children, older</>
            // },
        ],
        'socioEco': [
            {
                label: 'Crime',
                component: <Crime location={locationObject} setVisParameters={setVisParameters}/>
            },
            // {
            //     label: 'Income',
            //     component: <Income location={location} />
            // },
        ],
        'physEnv': [
            // {
            //     label: 'Air & Water Quality',
            //     component: <>Air & Water Quality</>
            // },
            // {
            //     label: 'Housing & Transit',
            //     component: <>Housing & Transit - housing problems, traffic, cost burden</>
            // },
        ],
        'lifeQuality': [
            {
                label: 'Health',
                component: <Health location={locationObject} setVisParameters={setVisParameters}/>
            },
        ]
    }

    const [curVis, setCurVis] = useState('healthB')    

    const visData = {
        curVis,
        setCurVis,
        visualizations,
        trend,
        visTabs,
        setTrend,
        tabValue,
        setTabValue, 
        mapVis, 
        setMapVis, 
        heatMap, 
        setHeatMap
    }

    return (
        <>
        <MenuBar />
        <Grid container className="grid-container">
          <Grid container item xs={12} className="top-row">
            <Grid item xs={2} className="grid-item">
                <Grid container className="grid-container-sub">
                    <Grid item xs={12} className="grid-item-sub" style={{paddingBottom: '6px'}}>
                        <Paper className="paperContainer">
                            <SearchBar locationObject={locationObject}/>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} className="grid-item-sub" style={{paddingTop: '6px', paddingBottom: '6px'}}>
                        <Paper className="paperContainer">
                            <Score type="objective" locationObject={locationObject}/>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} className="grid-item-sub" style={{paddingTop: '6px'}}>
                        <Paper className="paperContainer">
                            <Score type="perception" locationObject={locationObject}/>
                        </Paper>
                    </Grid>
                </Grid>                
            </Grid>
            <Grid item xs={6} className="grid-item">                
                <Paper className="paperContainer">
                    <Visualization visData={visData} locationObject={locationObject}/>
                </Paper>
            </Grid>
            <Grid item xs={4} className="grid-item">
                <Paper className="paperContainer">
                    <Map locationObject={locationObject} visData={visData}/>
                </Paper>
            </Grid>
          </Grid>
          <Grid container item xs={12} className="bottom-row">
            <Grid item xs={2} className="grid-item">
                <Paper className="paperContainer">
                    <Filters visData={visData} visParameters={visParameters}/>
                </Paper>
            </Grid>
            <Grid item xs={6} className="grid-item">
                <Paper className="paperContainer">
                    <Insights locationObject={locationObject}/>
                </Paper>
            </Grid>
            <Grid item xs={4} className="grid-item">
                <Paper className="paperContainer">
                    <RegionalData />
                </Paper>
            </Grid>
            </Grid>
        </Grid>
        </>
      );
}

export default Dashboard;