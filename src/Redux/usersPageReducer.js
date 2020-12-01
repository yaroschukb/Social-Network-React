import {userAPI} from './../api/api.js'
import { updateObjArray } from './../utils/objHelpers';

let FOLLOW = 'follow';
let UNFOLLOW = 'unfollow';
let SET_USERS = 'setUsers';
let SET_CURRENT_PAGE = 'setCurrentPage';
let SET_TOTAL_USERS_COUNT = 'setTotalUsersCount';
let TOGGLE_IS_FETCHING = 'toggleIsFetching';
let TOGGLE_IS_FOLLOWING_PROGRESS = 'toggleFollowingProgress';

let initialState = {
	users: [],
	totalUsersCount: 0,
	pageSize: 10,
	currentPage: 1,
	isFetching: true,
	followingInProgress: [],
};


const usersPageReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: updateObjArray(state.users, action.userId, "id", {followed:true})
			};
		case UNFOLLOW:
			return {
				...state,
				users: updateObjArray(state.users, action.userId, "id", {followed:false})
			};
		case SET_USERS:
			return {
				...state, users: action.users
			};

		case SET_CURRENT_PAGE:
			return {
				...state, currentPage: action.currentPage
			};

		case SET_TOTAL_USERS_COUNT:
			return {
				...state, totalUsersCount: action.count
			};

		case TOGGLE_IS_FETCHING:
			return {
				...state, isFetching: action.isFetching
			};

		case TOGGLE_IS_FOLLOWING_PROGRESS:
			return {
				...state,
				followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId] : [state.followingInProgress.filter(id => id !== action.userId)]
			};

		default:
			return state;

	}
};;

//Action Creators
export const followS = (userId) => ({type: FOLLOW,userId});
export const unfollowS = (userId) => ({type: UNFOLLOW,userId});
export const setUsers = (users) => ({type: SET_USERS,users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE,currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT,count: totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING,isFetching});
export const toggleFollowingProgress = (isFetching, userId) =>
({type: TOGGLE_IS_FOLLOWING_PROGRESS,isFetching,userId});
;
//Thunk Block
export const getUsersThunkCreator = (currentPage, pageSize) => async (dispatch) => {
	dispatch(setCurrentPage(currentPage));
	dispatch(toggleIsFetching(true));
	let response = await userAPI.getUsers(currentPage, pageSize);
	dispatch(toggleIsFetching(false));
	dispatch(setUsers(response.items));
	dispatch(setTotalUsersCount(response.totalCount));
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
	dispatch(toggleFollowingProgress(true, userId));
	let response = await apiMethod(userId);
	if (response.data.resultCode === 0) {
		dispatch(actionCreator(userId));
	}
	dispatch(toggleFollowingProgress(false, userId));
}

export const unfollow = (userId) => async (dispatch) => {
	followUnfollowFlow(dispatch, userId, userAPI.unfollow.bind(userId), unfollowS);
}

export const follow = (userId) => async (dispatch) => {
	followUnfollowFlow(dispatch, userId, userAPI.follow.bind(userId), followS);
}


export default usersPageReducer;