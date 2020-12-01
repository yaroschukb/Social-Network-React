import React from 'react';
import ss from './Message.module.css';


const Message =(props)=>{
	return (
		<div className={ss.message}> {props.message}</div>
		)
};



export default Message; 