import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import profilePageReducer from './profilePageReducer.js';
import  dialogsPageReducer  from './dialogsPageReducer';
import  sideBarPageReducer  from './sidebarPageReducer.js';
import  usersPageReducer  from './usersPageReducer.js';
import  authReducer  from './authReducer.js';
import  newsPageReducer  from './newsPageReducer.js';
import  appReducer  from './appReducer.js';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

let redusers = combineReducers({
		profilePage: profilePageReducer,
		dialogsPage: dialogsPageReducer,
		sidebar: sideBarPageReducer,
		usersPage: usersPageReducer,
		auth: authReducer,
		newsPage: newsPageReducer,
		form: formReducer,
		app: appReducer,
	});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(redusers, composeEnhancers(applyMiddleware(thunk)));

window.store=store;

export default store;