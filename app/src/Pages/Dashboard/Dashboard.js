import React from "react";
import { Grid, Paper } from "@mui/material";
import { height } from "@mui/system";
import './Dashboard.scss'

const Dashboard = () => {

    return (
        <Grid container className="grid-container">
          <Grid container xs={12} className="top-row">
            <Grid item xs={2} className="grid-item">
                <Grid container className="grid-container-sub">
                    <Grid item xs={12} className="grid-item-sub" style={{paddingBottom: '6px'}}>
                        <Paper className="paperContainer"></Paper>
                    </Grid>
                    <Grid item xs={12} className="grid-item-sub" style={{paddingTop: '6px', paddingBottom: '6px'}}>
                        <Paper className="paperContainer"></Paper>
                    </Grid>
                    <Grid item xs={12} className="grid-item-sub" style={{paddingTop: '6px'}}>
                        <Paper className="paperContainer"></Paper>
                    </Grid>
                </Grid>                
            </Grid>
            <Grid item xs={6} className="grid-item">                
                <Paper className="paperContainer"></Paper>
            </Grid>
            <Grid item xs={4} className="grid-item">
                <Paper className="paperContainer"></Paper>
            </Grid>
          </Grid>
          <Grid container xs={12} className="bottom-row">
            <Grid item xs={2} className="grid-item">
                <Paper className="paperContainer"></Paper>
            </Grid>
            <Grid item xs={6} className="grid-item">
                <Paper className="paperContainer"></Paper>
            </Grid>
            <Grid item xs={4} className="grid-item">
                <Paper className="paperContainer"></Paper>
            </Grid>
            </Grid>
        </Grid>
      );
}

export default Dashboard;