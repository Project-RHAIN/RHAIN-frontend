import React from "react";
import {VictoryChart, VictoryLine, VictoryTheme, VictoryAxis, VictoryBar, VictoryLabel, VictoryScatter} from 'victory'

const BasicGraph = (props) => {
    const {xlabel, ylabel} = props
    // let elHeight = document.getElementById('box-graph').clientHeight
    // console.log("Width",HTMLDivElement.getBoundingClientRect().width)
    return (
        <VictoryChart            
            theme={VictoryTheme.material}
            width={900}
            height={400}
            >
            <VictoryAxis
                tickFormat={(y) => y}
                label={xlabel}
                axisLabelComponent={<VictoryLabel dy={25} style={{fontSize: 20}} />}
            />
            <VictoryAxis
                dependentAxis
                tickFormat={(y) => y}
                label={ylabel}
                axisLabelComponent={<VictoryLabel dy={-25} style={{fontSize: 20}} />}                       
            />
            {props.children}
        </VictoryChart>
    )
}

const HospitalAdmissions = () => {
    const dummydata = [
      { x: 2018, y: 20},
      { x: 2019, y: 24 },
      { x: 2020, y: 29 },
      { x: 2021, y: 35 },
      { x: 2022, y: 27 }
    ]

    return (
        <BasicGraph
            xlabel='Years'
            ylabel='Percentage'
        >
            <VictoryLine
                style={{
                data: { stroke: "#c43a31" },
                parent: { border: "1px solid #ccc"}
                }}
                data={dummydata}
            />
            <VictoryScatter
                style={{ data: { fill: "#c43a31" } }}
                size={4}
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
          <BasicGraph
            xlabel='Parameters'
            ylabel='Percentage'
          >
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