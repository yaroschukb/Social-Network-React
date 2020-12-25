import React from 'react';
import AppHeader from './Header';
import {getAuthUserData, logout} from '../../Redux/authReducer.js';
import {connect} from 'react-redux';

class HeaderContainer extends React.Component {
	render(){
		return (
			<>
				<AppHeader {...this.props} />
			</>
		)
	}
};

let mapStateToProps = (state) => ({
	isAuth:state.auth.isAuth,
	login:state.auth.login,
});

export default connect(mapStateToProps, {getAuthUserData, logout})(HeaderContainer); 