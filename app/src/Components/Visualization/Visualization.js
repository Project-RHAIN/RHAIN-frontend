import React from "react";
import Heading from "../Common/Heading/Heading";
import BasicTabs from "../Common/BasicTabs/BasicTabs";
// import HospitalAdmissions from "../Graphs/HospitalAdmissions";
// import Livability from "../Graphs/Livability";
import DoctorRatios from "../Graphs/DoctorRatios";
import Fitness from "../Graphs/Fitness"
import RegulatedIndustries from "../Graphs/RegulatedIndustries"
import Crime from "../Graphs/Crime";
import Health from "../Graphs/Health";
// import Income from "../Graphs/Income";

const Visualization = (props) => {

    const {visualizations, curVis, setCurVis, trend} = props.visData
    const {state, county} = props.locationObject

    const location = {
        state,
        county,
        trend
    }

    const visTabs = {        
        'healthB': [
            {
                label: 'Fitness',
                component: <Fitness location={location}/>
            },
            {
                label: 'Impact of Regulated Industries',
                component: <RegulatedIndustries location={location}/>
            },
        ],
        'clinCare': [
            {
                label: 'Doctor Ratios',
                component: <DoctorRatios location={location}/>
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
                component: <Crime location={location}/>
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
                component: <Health location={location}/>
            },
        ]
    }

    const visHeading = visualizations.find(v => v.value === curVis).label;

    return (
        <React.Fragment>
            <Heading>Visualizations - {visHeading}</Heading>
            <BasicTabs tabData={visTabs[curVis]} tabHeading={visHeading}/>
        </React.Fragment>
    )
}

export default Visualization;