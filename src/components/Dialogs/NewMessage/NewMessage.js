import React from 'react';
import style from './NewMessage.module.css';
import { reduxForm } from 'redux-form';
import ReduxForm from './../../common/ReduxForm/ReduxForm';


const NewMessage = (props) => {
	
	let addNewMessage = (values) => {
		props.addMessage(values.newText)
		props.resetForm('dialogAddMessageForm') 
	};

	return (
		<div className={style.message}> 
			<AddMessageFormRedux onSubmit={addNewMessage} button={style.button} />
		</div>
		)
};

const AddMessageFormRedux = reduxForm ({form: "dialogAddMessageForm"})(ReduxForm);

export default NewMessage; 