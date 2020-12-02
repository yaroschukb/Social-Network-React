import React from 'react';
import ss from './MyPost.module.css';
import Post from './Post/Post.js';
import { reduxForm } from 'redux-form';
import ReduxForm from '../../common/ReduxForm/ReduxForm';


const MyPost = (props) => {
      
  let addPost = (values) => {
      props.addPost(values.newText);
      props.resetForm('profileAddPostForm');   
  };

  let postElement = props.postMessages.map (p => (
    <Post key={p.id}
          id={p.id}
          message={p.message} 
          likesCount={p.likesCount}
    />
  ));

  return (
      <div className={ss.description}>
        <h2> <b>My post</b> </h2>
        <div>
          <AddPostFormRedux onSubmit={addPost} button={ss.button} />
        </div>
        <div className={ss.posts}>
          {postElement}
        </div>
      </div>
    )
};

const AddPostFormRedux = reduxForm ({
    form: "profileAddPostForm"
  })(ReduxForm);

export default MyPost; 