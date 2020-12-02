import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {login} from './../../Redux/authReducer';
import style from './Login.module.css';
import {required, email, maxLength30, checkboxValidator} from './../../utils/validators/validators';
import {Textarea} from './../common/FormsControls/FormsControls';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import { Form, Button} from 'react-bootstrap';

const Text = Textarea('input');

const LoginForm = ({submitting, pristine, invalid, captchaUrl, ...props}) => {
	return (
		<Form onSubmit={props.handleSubmit}>
			<Form.Group controlId="formBasicEmail" >
				<Form.Label>
					<b>Email</b>
				</Form.Label>
				<Field 
					name="email" 
					component={Text} 
					type="text" 
					validate = {[required, email, maxLength30]}
					placeholder="Login"
				/>
			</Form.Group>
			<Form.Group controlId="formBasicPassword">
				<Form.Label>
					<b>Password</b>
				</Form.Label>
				<Field 
					name="password" 
					component={Text} 
					type="password" 
					validate = {[required, maxLength30]} 
					placeholder="Password"
				/>
			</Form.Group>
			<Form.Group controlId="formBasicCheckbox" className={props.checkbox}>
				<Field 
					name="rememberMe" 
					component={Text} 
					type="checkbox"
				/>
				<Form.Label>
					Remember me!
				</Form.Label>
			</Form.Group>
			{captchaUrl && <img src={captchaUrl} alt="Ops!" />}
			{captchaUrl && <Field 
								name="captcha" 
								component={Text} 
								type="text"
								validate = {required}
						 	/>
			}
			{props.error && <div className={style.error}>{props.error}</div> }
			<Button variant="primary" type="submit">
				Log in
			</Button>
		</Form>
		)
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {

   let onSubmitForm = (formData) => {
		props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
	};

	if(props.isAuth){
		return <Redirect to={"/profile"} />;
	}
	return (
		<div className={style.form}>
			<div className={style.title} >
				<h1>Log in</h1>
			</div>
			<div className={style.login_form}>
				<LoginReduxForm onSubmit={onSubmitForm}
								captchaUrl={props.captchaUrl} 
								button={style.button} 
								class={style.input_block} 
								checkbox={style.input_checkbox} 
				/>
			</div>
		</div>
	)
};


let mapStateToProps = (state)=>{
	return {
		isAuth: state.auth.isAuth,
		captchaUrl: state.auth.captchaUrl,
	}
};

export default connect (mapStateToProps, {login})(Login); 