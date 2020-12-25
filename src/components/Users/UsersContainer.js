import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {
  follow, 
  unfollow, 
  setUsers, 
  setCurrentPage, 
  setTotalUsersCount, 
  toggleIsFetching, 
  getUsersThunkCreator,
  toggleFollowingProgress
} from '../../Redux/usersPageReducer.js';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader.js';
import style from './UsersContainer.module.css'
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import { 
  getUsers, 
  isFetching, 
  totalUsersCount,
  Page, 
  currentPage,
  followingInProgress 
} from '../../Redux/users-selectors';

class UsersContainer extends React.Component {

  componentDidMount () {
    let {currentPage, pageSize} = this.props;
    this.props.getUsers(currentPage, pageSize);
  };

  onPageChanged = pageNumber => {
    let {pageSize} = this.props;
    this.props.getUsers(pageNumber, pageSize);
  };

  render () {  
    return  (
      <React.Fragment>
        {this.props.isFetching ?  <Preloader className={style.preloader}/> : null }
        <Users totalUsersCount={this.props.totalUsersCount}
               pageSize={this.props.pageSize} 
               currentPage={this.props.currentPage}
               onPageChanged={this.onPageChanged}
               users={this.props.users}
               unfollow={this.props.unfollow}
               follow={this.props.follow}
               isFetching={this.props.isFetching}
               followingInProgress={this.props.followingInProgress}
        />
      </React.Fragment>)         
  }
};


let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    totalUsersCount: totalUsersCount(state),
    /* pageSize: Page(state), */
    currentPage: currentPage(state),
    isFetching: isFetching(state),
    followingInProgress: followingInProgress(state),
  } 
};

export default compose(
  connect(mapStateToProps, {follow:follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  toggleFollowingProgress,
  getUsers: getUsersThunkCreator,
}),
  withAuthRedirect)(UsersContainer);






 