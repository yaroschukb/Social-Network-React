import { getAuthUserData } from './authReducer';

const INITIALIZED_SUCCSESS = 'INITIALIZED_SUCCSESS';

	let initialState = {
		initialized: false  
    	};

 const appReducer = (state=initialState, action) => {

	switch (action.type) {
		case INITIALIZED_SUCCSESS:
			return {
				...state,
				initialized: true,  
				}
		default:
			return state
	}
};

//Action Creator Block
const initializedSuccsess = () => ({type:INITIALIZED_SUCCSESS});

//thunks block
export const  initializeApp = () => (dispatch) => {
	let promise = dispatch(getAuthUserData());

	Promise.all([promise])
		.then(()=>{
		dispatch(initializedSuccsess())
	})
};

export default appReducer;