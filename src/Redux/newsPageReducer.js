import {newsAPI} from './../api/api.js'


let SET_NEWS = 'SET_NEWS';
let TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
let SET_TOTAL_NEWS_COUNT = 'SET_TOTAL_NEWS_COUNT';


let initialState =
	{ 
		news: [],
		totalNewsCount: 33,
		pageSize: 5,
		currentPage: 1,
		isFetching:true,
	};


const newsPageReducer = (state=initialState,action) =>{
	switch (action.type) {
		
		case SET_NEWS: 
			return { ...state, news: action.news };
		case SET_TOTAL_NEWS_COUNT:
			return {
				...state, totalUsersCount: action.count
			};
		case TOGGLE_IS_FETCHING: 
			return { ...state, isFetching: action.isFetching };
		default:
				return state;	

	}
};


export const setNews = (news) => ({type: SET_NEWS, news }); 
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching });
export const setTotalNewsCount = (totalNewsCount)=> ({type: SET_TOTAL_NEWS_COUNT,count: totalNewsCount});

export const getNewsThunkCreator = () => async (dispatch) => {
		dispatch(toggleIsFetching(true));
		let response = await newsAPI.getNews();
		if(response.status===200)
		{dispatch(toggleIsFetching(false));
		  dispatch(setNews(response.data.results));
		  dispatch(setTotalNewsCount(response.data.num_results));}
		  else{
			  return console.log(response.statusText);
		  }
};


export default newsPageReducer;