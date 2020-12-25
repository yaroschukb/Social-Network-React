import React from 'react';
import ReactBull from './../assets/images/react-bull.png';
import { Link } from 'react-router-dom';
import { Button, Col, Layout, Row, Avatar, Space, Image } from 'antd';
const {Header} = Layout;

const AppHeader =(props)=> {
	return (
		<>
			<Header style={{width:'100%', height: '70px'}}>
            <Row align='baseline'>
							<Col span={8} align='baseline'>
								<Space direction='horizontal' align='center'>
									<Link to="/Profile"> <Image width={60} preview={false} style={{borderRadius: '50%'}} src={ReactBull} alt="OOOpppsss!" /></Link>
									<Link to="/Profile"> <div style={{fontSize: '25px', color:'#fff'}}>React Social</div></Link>
								</Space>
							</Col>
							<Col span={8} offset={8} align='baseline'>
								{props.isAuth
									? <Space size={10}>
											<Avatar size={60} style={{ backgroundColor: 'lightblue'}}>{props.login}</Avatar>
											<Button type="primary" onClick={props.logout} span={3}>Log Out</Button>
										</Space>
									: <>
											<Button type="primary"><Link to={'/Login'}>Login</Link></Button>
										</>
								}
							</Col>
            </Row>
      </Header>
		</>
  )
};

export default AppHeader; 