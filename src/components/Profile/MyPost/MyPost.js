import React from 'react';
import Post from './Post/Post.js';
import { reduxForm } from 'redux-form';
import ReduxForm from '../../common/ReduxForm/ReduxForm';
import { Row, Col } from 'antd';


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
      <Col>
        <h2> <b>My post</b> </h2>
        <Row>
          <AddPostFormRedux onSubmit={addPost} />
        </Row>
        <Col>
          {postElement}
        </Col>
      </Col>
    )
};

const AddPostFormRedux = reduxForm ({
    form: "profileAddPostForm"
  })(ReduxForm);

export default MyPost; 