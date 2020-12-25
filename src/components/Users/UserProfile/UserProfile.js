import React from 'react';
import style from './UserProfile.module.css';
import userPhoto from './../../assets/images/index.jpeg';
import { NavLink } from 'react-router-dom';
import { Col } from 'antd';


const UserProfile = ({users, ...props}) => {
   return (
    <Col className={style.container} key={props.key} span={8}>
      <div className={style.box}>
        <div>
          <NavLink to={"/Profile/" + users.id}>
            <img
              src={users.photos.small != null ? users.photos.small : userPhoto}
              className={style.userPhoto}
              alt="OOOPs"
            />
          </NavLink>
        </div>
        <div className={style.button}>
            {users.followed 
              ? ( <button
                      disabled={props.followingInProgress.some((id) => id === users.id)}
                      onClick={() => {props.unfollow(users.id)}}
                      className={style.follow}
                  >
                    Unfollow
                  </button>
                ) 
            :   ( <button
                      disabled={props.followingInProgress.some((id) => id === users.id)}
                      onClick={() => {props.follow(users.id)}}
                      className={style.unfollow}
                  >
                    Follow
                  </button>
                )}
        </div>
      </div>
      <div className={style.nameStatus}>
        <div className={style.name_block}>
          <span>Name:</span>
          <span className={style.name}> {users.name} </span>
        </div>
        <div className={style.status_block}>
          <span>Status:</span>
          <div className={style.status}>
            {users.status}
          </div>
        </div>
      </div>
    </Col>
  )
};

export default UserProfile;
