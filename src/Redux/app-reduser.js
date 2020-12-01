import { getAuthUserData } from './auth-reducer';

const INITIALIZED_SUCCSESS = 'INITIALIZED_SUCCSESS';

let initialState = {
			 initialized: false,   
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

const initializedSuccsess = () => ({type:INITIALIZED_SUCCSESS});
export const  initializeApp = () => (dispatch) => {
	let promise = dispatch(getAuthUserData());
	Promise.all([promise])
		.then(()=>{
		dispatch(initializedSuccsess())
	});
};

export default appReducer;