import React from 'react';
import MyPostContainer from './MyPost/MyPostContainer.js';
import ProfileInfo from './ProfileInfo/ProfileInfo.js';

const Profile = (props) => {
	return (
	<div>
		<ProfileInfo profile={props.profile} 
					status={props.status} 
					updateStatus={props.updateStatus}
					isAuth={props.isAuth}
					saveProfile={props.saveProfile}  />
    	<MyPostContainer />
    </div>
    );
};

export default Profile; 

