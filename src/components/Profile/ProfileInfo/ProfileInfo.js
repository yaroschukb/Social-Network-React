import React, {useState} from 'react';
import style from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import imgI from './../../assets/images/index.jpeg';
import lokingJobSmile from './../../assets/smiles/541675720.gif';
import HaveJobSmile from './../../assets/smiles/602271647.gif';
import ProfilestatusWithHooks from './ProfilestatusWithHooks';
import ProfileDataForm from './ProfileDataForm';
import { Row, Col, Image, Dropdown, Menu, Button } from 'antd';

const ProfileInfo = ({ profile, status, updateStatus, isAuth, saveProfile}) => {

	const [editMode, setEditMode] = useState(false);

	if (!profile){
		return <div className={style.preLoader}>
					<Preloader />
			 	</div>
	} else {
		let onSubmit = (formData) => {
			saveProfile(formData)
			setEditMode(false)
	}

		return (
			<Col style={{width: '90%'}}>
					<Row className={style.contentImg} />
    	  	<Row className={style.profileImg}>
    	  		<Image src={profile.photos.large || imgI} alt="Ooops!" />
    	  	</Row>
					<Row className={style.profileStatus}>
						<ProfilestatusWithHooks status={status} updateStatus={updateStatus}/>  
					</Row>
					<Row>
						{editMode ? <ProfileDataForm profile={profile}
																					onSubmit={onSubmit}
																					initialValues={profile} />
					   					:	<ProfileData	profile={profile} 
																			isAuth={isAuth}
																			goToEditMode={()=>setEditMode(true)} />}
					</Row>
    	</Col>
		)
	}
};

const ProfileData = ({profile, isAuth, goToEditMode}) => {
	return (<Col>
					{isAuth && <Col><Button onClick={goToEditMode} variant="success" size="sm">Edit Profile</Button></Col>}
				<Row className={style.fullname}>
      		<span>{profile.fullName}</span>
      	</Row>
      	<Row className={style.contacts}>
      		<h3><b>Contacts:</b> </h3>
							{Object.keys(profile.contacts).map(key=>(
										<Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
      				))}
      	</Row> 
				<Row className={style.vacantion}>	  
      			<span><b>Looking Vacantion Status:</b> </span>
      			<span>{profile.lookingForAJob ?
      				<img src={lokingJobSmile} alt="Yes!" />
      				:<img src={HaveJobSmile} alt="No!"/>
      			}</span>
				</Row>
				<Row>
				{profile.lookingForAJob && 
					<span>
						<b>My professional skills</b>: {profile.lookingForAJobDescription}
					</span>}
				</Row>
	</Col> 
	)
};

const Contacts = ({contactTitle, contactValue}) => {
	if(contactValue=== ''){
		return (<>
			</>
			)	
	} else{
		return (
			<Row style={{textDecoration: 'none'}}>
				<span><b>{contactTitle}</b>: <h1>{contactValue}</h1></span>
			</Row>
			
			)
	}
};

export default ProfileInfo; 