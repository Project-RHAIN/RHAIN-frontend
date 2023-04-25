import React, {useEffect, useState} from "react"
import BasicBarGraph from "./Common/BasicBarGraph";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryLegend, VictoryLine, VictoryLabel } from 'victory';
import MultipleLineGraph from "./Common/MultipleLineGraph";

const Health = (props) => {        
    
    const [graphData, setData] = useState([])

    const [trendData, setTrendData] = useState([])

    const {state, county, trend} = props.location;

    useEffect(() => {
        fetch(`http://localhost:8000/health?state_name=${state}&county_name=${county}&trend=${trend}`)
        .then(response => response.json())
        .then(data => {     
            if (trend) {
                console.log(data)
                setTrendData(data)
            } else {    
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
    },[county])
    console.log("County is ", county)
    console.log("GRAPH DATA", graphData)

    if (trend) {
        if(trendData.length > 0) {
            const years = trendData.map(d => d.Year);
            const inactive = trendData.map(d => ({ x: d.Year, y: d['Average Number of Physically Unhealthy Days'] }));
            const obesity = trendData.map(d => ({ x: d.Year, y: d['Average Number of Mentally Unhealthy Days'] }));            

            const lineStyles = {
                inactive: { data: { stroke: "red" } },
                obesity: { data: { stroke: "blue" } }                
            };
            
            const legendData = [
                { name: 'Average Number of Physically Unhealthy Days', symbol: { fill: "red" } },
                { name: 'Average Number of Mentally Unhealthy Days', symbol: { fill: "blue" } },                
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
                    <VictoryAxis dependentAxis label="Rate" axisLabelComponent={<VictoryLabel dy={-40} style={{fontSize: 20}} />}/>
                    <VictoryLine data={inactive} style={lineStyles.inactive} animate={{ duration: 1000 }}/>
                    <VictoryLine data={obesity} style={lineStyles.obesity} animate={{ duration: 1000 }}/>                    
                </MultipleLineGraph>
            );
        }
        return (
            <>Please select a state and county</>
        )
    }
      return (        
        <div style={{height: '100%', width: '100%'}} key={JSON.stringify(graphData)}>  {/* IMPORTANT Now gives the updated value but looks a little buggy*/}
            {graphData.length > 0 ? (
            <BasicBarGraph
                xlabel=""
                ylabel="Number of days"
                maxHeight={10}
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
            ) : (
            <div>Loading data...</div>
            )}
        </div>
        );
}

export default Health;