import React from 'react';
import s from './Header.module.css';
import Header from './Header';
import {getAuthUserData, logout} from '../../Redux/auth-reducer.js';
import {connect} from 'react-redux';

class HeaderContainer extends React.Component {
debugger
	render(){
	return (
	<div className={s.header}>
		<Header {...this.props} />
    </div>
    );
}
};

let mapStateToProps = (state) => ({
	isAuth:state.auth.isAuth,
	login:state.auth.login,
	
});

export default connect(mapStateToProps, {getAuthUserData, logout})(HeaderContainer); 