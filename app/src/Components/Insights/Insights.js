import React, {useEffect, useState} from "react";
import Heading from "../Common/Heading/Heading";
import NewsCard from "./NewsCard";

const Insights = (props) => {

    const {state, county} = props.locationObject

    const [articles, setArticles] = useState([])

    // useEffect(() => {
    //     fetch(`http://rhain-backend_web:8000/crime?state_name=${state}&county_name=${county}&trend=${trend}`)
    //     .then(response => response.json())
    //     .then(data => {}})

    useEffect(() => {
        // fetch(``)
        // console.log("Insights useEffect called")
        if(county) {
            // console.log("COUNTY CHOSEN")
            fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.REACT_APP_GOOGLE_NEWS}&cx=${process.env.REACT_APP_GOOGLE_NEWS_CX}&q=Healthcare%20${county}%20${state}&num=10&sort=date:r:2023-04-25`)
            .then(response => response.json())
            .then(data => {
                // console.log(data.items)
                // title, link, snippet, pagemap.cse_omage[0].src
                // let item = data.items[2]
                // console.log(item.title)
                // console.log(item.snippet)
                // console.log(item.link)
                // console.log(item.pagemap.cse_image[0].src)
                setArticles(data.items)
            })
        }
    },[county])

    return (
        <React.Fragment>
            <Heading>Latest Updates</Heading>
            <div style={{overflow: 'auto', maxHeight: '85%'}}>
                {articles.length > 0 ?                              
                    articles.map((article, index) => {

                        try {

                        return (
                            <NewsCard key={index} title={article.title} snippet={article.snippet} link={article.link} imglink={article.pagemap.cse_image ? article.pagemap.cse_image[0].src : null}/>
                        ) } catch(e) {
                            return null;
                        }
                    })                                      
            : <p style={{marginLeft: '10px'}}>Select a region to get the latest healthcare news!</p>
             }                
            </div>
        </React.Fragment>
    )
}

export default Insights;