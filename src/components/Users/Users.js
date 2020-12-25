import React from 'react';
import style from './Users.module.css';
import Paginator from '../common/Paginator/Paginator';
import UserProfile from './UserProfile/UserProfile';
import { Row } from 'antd';

const Users = (props) => {
  return (
    <div className={style.content}>
      <div>
        <Paginator
          totalItemsCount={props.totalUsersCount}
          currentPage={props.currentPage} 
          onPageChanged={props.onPageChanged}
        />
      </div>
      <Row>
        {props.users.map(e=> (
          <UserProfile
            key={e.id} 
            users={e}
            unfollow={props.unfollow}
            follow={props.follow}
            followingInProgress={props.followingInProgress}
          />
        ))}
      </Row>
    </div>
  )
};

export default Users;
