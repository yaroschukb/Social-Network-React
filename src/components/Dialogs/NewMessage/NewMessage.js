import React from 'react';
import ss from './NewMessage.module.css';
import { reduxForm } from 'redux-form';
import ReduxForm from './../../common/ReduxForm/ReduxForm';


const NewMessage =(props)=>{
	
	let addNewMessage = (values) => {
			props.addMessage(values.newText)
			props.resetForm('dialogAddMessageForm') 
	};

	return (
		<div className={ss.message}> 
			<AddMessageFormRedux onSubmit={addNewMessage} button={ss.button} />
		</div>
		)
};


const AddMessageFormRedux = reduxForm ({
	form: "dialogAddMessageForm"
})(ReduxForm);

export default NewMessage; 