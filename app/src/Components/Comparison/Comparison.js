import React, { useEffect, useState } from "react";
import { Grid, Paper } from "@mui/material";
import Heading from "../Common/Heading/Heading";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Slider from "@mui/material/Slider";
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';
import { Modal, Typography, Tooltip } from "@mui/material";
import "./Comparison.scss";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

import stateData from "../../Data/US_States_and_Cities.json";

// const styles = {
//   modalContent: {
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "space-between",
//     padding: "20px",
//     width: "800px", // Adjust the width as needed
//   },
//   scoreBox: {
//     width: "45%", // Adjust the width as needed
//     padding: "20px",
//   },
// };

const marks = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 2,
    label: "",
  },
  {
    value: 4,
    label: "",
  },
  {
    value: 6,
    label: "",
  },
  {
    value: 8,
    label: "",
  },
  {
    value: 10,
    label: "10",
  },
];

const getTrackColor = (value) => {
  if (value <= 3) {
    return "#FF6B6B"; // red
  } else if (value <= 7) {
    return "#FFC107"; // yellow
  } else {
    return "#4CAF50"; // green
  }
};

const CustomSlider = styled(Slider)(({ theme, value }) => ({
  color: theme.palette.mode === "dark" ? "#3880ff" : "#3880ff",
  height: 8,
  padding: "15px 0",
  "& .MuiSlider-thumb": {
    height: 12,
    width: 12,
    backgroundColor: theme.palette.primary,
  },
  "& .MuiSlider-valueLabel": {
    fontSize: 10,
    fontWeight: "bold",
    top: 4,
    backgroundColor: "unset",
    color: theme.palette.text.primary,
    "&:before": {
      display: "none",
    },
    "& *": {
      background: "transparent",
      color: theme.palette.mode === "dark" ? "#fff" : "#000",
    },
  },
  "& .MuiSlider-track": {
    border: "none",
    height: 8,
    backgroundColor: getTrackColor(value),
  },
  "& .MuiSlider-rail": {
    opacity: 0.5,
    backgroundColor: "#bfbfbf",
    height: 8,
  },
  "& .MuiSlider-mark": {
    backgroundColor: "#bfbfbf",
    height: 8,
    width: 1,
    "&.MuiSlider-markActive": {
      opacity: 1,
      backgroundColor: "currentColor",
    },
  },
}));

const Comparison = (props) => {

  const {state, county} = props.locationObject;

  // console.log("THIS IS IN COMPARISON", state, county)

  const [state1, setState1] = useState(state);
  const [county1, setCounty1] = useState(county);
  const [state2, setState2] = useState("");
  const [county2, setCounty2] = useState("");

  const handleState1Change = (event) => {
    setState1(event.target.value);
  };

  const handleCounty1Change = (event) => {
    setCounty1(event.target.value);
  };

  const handleState2Change = (event) => {
    setState2(event.target.value);
  };

  const handleCounty2Change = (event) => {
    setCounty2(event.target.value);
  };

  const { type } = props;
  // const [sliderValueObjective1, setSliderValueObjective1] = useState(0);
  // const [sliderValueObjective2, setSliderValueObjective2] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const [featureData1, setFeatureData1] = useState([]);
  const [featureData2, setFeatureData2] = useState([]);

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  useEffect(() => {
    // console.log("In useEffect1")
    fetch(
      `${process.env.REACT_APP_BACKEND_URL}/api/compare-score?state_name=${state1}&county_name=${county1}`
    )
      .then((response) => response.json())
      .then((data) => {
        setFeatureData1(data);
      })
      .catch((error) => console.error(error));
  }, [county1, state1]);

  useEffect(() => {
    // console.log("In useEffect2")
    fetch(
      `${process.env.REACT_APP_BACKEND_URL}/api/compare-score?state_name=${state2}&county_name=${county2}`
    )
      .then((response) => response.json())
      .then((data) => {
        setFeatureData2(data);
      })
      .catch((error) => console.error(error));
  }, [state2, county2]);

  if (type === "comparison") {
    return (
      <div>
        <Heading style={{ display: "flex" }}>
          Compare Counties
          <Tooltip title="Click to compare counties">
            <CompareArrowsOutlinedIcon style={{width: '30px', height: '30px'}} onClick={handleOpen} className="obj-score-icon" />
          </Tooltip>
        </Heading>
        <Modal
          open={modalOpen}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="modal-box">
            <div className="comparison-container">
              <Grid container>
                <Grid item xs={6} className="grid-item-sub">
                  <Paper className="paperContainer">
                    <div className="comparison-column">
                      <React.Fragment>
                        <Heading>Region 1</Heading>
                      </React.Fragment>
                      <TextField
                        style={{ marginLeft: "10px", marginTop: "15px", width: "90%" }}
                        size="small"
                        select
                        fullWidth
                        label="State"
                        value={state1}
                        onChange={handleState1Change}
                      >
                        {Object.keys(stateData).map((state) => (
                          <MenuItem key={state} value={state}>
                            {state}
                          </MenuItem>
                        ))}
                      </TextField>
                      <TextField
                        style={{ marginLeft: "10px", marginTop: "15px", width: "90%" }}
                        select
                        fullWidth
                        size="small"
                        label="County"
                        value={county1}
                        onChange={handleCounty1Change}
                        disabled={!state1}
                        helperText={state1 ? "" : "Please select a state first"}
                      >
                        {state1 &&
                          stateData[state1].map((cnty) => (
                            <MenuItem key={cnty} value={cnty}>
                              {cnty}
                            </MenuItem>
                          ))}
                      </TextField>
                      <Box className="score-box">
                        {/* {sliderValueObjective1 <= 10 && sliderValueObjective1 > 0 ? (
                          <CustomSlider
                            aria-label="Custom marks"
                            value={sliderValueObjective1}
                            step={1}
                            min={0}
                            max={10}
                            valueLabelDisplay="on"
                            disableSwap
                            marks={marks}
                          />
                        ) : (
                          <>No data to show</>
                        )} */}
  
                        <div>
                          {featureData1.length > 0 ? (
                            <></>
                          ) : null}
                          {featureData1.length > 0 ? (
                            featureData1.map((obj, index) => {
                              const [key, value] = Object.entries(obj)[0];
                              return (
                                <>
                                  <Typography
                                    variant="body2"
                                    style={{ paddingBottom: "5px" }}
                                    key={key}
                                  >
                                    {key}
                                  </Typography>
                                  <CustomSlider
                                    aria-label="Custom marks"
                                    key={key}
                                    value={value}
                                    step={1}
                                    min={0}
                                    max={10}
                                    valueLabelDisplay="on"
                                    disableSwap
                                    marks={marks}
                                  />
                                </>
                              );
                            })
                          ) : (
                            <Heading>No data to display</Heading>
                          )}
                        </div>
                      </Box>
                    </div>
                  </Paper>
                </Grid>
                <Grid item xs={6} className="grid-item-sub">
                  <Paper className="paperContainer">
                    <div className="comparison-column">
                      <React.Fragment>
                        <Heading>Region 2</Heading>
                      </React.Fragment>
                      <TextField
                        style={{ marginLeft: "10px", marginTop: "15px", width: "90%" }}
                        size="small"
                        select
                        fullWidth
                        label="State"
                        value={state2}
                        onChange={handleState2Change}
                      >
                        {Object.keys(stateData).map((state) => (
                          <MenuItem key={state} value={state}>
                            {state}
                          </MenuItem>
                        ))}
                      </TextField>
                      <TextField
                        style={{ marginLeft: "10px", marginTop: "15px", width: "90%" }}
                        select
                        fullWidth
                        size="small"
                        label="County"
                        value={county2}
                        onChange={handleCounty2Change}
                        disabled={!state2}
                        helperText={state2 ? "" : "Please select a state first"}
                      >
                        {state2 &&
                          stateData[state2].map((cnty) => (
                            <MenuItem key={cnty} value={cnty}>
                              {cnty}
                            </MenuItem>
                          ))}
                      </TextField>
                      <Box className="score-box">
                        {/* {sliderValueObjective2 <= 10 && sliderValueObjective2 > 0 ? (
                          <CustomSlider
                            aria-label="Custom marks"
                            value={sliderValueObjective2}
                            step={1}
                            min={0}
                            max={10}
                            valueLabelDisplay="on"
                            disableSwap
                            marks={marks}
                          />
                        ) : (
                          <>No data to show</>
                        )} */}
  
                        <div>
                          {featureData2.length > 0 ? (
                            <></>
                          ) : null}
                          {featureData2.length > 0 ? (
                            featureData2.map((obj, index) => {
                              const [key, value] = Object.entries(obj)[0];
                              return (
                                <>
                                  <Typography
                                    variant="body2"
                                    style={{ paddingBottom: "5px" }}
                                    key={key}
                                  >
                                    {key}
                                  </Typography>
                                  <CustomSlider
                                    aria-label="Custom marks"
                                    key={key}
                                    value={value}
                                    step={1}
                                    min={0}
                                    max={10}
                                    valueLabelDisplay="on"
                                    disableSwap
                                    marks={marks}
                                  />
                                </>
                              );
                            })
                          ) : (
                            <Heading>No data to display</Heading>
                          )}
                        </div>
                      </Box>
                    </div>
                  </Paper>
                </Grid>
              </Grid>
            </div>
          </Box>
        </Modal>
      </div>
    );
  } else {
    return null;
  }
};

export default Comparison;

