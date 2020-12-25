import React from 'react';
import {connect} from 'react-redux';
import {savePhotos} from '../../Redux/profilePageReducer.js';
import { Col, Button } from 'antd';

const Settings =(props)=> {

  const changeAvatar = (e) => {
    if(e.target.files.length){
      props.savePhotos(e.target.files[0])
    }
  };


	return (
    <>
    <Col>
      {props.isAuth && <div class="upload-btn-wrapper">
                            <Button style={{width:'20%', backgroundColor:'#52c41a', color:'#fff'}}> Change Avatar </Button>
                            <input type="file" onChange={changeAvatar} />
                          </div>
      }
    </Col>
    </> 
  )
};

let mapStateToProps = (store) => {
  return {
    profile: store.profilePage.profile,
    autorizeUserId: store.auth.id,
    isAuth: store.auth.isAuth,
   } 
};

export default connect(mapStateToProps, {savePhotos})(Settings); 