import React from "react";
import Heading from "../Common/Heading/Heading";

const Score = (props) => {

    const {type} = props;

    return (
        <Heading>{type === "objective" ? "Objective" : "Perception"} Score</Heading>
    )
}

export default Score;
