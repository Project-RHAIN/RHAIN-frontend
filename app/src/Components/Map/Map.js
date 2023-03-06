import React , {useEffect, useState} from "react"
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";



var userSelectedStateValue = null;
var userSelectedCountyValue = null;
const Map = (props) => {

    const [, setState] = useState();

    const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json";

    useEffect(() => {
        userSelectedStateValue = props.userSelectedStateValue;
        userSelectedCountyValue = props.userSelectedCountyValue;
        console.log(userSelectedStateValue);
        console.log(userSelectedCountyValue);
    })
    return (
    <div>
        <ComposableMap 
        projection="geoAlbersUsa"
        // width='800'
        // height='600'
        // style={{ width: "100%", height: "auto" }} 
        >
            <ZoomableGroup>
            <Geographies geography={geoUrl}>
                {({ geographies }) =>
                geographies.map(geo => {                    
                    // const cur = data.find(s => s.id === geo.id);
                    return (
                    <Geography
                        key={geo.rsmKey}
                        geography={geo}                    
                        stroke="#000000"
                        style={{
                            default: {
                                fill: "#a3c7ff",
                            },                        
                            hover: {
                            fill: "#F53",
                            },
                            pressed: {
                            fill: "#0015ff",
                            },
                        }}
                        // fill={cur ? colorScale(cur.unemployment_rate) : "#EEE"}
                    />
                    );
                })
                }
            </Geographies>
            </ZoomableGroup>
        </ComposableMap>
        </div>
    )
}

export default Map;