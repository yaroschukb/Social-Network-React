import React from 'react';
import {Field} from 'redux-form';
import {required, maxLength15} from './../../../utils/validators/validators';
import {Textarea} from './../../common/FormsControls/FormsControls';

const Text = Textarea('input'); 

const ReduxForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field component={Text} name="newText" placeholder="Enter your message..."
				validate = {required} />
			</div>
			<div>
				<button type="submit" className={props.button}>Send</button>
			</div>
		</form>
	)
};

export default ReduxForm;
