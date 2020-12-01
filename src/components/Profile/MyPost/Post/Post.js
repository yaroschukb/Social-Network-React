import React from 'react';
import style from './Post.module.css';
import like from './../../../assets/images/like.png'

const Post = (props) => {  
	return (
    <div className = {style.item}>
      <div className={style.avatar}>
        <img src="https://www.belnovosti.by/sites/default/files/article/2019/07/21/0q_0.jpg" alt="##"/>
      </div>
      <div className={style.message}>
        <span> {props.message} </span>
      </div>
      <div className={style.like}>
        <img src={like} alt="like"/>
        <span id="like">{props.likesCount}</span> 
      </div>
    </div>
    )
};

export default Post; 