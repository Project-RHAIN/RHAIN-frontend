import React, {useEffect, useState} from "react"
import BasicBarGraph from "./Common/BasicBarGraph";
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';

const DoctorRatios = (props) => {        
    
    const [graphData, setData] = useState([])

    const {state, county} = props.location;

    useEffect(() => {
        fetch(`http://localhost:8000/clinical-care?state_name=${state}&county_name=${county}`)
        .then(response => response.json())
        .then(data => {        
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
        })
        .catch(error => console.error(error));
    },[county])
    console.log("County is ", county)
    console.log("GRAPH DATA", graphData)
      return (                
        graphData.length > 0 ? (
            <BasicBarGraph
                xlabel=""
                ylabel="Doctors per person"
                key={JSON.stringify(graphData)}
            >
                <VictoryBar
                // key={JSON.stringify(graphData)}
                style={{
                    data: { stroke: "#c43a31" },
                    parent: { border: "1px solid #ccc" },
                }}
                labels={({ datum }) => Math.round(datum.y)}
                animate={{ duration: 1000 }}
                data={graphData}
                />
            </BasicBarGraph>
            ) : (
            <div>Loading data...</div>
            )        
      )
}

export default DoctorRatios;