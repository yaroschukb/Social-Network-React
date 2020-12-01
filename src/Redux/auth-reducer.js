import {authAPI, securityAPI} from './../api/api.js';
import {stopSubmit} from 'redux-form';

const SET_USERS_DATA = 'setUsersData';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';

let initialState = {
	id: null,
	login: null,
	email: null,
	isAuth: false,
	captchaUrl: null, 
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USERS_DATA:
		case GET_CAPTCHA_URL_SUCCESS:
			return {
				...state,
				...action.payload,
			}
			default:
				return state
	}
};

const setAuthUsersData = (id, login, email, isAuth) => ({
	type: SET_USERS_DATA,
	payload: {id,login, email, isAuth}
});

const getCaptchaUrlSuccess = (captchaUrl) => ({
	type: GET_CAPTCHA_URL_SUCCESS,
	payload: {captchaUrl}
});

export const getAuthUserData = () => async (dispatch) => {
	let response = await authAPI.me();
	if (response.data.resultCode === 0) {
		let {id,login,email} = response.data.data;
		dispatch(setAuthUsersData(id, login, email, true));
	}
};

export const login = (email, password, rememberMe = false, captcha) => async (dispatch) => {
	let response = await authAPI.logIn(email, password, rememberMe, captcha);
	if (response.data.resultCode === 0) {
		dispatch(getAuthUserData());
	} else {
		if(response.data.resultCode === 10){
			dispatch(getCaptchaUrl())
		}
		let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
		dispatch(stopSubmit("login", {_error: message}));
	}
};

export const getCaptchaUrl = () => async (dispatch) => {
	let response = await securityAPI.getCaptchaUrl();
	const captchaUrl = response.data.url;
	dispatch(getCaptchaUrlSuccess(captchaUrl))
};

export const logout = (email, password, rememberMe = false) => async (dispatch) => {
	let response = await authAPI.logOut(email, password, rememberMe);
	if (response.data.resultCode === 0) {
		dispatch(setAuthUsersData(null, null, null, false));
	}
};

export default authReducer;