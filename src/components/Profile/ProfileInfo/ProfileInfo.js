import React, {useState} from 'react';
import style from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import imgI from './../../assets/images/index.jpeg';
import lokingJobSmile from './../../assets/smiles/541675720.gif';
import HaveJobSmile from './../../assets/smiles/602271647.gif';
import ProfilestatusWithHooks from './ProfilestatusWithHooks';
import ProfileDataForm from './ProfileDataForm';
import { Button } from 'react-bootstrap';

const ProfileInfo = ({ profile, status, updateStatus, isAuth, saveProfile}) => {
	const [editMode, setEditMode] = useState(false)

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
	<div className = {style.content}>
		<div className={style.contentImg}>
		</div>
      	<div className={style.profileImg}>
      		<img src={profile.photos.large || imgI} alt="Ooops!" />
      	</div>
		{ editMode ? <ProfileDataForm profile={profile}
									  onSubmit={onSubmit}
									  initialValues={profile} /> 
				   : <ProfileData	profile={profile} 
				   					isAuth={isAuth}
									goToEditMode={()=>setEditMode(true)}/>}
		<div className={style.profileStatus}>
            <ProfilestatusWithHooks status={status} updateStatus={updateStatus}/>  
        </div>
    </div>
	)
}
};

const ProfileData = ({profile, isAuth, goToEditMode}) => {
	return (<div>
		{ isAuth && <div><Button onClick={goToEditMode} variant="success" size="sm">Edit Profile</Button></div>}
		<div className={style.fullname}>
      		<span>{profile.fullName}</span>
      	</div>
      	<div className={style.contacts}>
      		<span><b>Contacts:</b> </span>
			  <div>{Object.keys(profile.contacts).map(key=>
				<Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
      			)
      		}				
      		</div>
      	</div>
      	<div className={style.vacantion}>
			<div>	  
      			<span><b>Looking Vacantion Status:</b> </span>
      			<span>{profile.lookingForAJob ?
      				<img src={lokingJobSmile} alt="Yes!" />
      				:<img src={HaveJobSmile} alt="No!"/>
      			}</span>
			</div>
			<div>
				{profile.lookingForAJob && 
					<span>
						<b>My professional skills</b>: {profile.lookingForAJobDescription}
					</span>}
			</div>
		</div>
	</div> 
	)
}

const Contacts = ({contactTitle, contactValue}) => {
	if(!contactValue){
		return (
			<div className={style.contacts}>
				<b>{contactTitle}</b>:<p>Ooops, no contact!</p>
			</div>
			)	
	} else{
		return (
			<div className={style.contacts}>
				<b>{contactTitle}</b>: <h1>{contactValue}</h1>
			</div>
			)
	}
}

export default ProfileInfo; 