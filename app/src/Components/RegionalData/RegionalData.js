import React, {useEffect, useState} from "react";
import Heading from "../Common/Heading/Heading";
import { Typography, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";

const RegionalData = (props) => {

    const {state, county} = props.locationObject;

    const [regionalData, setRegionalData] = useState(null)

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/api/regional-data?state_name=${state}&county_name=${county}`)
        .then(response => response.json())
        .then(data => {    
            setRegionalData(data[0])
        })
        .catch(error => console.error(error));
    },[state, county])    

    return (
        <React.Fragment>
            <Heading>Regional Data</Heading>
            {state && county ? <>
            
                {regionalData ? <>
                    
                    <TableContainer style={{marginTop: '10px'}}>
                        <Table>
                            <TableBody>                            
                            {Object.entries(regionalData).map(([header, value]) => (
                                <TableRow key={header}>
                                {header === 'Income' ? (
                                    <>
                                        <TableCell><b>{header} (Avg)</b></TableCell>                                
                                        <TableCell>${value}</TableCell>
                                    </>
                                ) : header === 'Population density' ? (
                                    <>
                                        <TableCell><b>{header}</b></TableCell>
                                        <TableCell>{value} /sq.mi</TableCell>
                                    </>
                                ) : (
                                    <>
                                        <TableCell><b>{header}</b></TableCell>
                                        <TableCell>{value}</TableCell>
                                    </>
                                )}
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                
                    </> :
                    <Typography style={{padding: '10px'}}>Sorry we could not get the regional data for this county.</Typography>
                }
                
                </> :            
                <Typography style={{padding: '10px'}}>Please select a state and county to view data.</Typography>
            }                        
        </React.Fragment>
    )
}

export default RegionalData;