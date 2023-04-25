import { Grid } from "@mui/material";
import React from "react";
import newspaper from '../../Images/newspaper.jpg'

import './NewsCard.scss'

const NewsCard = (props) => {
    const {title, snippet, link, imglink} = props;

    return (
    <div className="news-card-container">
        <Grid container>
            <Grid item xs={2} style={{padding: '5px'}}>
                <img 
                    alt={title} 
                    src={imglink ? imglink : newspaper} 
                    width='100%' 
                    height='100%' 
                    style={{objectFit: 'cover'}}/>
            </Grid>
            <Grid item xs={10}>
                <h4>{title}</h4>
                <p>{snippet}</p>
            </Grid>
        </Grid>
    </div>
    )
}

export default NewsCard;