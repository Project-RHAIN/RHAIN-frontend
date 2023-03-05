import React from "react"
import BasicGraph from "./Common/BasicGraph"
import {VictoryBar} from 'victory'

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
                  animate={{ duration: 1000 }}
                  data={dummydata}
              />
          </BasicGraph>
      )
}

export default Livability;