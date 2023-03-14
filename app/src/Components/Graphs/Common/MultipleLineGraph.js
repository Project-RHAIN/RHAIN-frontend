import React from "react";
import {VictoryChart, VictoryTheme} from 'victory'

const MultipleLineGraph = (props) => {    
    // let elHeight = document.getElementById('box-graph').clientHeight
    // console.log("Width",HTMLDivElement.getBoundingClientRect().width)
    return (
        <VictoryChart            
            theme={VictoryTheme.material}
            width={900}
            height={400}
            >            
            {props.children}
        </VictoryChart>
    )
}

export default MultipleLineGraph;