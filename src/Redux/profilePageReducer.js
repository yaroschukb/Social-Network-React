import {userAPI,profileAPI} from './../api/api.js';
import { stopSubmit } from 'redux-form';

const ADD_POST = 'addPost';
const SET_USER_PROFILE = 'setUserProfile';
const SET_STATUS = 'setStatus';
const SET_PHOTO = 'SET_PHOTO';

let initialState = {
	postMessages: [{
			id: 1,
			message: 'How are Y? Send Y present!',
			likesCount: 1
		},
		{
			id: 2,
			message: 'Watch video! IMDTLY!!! https://www.gftt.com/&serer4323/gf...',
			likesCount: 2
		},
	],
	profile: null,
	status: null,
};

const profilePageReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			return {
				...state,
				postMessages: [...state.postMessages,
					{
						id: 3,
						message: action.newText,
						likesCount: 0
					}
				],
			}
			}
		case SET_USER_PROFILE:
			return {
				...state,
				profile: action.profile
			};
			case SET_STATUS:
				return {
					...state,
					status: action.status
				};
			case SET_PHOTO:
				return {...state, profile: {...state.profile, photos: action.photos}};
				default:
					return state;
	}
};

//Action Creator Block
export const addPostActionCreator = (newText) => ({type: ADD_POST, newText});

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE,profile});

export const setStatus = (status) => ({type: SET_STATUS,status});

export const savePhotoSuccsess = (photos) => ({type: SET_PHOTO, photos});

//thunks block
export const getUserProfile = (userId) => async (dispatch) => {
	let response = await userAPI.userProfile(userId);
	dispatch(setUserProfile(response.data))
};

export const getStatus = (userId) => async (dispatch) => {
	let response = await profileAPI.getStatus(userId);
	dispatch(setStatus(response.data))
};

export const updateStatus = (status) => async (dispatch) => {
	let response = await profileAPI.updateStatus(status)
	if (response.data.resultCode === 0) {
		dispatch(setStatus(status))
	}
};

export const savePhotos = (file) => async (dispatch) => {
	let response = await profileAPI.savePhoto(file);
		if (response.data.resultCode === 0) {
			dispatch(savePhotoSuccsess(response.data.data.photos))
		}
};

export const saveProfile = (data) => async (dispatch, getState) => {
	const userId = getState().auth.id;
	const response = await profileAPI.saveProfile(data);
		if (response.data.resultCode === 0) {
			dispatch(getUserProfile(userId))
		} else{
			let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
			dispatch(stopSubmit("edit-profile", {_error:message}))
		}
};
	
export default profilePageReducer;