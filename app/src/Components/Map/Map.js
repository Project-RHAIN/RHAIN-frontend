import React, {useState} from "react"
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
import usCounties from 'us-atlas/counties-10m.json';
import usStates from 'us-atlas/states-10m.json';
import stateCords from '../../Data/State_Coordinates.json'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import './Map.scss'

const Map = () => {
      
    const curState = 'California';  
         
    const selectedState = usStates.objects.states.geometries.find(state => state.properties.name === curState);
    const selectedStateCord = stateCords.find(obj => obj.state === curState)
    // console.log(selectedStateCord)    
    const mapCenter = [selectedStateCord.longitude, selectedStateCord.latitude];    
    const [zoom, setZoom] = useState(selectedStateCord.zoomLevel ? selectedStateCord.zoomLevel : 2)

    const handleZoomIn = () => {
    if (zoom >= 10) return; // Maximum zoom level
    setZoom(zoom + 1);
    };

    const handleZoomOut = () => {
    if (zoom <= 1) return; // Minimum zoom level
    setZoom(zoom - 1);
    };

    const clickState = (state) => {
        console.log("state clicked", state)
    }

    const clickCounty = (county) => {
        console.log("county clicked", county)
    }

    return (
    <div className="mainMap">        
        <AddCircleIcon className="button" onClick={handleZoomIn}/>                
        <RemoveCircleIcon className="button bottom-button" onClick={handleZoomOut}/>        
        <ComposableMap 
        projection="geoAlbersUsa"
        // width='800'
        // height='600'
        style={{ width: "100%", height: "100%" }} 
        >
            <ZoomableGroup
                zoom={zoom} 
                center={mapCenter}
            >
            <Geographies geography={usStates}>
                {({ geographies }) =>
                geographies.map(geo => {
                    // console.log(geo)
                    return (                                        
                    <Geography 
                        onClick={() => clickState(geo)}
                        style={{
                            default: { outline: "none" },
                            hover: { outline: "none", fill: '#d4defa' },
                            pressed: { outline: "none"},
                          }}
                        key={geo.rsmKey} 
                        geography={geo} 
                        fill="#DDD" 
                        stroke="#FFF" 
                        strokeWidth={0.5} />
                )})
                }
            </Geographies>
            <Geographies geography={usCounties}>
                {({ geographies }) =>                
                geographies.filter(geo => {
                    // geo.properties.name in stateData[state]
                    return geo.id.slice(0, 2) === selectedState.id
                })
                .map(geo => {                    
                    // console.log(geo)
                    // const cur = data.find(s => s.id === geo.id);
                    return (
                    <Geography
                        key={geo.rsmKey}
                        geography={geo}      
                        onClick={() => clickCounty(geo)}              
                        stroke="#000000"
                        style={{
                            default: {
                                fill: "#a3c7ff",
                                outline: 'none'
                            },                        
                            hover: {
                            fill: "#F53",
                            outline: 'none'
                            },
                            pressed: {
                            fill: "#015ff",
                            outline: 'none'
                            },
                        }}                        
                    />
                    );
                })
                }
            </Geographies>
            {/* <ZoomInButton  />
            <ZoomOutButton  /> */}
            </ZoomableGroup>
        </ComposableMap>
        </div>
    )
}

export default Map;