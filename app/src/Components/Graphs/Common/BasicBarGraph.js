import React from "react";
import {VictoryChart, VictoryTheme, VictoryAxis, VictoryLabel, VictoryBar} from 'victory'

const BasicBarGraph = (props) => {
    const {xlabel, ylabel, maxHeight, graphData} = props
    // let elHeight = document.getElementById('box-graph').clientHeight
    // console.log("Width",HTMLDivElement.getBoundingClientRect().width)
    let height = maxHeight ? maxHeight : 2000;
    // console.log(graphData)
    return (
        <VictoryChart            
            theme={VictoryTheme.material}
            domainPadding={70}
            width={700}
            height={400}
            padding={{ left: 70, top: 30, bottom: 40, right: 20}}
            key={JSON.stringify(graphData)}
            >
            <VictoryAxis
                tickFormat={(y) => y}
                label={xlabel}
                axisLabelComponent={<VictoryLabel dy={25} style={{fontSize: 20}} />}
            />
            <VictoryAxis
                dependentAxis
                tickFormat={(y) => y}
                domain={{y: [0, height]}}
                label={ylabel}
                axisLabelComponent={<VictoryLabel dy={-40} style={{fontSize: 20}} />}                       
            />
            <VictoryBar
                // key={JSON.stringify(graphData)}
                style={{
                    data: { stroke: "#c43a31" },
                    parent: { border: "1px solid #ccc" },
                }}
                labels={({ datum }) => datum.y.toFixed(2)}
                animate={{ duration: 1000 }}
                data={graphData}
                />
        </VictoryChart>
    )
}

export default BasicBarGraph;