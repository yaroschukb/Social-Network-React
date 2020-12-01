import {addPostActionCreator} from '../../../Redux/profilePageReducer.js';
import MyPost from './MyPost';
import {connect} from 'react-redux';
import {reset} from 'redux-form';



    let mapStateToProps = (store) => {
      return {
        postMessages: store.profilePage.postMessages,
        newPostText: store.profilePage.newPostText
       };
    };

    let mapDispathToProps = (dispatch) => {
      return {
        addPost: (newText)=>{dispatch(addPostActionCreator(newText))},
        resetForm:(formName)=>{dispatch(reset(formName))},
      };
    };

const MyPostContainer = connect(mapStateToProps,
mapDispathToProps)(MyPost);
  

export default MyPostContainer; 