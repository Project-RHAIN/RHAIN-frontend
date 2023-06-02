import React from "react";
import { VictoryChart, VictoryLabel, VictoryAxis, VictoryLegend, VictoryLine,VictoryTheme } from 'victory';

const MultiLineGraph = (props) => {

    const {trendData, ylabel} = props;

    const yParamNames = Object.keys(trendData[0]).filter(key => key !== "Year");
    // console.log("IN HERE", trendData)
    // Define a color scale for the lines
    const colorScale = ["#ff0000", "#003ffc", "#00db00", "#deb607", "#b805ff"];

    // Create an array of datasets for VictoryJs
    const datasets = yParamNames.map((yParamName, index) => {
    return {
        data: trendData.map(d => ({x: d.Year, y: d[yParamName]})),
        label: yParamName,
        color: colorScale[index]
    };
    });

    // Render the line chart using VictoryJs
    return (
    <VictoryChart 
        colorScale={colorScale}
        theme={VictoryTheme.material}
        width={700}
        height={400}
        padding={{ left: 50, top: 50, bottom: 40, right: 20}}
        key={JSON.stringify(trendData)}
    >
        <VictoryLegend x={50} y={0}
            // title="Legend"
            centerTitle
            orientation="horizontal"
            gutter={20}
            style={{ border: { stroke: "black" }, title: { fontSize: 20 } }}                
            data={datasets.map(d => ({name: d.label, symbol: {fill: d.color}}))}
        />
        <VictoryAxis dependentAxis label={ylabel} axisLabelComponent={<VictoryLabel dy={-40} style={{fontSize: 20}} />}/>
        <VictoryAxis
        tickValues={trendData.map(d => d.Year)}
        tickFormat={x => `${x}`}
        />
        {datasets.map(d => (
        <VictoryLine
            key={d.label}
            data={d.data}
            // labels={d.label}
            style={{data: {stroke: d.color, strokeWidth: 2}}}
            animate={{ duration: 1000 }}
        />
        ))}
        
    </VictoryChart>            
    );

}

export default MultiLineGraph;