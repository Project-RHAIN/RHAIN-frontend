import React from "react";
import Heading from "../Common/Heading/Heading";
import BasicTabs from "../Common/BasicTabs/BasicTabs";
import HospitalAdmissions from "../Graphs/HospitalAdmissions";
import Livability from "../Graphs/Livability";

const Visualization = (props) => {

    const {visualizations, curVis, setCurVis} = props.visData

    const visTabs = {        
        'healthB': [
            {
                label: 'Hospitalization Rate',
                component: <HospitalAdmissions />
                // component: <>Hospital Admissions</>
            },
            {
                label: 'Livability Factors',
                component: <Livability />
            },
            {
                label: 'Affordability',
                component: <>Affordability</>
            },
            {
                label: 'Pollution Levels',
                component: <>Pollution Levels</>
            },
        ],
        'clinCare': [
            {
                label: 'Doctor Ratios',
                component: <>Doctor Ratios - primary care, dentists, mental health providers</>
            },
            {
                label: 'Uninsured',
                component: <>Uninsured - Adults, children, older</>
            },
            {
                label: 'Preventable Hospital Stays',
                component: <>Preventable Hospital Stays</>
            },
            {
                label: 'Vaccinations',
                component: <>Vaccinations</>
            },
        ],
        'socioEco': [
            {
                label: 'Education',
                component: <>Education - High school completion, college completion, scores</>
            },
            {
                label: 'Employment',
                component: <>Employment</>
            },
            {
                label: 'Income',
                component: <>Income - Avg income, income inequality, gender pay gap, </>
            },
            {
                label: 'Safety',
                component: <>Safety - Violent crime, Injury deaths, homicides, suicides</>
            },
        ],
        'physEnv': [
            {
                label: 'Air & Water Quality',
                component: <>Air & Water Quality</>
            },
            {
                label: 'Housing & Transit',
                component: <>Housing & Transit - housing problems, traffic, cost burden</>
            },
        ],
        'lifeQuality': [
            {
                label: 'Life Expectancy',
                component: <>Life Expectancy</>
            },
            {
                label: '% of Poor Days',
                component: <>% of poor days - physical, mental, health</>
            },
        ]
    }

    const visHeading = visualizations.find(v => v.value === curVis).label;

    return (
        <React.Fragment>
            <Heading>Visualizations - {visHeading}</Heading>
            <BasicTabs tabData={visTabs[curVis]} />
        </React.Fragment>
    )
}

export default Visualization;