import React from "react";
import {VictoryChart, VictoryTheme, VictoryAxis, VictoryLabel} from 'victory'

const BasicBarGraph = (props) => {
    const {xlabel, ylabel} = props
    // let elHeight = document.getElementById('box-graph').clientHeight
    // console.log("Width",HTMLDivElement.getBoundingClientRect().width)
    return (
        <VictoryChart            
            theme={VictoryTheme.material}
            domainPadding={70}
            width={900}
            height={400}
            >
            <VictoryAxis
                tickFormat={(y) => y}
                label={xlabel}
                axisLabelComponent={<VictoryLabel dy={25} style={{fontSize: 20}} />}
            />
            <VictoryAxis
                dependentAxis
                tickFormat={(y) => y}
                domain={{y: [0, 2000]}}
                label={ylabel}
                axisLabelComponent={<VictoryLabel dy={-40} style={{fontSize: 20}} />}                       
            />
            {props.children}
        </VictoryChart>
    )
}

export default BasicBarGraph;