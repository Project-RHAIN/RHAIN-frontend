import React from "react";
import Heading from "../Common/Heading/Heading";
import BasicTabs from "../Common/BasicTabs/BasicTabs";
import { HospitalAdmissions } from "../Graphs/Graphs";

const Visualization = () => {

    const tempTabs = [
        {
            label: 'Hospitalization Rate',
            component: <HospitalAdmissions />
            // component: <>Hospital Admissions</>
        },
        {
            label: 'Affordability',
            component: <>Affordability</>
        },
        {
            label: 'Pollution Levels',
            component: <>Pollution Levels</>
        },
        {
            label: 'Livability Factors',
            component: <>Livability Factors</>
        },
    ]

    return (
        <React.Fragment>
            <Heading>Visualizations</Heading>
            <BasicTabs tabData={tempTabs} />
        </React.Fragment>
    )
}

export default Visualization;