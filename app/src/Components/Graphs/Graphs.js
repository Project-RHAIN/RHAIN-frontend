import React from "react";
import {VictoryChart, VictoryLine, VictoryTheme, VictoryAxis, VictoryBar} from 'victory'

const BasicGraph = (props) => {

    return (
        <VictoryChart            
            theme={VictoryTheme.material}
            >
            <VictoryAxis
                tickFormat={(y) => y}
            />
            <VictoryAxis
                dependentAxis
                tickFormat={(y) => y}                            
            />
            {props.children}
        </VictoryChart>
    )
}

const HospitalAdmissions = () => {
    const dummydata = [
      { x: 2018, y: 20 },
      { x: 2019, y: 24 },
      { x: 2020, y: 29 },
      { x: 2021, y: 35 },
      { x: 2022, y: 27 }
    ]

    return (
        <BasicGraph>
            <VictoryLine
                style={{
                data: { stroke: "#c43a31" },
                parent: { border: "1px solid #ccc"}
                }}
                data={dummydata}
            />
        </BasicGraph>
    )
}

const Livability = () => {
    const dummydata = [
        { x: 1, y: 20 },
        { x: 2, y: 24 },
        { x: 3, y: 29 },
        { x: 4, y: 35 },        
      ]
  
      return (
          <BasicGraph>
              <VictoryBar
                  style={{
                  data: { stroke: "#c43a31" },
                  parent: { border: "1px solid #ccc"}
                  }}
                  data={dummydata}
              />
          </BasicGraph>
      )
}

export {
    HospitalAdmissions,
    Livability
}