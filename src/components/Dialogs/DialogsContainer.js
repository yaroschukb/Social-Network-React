import {connect} from 'react-redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect.js';
import {compose} from 'redux';
import Dialogs from './Dialogs.js';

let mapStateToProps = (store) => {
      return {
        dialogs: store.dialogsPage.dialogs,
		messages: store.dialogsPage.messages,
       } ;
    };





export default compose(
	connect(mapStateToProps),
	withAuthRedirect
	)(Dialogs); 