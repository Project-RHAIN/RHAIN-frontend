import React, {useEffect, useState} from "react"
import BasicBarGraph from "./Common/BasicBarGraph";
import { VictoryBar } from 'victory';

const Income = (props) => {        
    
    const [graphData, setData] = useState([])

    const {state, county, trend} = props.location;

    useEffect(() => {
        fetch(`http://172.17.0.2:8000/income?state_name=${state}&county_name=${county}&trend=${trend}`)
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
            // console.log(gdata)
            // console.log("Use Effect called")            
            setData(gdata)
        })
        .catch(error => console.error(error));
    },[county])
    // console.log("County is ", county)
    // console.log("GRAPH DATA", graphData)
      return (        
        <div style={{height: '100%', width: '100%'}} key={JSON.stringify(graphData)}>  {/* IMPORTANT Now gives the updated value but looks a little buggy*/}
            {graphData.length > 0 ? (
            <BasicBarGraph
                xlabel=""
                yperlabel="Doctors  person"
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

export default Income;