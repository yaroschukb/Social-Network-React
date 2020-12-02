import React from 'react';
import style from './Users.module.css';
import Paginator from '../common/Paginator/Paginator';
import UserProfile from './UserProfile/UserProfile';

const Users = (props) => {
  return (
    <div className={style.content}>
      <div>
        <Paginator
          totalItemsCount={props.totalUsersCount}
          pageSize={props.pageSize}
          pagesCount={props.pagesCount}
          currentPage={props.currentPage}
          onPageChanged={props.onPageChanged}
        />
      </div>
      <div>
        {props.users.map(e=> (
          <UserProfile
            key={e.id} 
            users={e}
            unfollow={props.unfollow}
            follow={props.follow}
            followingInProgress={props.followingInProgress}
          />
        ))}
      </div>
    </div>
  )
};

export default Users;
