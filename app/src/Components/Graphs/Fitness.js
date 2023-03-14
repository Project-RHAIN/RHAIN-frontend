import React, {useEffect, useState} from "react"
import BasicBarGraph from "./Common/BasicBarGraph";
import MultipleLineGraph from "./Common/MultipleLineGraph";
import { VictoryBar,VictoryChart, VictoryLabel, VictoryAxis, VictoryLegend, VictoryLine,VictoryTheme } from 'victory';

const Fitness = (props) => {        
    
    const [graphData, setData] = useState([])

    const [trendData, setTrendData] = useState([])

    const {state, county, trend} = props.location;    

    useEffect(() => {
        fetch(`http://localhost:8000/health-behavior?state_name=${state}&county_name=${county}&trend=${trend}`)
        .then(response => response.json())
        .then(data => {
            if (trend) {
                console.log(data)
                console.log(data.length)
                console.log(Object.keys(data[0]).length)
                console.log(Object.keys(data[0])[0])
                setTrendData(data)
            }
            else {
                var gdata = []
                Object.keys(data[0]).map(ele => {
                    gdata.push(
                        {
                            x: ele, y: data[0][ele]
                        }
                    )
                })
                console.log(gdata)
                console.log("Use Effect called")            
                setData(gdata)
            }
        })
        .catch(error => console.error(error));
    },[county, trend])
    // console.log("County is ", county)
    // console.log("GRAPH DATA", graphData)



    if(trend) {
        if(trendData.length > 0) {
            const years = trendData.map(d => d.Year);
            const inactive = trendData.map(d => ({ x: d.Year, y: d['% Physically Inactive'] }));
            const obesity = trendData.map(d => ({ x: d.Year, y: d['% Adults with Obesity'] }));
            const access = trendData.map(d => ({ x: d.Year, y: d['% With Access to Exercise Opportunities'] }));

            const lineStyles = {
                inactive: { data: { stroke: "red" } },
                obesity: { data: { stroke: "blue" } },
                access: { data: { stroke: "green" } }
            };
            
            const legendData = [
                { name: '% Physically Inactive', symbol: { fill: "red" } },
                { name: '% Adults with Obesity', symbol: { fill: "blue" } },
                { name: '% With Access to Exercise Opportunities', symbol: { fill: "green" } }
            ];
            return (  
                <MultipleLineGraph>
                    <VictoryLegend x={50} y={0}
                    // title="Legend"
                    centerTitle
                    orientation="horizontal"
                    gutter={20}
                    style={{ border: { stroke: "black" }, title: { fontSize: 20 } }}
                    data={legendData}
                    />
                    <VictoryAxis tickValues={years}/>
                    <VictoryAxis dependentAxis label="Percentage" axisLabelComponent={<VictoryLabel dy={-25} style={{fontSize: 20}} />}/>
                    <VictoryLine data={inactive} style={lineStyles.inactive} animate={{ duration: 1000 }}/>
                    <VictoryLine data={obesity} style={lineStyles.obesity} animate={{ duration: 1000 }}/>
                    <VictoryLine data={access} style={lineStyles.access} animate={{ duration: 1000 }}/>
                </MultipleLineGraph>
            );
            // const yParamNames = Object.keys(trendData[0]).filter(key => key !== "Year");
            // console.log("IN HERE", trendData)
            // // Define a color scale for the lines
            // const colorScale = ["#8b0000", "#4169e1", "#006400", "#8fbc8f", "#ffa500"];

            // // Create an array of datasets for VictoryJs
            // const datasets = yParamNames.map((yParamName, index) => {
            // return {
            //     data: trendData.map(d => ({x: d.Year, y: d[yParamName]})),
            //     label: yParamName,
            //     color: colorScale[index]
            // };
            // });

            // // Render the line chart using VictoryJs
            // return (
            // <VictoryChart 
            //     colorScale={colorScale}
            //     theme={VictoryTheme.material}
            //     width={900}
            //     height={400}
                
            // >
            //     <VictoryLegend x={50} y={0}
            //         // title="Legend"
            //         centerTitle
            //         orientation="horizontal"
            //         gutter={20}
            //         style={{ border: { stroke: "black" }, title: { fontSize: 20 } }}                
            //         data={datasets.map(d => ({name: d.label, symbol: {fill: d.color}}))}
            //     />
            //     <VictoryAxis dependentAxis label="Percentage" axisLabelComponent={<VictoryLabel dy={-25} style={{fontSize: 20}} />}/>
            //     <VictoryAxis
            //     tickValues={trendData.map(d => d.Year)}
            //     tickFormat={x => `${x}`}
            //     />
            //     {datasets.map(d => (
            //     <VictoryLine
            //         key={d.label}
            //         data={d.data}
            //         // labels={d.label}
            //         style={{data: {stroke: d.color, strokeWidth: 2}}}
            //         animate={{ duration: 1000 }}
            //     />
            //     ))}
                
            // </VictoryChart>            
            // );
        }
        return (
            <>Please select a state and county</>
        )
    } else {
    if(graphData.length > 0) {
      return (            
        <div style={{height: '100%', width: '100%'}} key={JSON.stringify(graphData)}>  {/* IMPORTANT Now gives the updated value but looks a little buggy*/}            
            <BasicBarGraph
                xlabel=""
                ylabel="Percentage"
                maxHeight = {150}
            >
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
            </BasicBarGraph>            
        </div>
        );
        }
        return (
            <>Please select a state and county</>
        )
    }
}

export default Fitness;