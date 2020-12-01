import {newMessageActionCreator} from '../../../Redux/dialogsPageReducer.js'
import NewMessage from './NewMessage';
import {connect} from 'react-redux';
import {reset} from 'redux-form';



let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage
	} 
};

let mapDispathToProps = (dispatch) => {
	return {
		addMessage: (newText)=>{dispatch(newMessageActionCreator(newText))},
		resetForm:(formName)=>{dispatch(reset(formName))} 
	};
};

const NewMessageContainer = connect(mapStateToProps,
mapDispathToProps)(NewMessage);


export default NewMessageContainer; 