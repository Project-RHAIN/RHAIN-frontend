import React from "react";
import { Grid, Paper } from "@mui/material";
import { height } from "@mui/system";
import Visualization from "../../Components/Visualization/Visualization";
import Insights from "../../Components/Insights/Insights";
import RegionalData from "../../Components/RegionalData/RegionalData";
import Map from "../../Components/Map/Map";
import Score from "../../Components/Score/Score";
import './Dashboard.scss'
import SearchBar from "../../Components/SearchBar/SearchBar";
import Filters from "../../Components/Filters/Filters";

const Dashboard = () => {

    return (
        <Grid container className="grid-container">
          <Grid container item xs={12} className="top-row">
            <Grid item xs={2} className="grid-item">
                <Grid container className="grid-container-sub">
                    <Grid item xs={12} className="grid-item-sub" style={{paddingBottom: '6px'}}>
                        <Paper className="paperContainer">
                            <SearchBar/>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} className="grid-item-sub" style={{paddingTop: '6px', paddingBottom: '6px'}}>
                        <Paper className="paperContainer">
                            <Score type="objective"/>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} className="grid-item-sub" style={{paddingTop: '6px'}}>
                        <Paper className="paperContainer">
                            <Score type="perception"/>
                        </Paper>
                    </Grid>
                </Grid>                
            </Grid>
            <Grid item xs={6} className="grid-item">                
                <Paper className="paperContainer">
                    <Visualization />
                </Paper>
            </Grid>
            <Grid item xs={4} className="grid-item">
                <Paper className="paperContainer">
                    <Map />
                </Paper>
            </Grid>
          </Grid>
          <Grid container item xs={12} className="bottom-row">
            <Grid item xs={2} className="grid-item">
                <Paper className="paperContainer">
                    <Filters/>
                </Paper>
            </Grid>
            <Grid item xs={6} className="grid-item">
                <Paper className="paperContainer">
                    <Insights />
                </Paper>
            </Grid>
            <Grid item xs={4} className="grid-item">
                <Paper className="paperContainer">
                    <RegionalData />
                </Paper>
            </Grid>
            </Grid>
        </Grid>
      );
}

export default Dashboard;