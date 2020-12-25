import React from 'react';
import ss from './News.module.css';
import {Link} from 'react-router-dom';
import moment from 'moment'
import { Row, Col, Image, Typography } from 'antd';
const { Title, Text } = Typography;


const News = (props) => {
  debugger
 	return (<>
    <Title style={{position:'relative', left: '30%'}}>The New York Times</Title>
    <Row className={ss.content}>
        {props.news.map(e=>{
          return (
            <Col className={ss.news_block} span={10}>
              <h1> {e.title} </h1>
              <Row>
                  <Image src={e.multimedia[0].url} alt={e.title}/>
              </Row>
              <Row> 
                {e.abstract} 
              </Row>
              <Link to={e.url}>
                Read more
              </Link>
              <Row>
                <Text>Published date: {e.published_date.split('').splice(0,10).join('').split('-').reverse().join('-')}</Text>
              </Row>        
            </Col>
          )
        })}
    </Row>
    </> 
  )
};

export default News;