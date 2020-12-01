import React from 'react';
import ss from './News.module.css';
import {Link} from "react-router-dom";


const News =(props)=> {
 	return (
  <div className={ss.content}>
    <div>
    {props.news.map(e=>{
        return (<div className={ss.news_block}>
                  <h1>{e.title}</h1>
                  <div>
                      <img src={e.multimedia[0].url} alt={e.title}/>
                  </div>
                  <span>{e.abstract}</span>
                  <Link to={e.url}>Read more</Link>
                  <span>{e.created_date}</span>        
                </div>)
      })}
    </div>
      
  </div> 
  )
};



export default News;