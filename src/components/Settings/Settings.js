import React from 'react';
import ss from './Settings.module.css';
import {connect} from 'react-redux';
import {savePhotos} from '../../Redux/profilePageReducer.js'
import { Button } from 'react-bootstrap';


const Settings =(props)=> {

  const changeAvatar = (e) => {
    if(e.target.files.length){
      props.savePhotos(e.target.files[0])
    }
  }


	return (
  <div className={ss.content}>
      {props.isAuth && <div class="upload-btn-wrapper">
                        <button className={ss.btn}>Change Avatar</button>
                        <input type="file" onChange={changeAvatar} />
                      </div>}
  </div> 
  );
};

let mapStateToProps = (store) => {
  return {
    profile: store.profilePage.profile,
    autorizeUserId: store.auth.id,
    isAuth: store.auth.isAuth,
   } 
};

export default connect(mapStateToProps, {savePhotos})(Settings); 