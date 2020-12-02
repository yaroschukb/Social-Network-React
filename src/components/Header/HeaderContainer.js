import React from 'react';
import style from './Header.module.css';
import Header from './Header';
import {getAuthUserData, logout} from '../../Redux/authReducer.js';
import {connect} from 'react-redux';

class HeaderContainer extends React.Component {
	render(){
		return (
			<div className={style.header}>
				<Header {...this.props} />
			</div>
		)
	}
};

let mapStateToProps = (state) => ({
	isAuth:state.auth.isAuth,
	login:state.auth.login,
});

export default connect(mapStateToProps, {getAuthUserData, logout})(HeaderContainer); 