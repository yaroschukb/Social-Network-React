import React from 'react';
import MyPostContainer from './MyPost/MyPostContainer.js';
import ProfileInfo from './ProfileInfo/ProfileInfo.js';
import { Row, Col } from 'antd';

const Profile = (props) => {
	return (
		<Row gutter={[0, 20]}>
			<Col span={24}>
				<ProfileInfo profile={props.profile} 
							status={props.status} 
							updateStatus={props.updateStatus}
							isAuth={props.isAuth}
							saveProfile={props.saveProfile}  
				/>
			</Col>
			<Col span={24}>
				<MyPostContainer />
			</Col>
		</Row>
    )
};

export default Profile; 

