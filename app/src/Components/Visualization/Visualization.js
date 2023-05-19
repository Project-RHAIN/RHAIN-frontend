import React, {useState} from "react";
import Heading from "../Common/Heading/Heading";
import BasicTabs from "../Common/BasicTabs/BasicTabs";
import { Button } from "@mui/material";
import Comparison from "../Comparison/Comparison";
import './Visualization.scss'
// import HospitalAdmissions from "../Graphs/HospitalAdmissions";
// import Livability from "../Graphs/Livability";
// import Income from "../Graphs/Income";

const Visualization = (props) => {

    const {visualizations, curVis, visTabs, tabValue, setTabValue} = props.visData    
    
    const [modalOpen, setModalOpen] = useState(false);

    const visHeading = visualizations.find(v => v.value === curVis).label;

    return (
        <React.Fragment>
            {/* <Comparison locationObject={props.locationObject} modalOpen={modalOpen} setModalOpen={setModalOpen}/> */}
            <div class="viz-float-header">
                <Heading>Visualizations - {visHeading}</Heading>
                {/* <Button variant="contained" size="small" className="compare-button" onClick={()=>{setModalOpen(true)}}>Compare Counties</Button> */}
            </div>
            <BasicTabs tabData={visTabs[curVis]} tabHeading={visHeading} tabValue={tabValue} setTabValue={setTabValue}/>
        </React.Fragment>
    )
}

export default Visualization;