import React from "react"
import BasicGraph from "./Common/BasicGraph"
import {VictoryLine, VictoryScatter} from 'victory'

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
                animate={{ duration: 1000 }}
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

export default HospitalAdmissions;