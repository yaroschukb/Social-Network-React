import React from 'react';
import style from './Footer.module.css';
import About from './About';
import { Row, Col } from 'antd';


function FooterComponent(props) {
    return (
        <Row justify='center' gutter={[10, 10]}>
          <Col> &copy; { new Date().getFullYear()} ReactStydyProject |</Col> 
          <Col><About className={style.modalWindow} /></Col> 
        </Row>
        )
};

export default FooterComponent;