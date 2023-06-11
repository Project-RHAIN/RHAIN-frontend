import React, {useEffect, useState} from "react"
import BasicBarGraph from "./Common/BasicBarGraph";
import MultiLineGraph from "./Common/MultiLineGraph";

const Crime = (props) => {        
    
    const [graphData, setData] = useState([])

    const [trendData, setTrendData] = useState([])

    const {state, county, trend} = props.location;

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/api/crime?state_name=${state}&county_name=${county}&trend=${trend}`)
        .then(response => response.json())
        .then(data => {    
            if (trend) {
                const keysArray = Object.keys(data[0]).filter(key => key !== 'Year');                
                props.setVisParameters(keysArray)
                setTrendData(data)
            } else {    
            var gdata = []
            var params = []
            Object.keys(data[0]).map(ele => {
                gdata.push(
                    {
                        x: ele, y: data[0][ele]
                    }
                )
                params.push(ele)
            })                
            props.setVisParameters(params)
            // console.log(gdata)
            // console.log("Use Effect called")            
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
                <MultiLineGraph trendData={trendData} ylabel='Number of reports per 100k population' />                
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
                ylabel="Number of reports per 100k population"
                maxHeight = {800}
                graphData={graphData}
            />                
        );
        }
        return (
            <>Please select a state and county</>
        )
    }
}

export default Crime;