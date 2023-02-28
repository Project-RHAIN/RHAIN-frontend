import React from "react";
import Heading from "../Common/Heading/Heading";
import { Typography } from "@mui/material";

const Insights = () => {
    return (
        <React.Fragment>
            <Heading>Insights</Heading>
            <Typography style={{padding: '10px'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas justo leo, pretium in elementum a, tempus vel neque. Curabitur tristique turpis eget neque posuere euismod. Morbi ultrices, nisl sed tincidunt lobortis, urna ante bibendum urna, vitae elementum erat lectus ut odio. Nulla nec semper libero. 
            <br /><br />
            Aliquam sit amet convallis lorem. Pellentesque commodo libero nibh, pretium sollicitudin arcu consequat vel. Integer bibendum placerat elit et fringilla.
            </Typography>
        </React.Fragment>
    )
}

export default Insights;