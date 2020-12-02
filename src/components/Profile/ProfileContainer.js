import React from 'react';
import Profile from './Profile.js';
import {connect} from 'react-redux';
import {getUserProfile, getStatus, updateStatus, saveProfile} from '../../Redux/profilePageReducer';
import {withRouter} from 'react-router-dom';
import {compose} from 'redux';

class ProfileContainer extends React.Component {
  refreshProfile(){
    let userId = this.props.match.params.userId;
      if(!userId){
        userId=this.props.autorizeUserId;
        if(!userId){
          this.props.history.push("/Login");
        }
      }
      this.props.getUserProfile(userId);
      this.props.getStatus(userId);
  }

	componentDidMount(){
	    this.refreshProfile();
    }

    componentDidUpdate(prevProps){
      if(this.props.match.params.userId !== prevProps.match.params.userId){
        this.refreshProfile();
      }
    }
       
	render(){
    return (
      <div>
        <Profile 
            {...this.props} 
            profile={this.props.profile} 
            status={this.props.status} 
            updateStatus={this.props.updateStatus}
            isAuth={this.props.isAuth}
            saveProfile={this.props.saveProfile}
        />
      </div>
    )
  }
};

let mapStateToProps = (store) => {
      return {
        profile: store.profilePage.profile,
        status: store.profilePage.status,
        autorizeUserId: store.auth.id,
        isAuth: store.auth.isAuth,
      } 
};
   
export default compose(connect( 
    mapStateToProps, 
    {getUserProfile, getStatus, updateStatus, saveProfile}
    ),
    withRouter)
    (ProfileContainer);

