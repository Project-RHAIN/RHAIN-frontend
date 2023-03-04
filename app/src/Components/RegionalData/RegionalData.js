import React from "react";
import Heading from "../Common/Heading/Heading";
import { Typography } from "@mui/material";

const RegionalData = () => {
    return (
        <React.Fragment>
            <Heading>Regional Data</Heading>
            <Typography style={{padding: '10px'}}>
            Population:		             3,186,989<br />
            Area:			                      948 sq mi<br />
            Pop. Density:	           3,989/sq mi<br />
            Median rent (2B):	    $2,057<br />
            Hospitals:		                20<br />
            Public Schools:	        215<br />

            </Typography>
        </React.Fragment>
    )
}

export default RegionalData;