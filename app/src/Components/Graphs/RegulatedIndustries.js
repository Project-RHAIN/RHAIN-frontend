import React, {useEffect, useState} from "react"
import BasicBarGraph from "./Common/BasicBarGraph";
import MultiLineGraph from "./Common/MultiLineGraph";

const RegulatedIndustries = (props) => {        
    
    const [graphData, setData] = useState([])

    const [trendData, setTrendData] = useState([])

    const {state, county, trend} = props.location;

    useEffect(() => {
        fetch(`http://localhost:8000/regulated-industries?state_name=${state}&county_name=${county}&trend=${trend}`)
        .then(response => response.json())
        .then(data => {      
            if (trend)   {
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
            return(                
                <MultiLineGraph trendData={trendData} ylabel='Percentage' />                
            )            
        }
        return (
            <>Please select a state and county</>
        )
    } else {
    if(graphData.length > 0) {      
      return (                    
            <BasicBarGraph
                xlabel=""
                ylabel="Percentage"
                maxHeight = {100}
                graphData={graphData}
            />                
        );
        }
        return (
            <>Please select a state and county</>
        )
    }
}

export default RegulatedIndustries;