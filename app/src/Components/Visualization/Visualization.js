import React from "react";
import Heading from "../Common/Heading/Heading";
import BasicTabs from "../Common/BasicTabs/BasicTabs";
// import HospitalAdmissions from "../Graphs/HospitalAdmissions";
// import Livability from "../Graphs/Livability";
// import Income from "../Graphs/Income";

const Visualization = (props) => {

    const {visualizations, curVis, visTabs, tabValue, setTabValue} = props.visData        

    const visHeading = visualizations.find(v => v.value === curVis).label;

    return (
        <React.Fragment>
            <Heading>Visualizations - {visHeading}</Heading>
            <BasicTabs tabData={visTabs[curVis]} tabHeading={visHeading} tabValue={tabValue} setTabValue={setTabValue}/>
        </React.Fragment>
    )
}

export default Visualization;