import React from 'react';
import ss from './DialogsItem.module.css';
import {NavLink} from 'react-router-dom';



const DialogItem = (props) =>{
	let path = "/Dialogs/"+props.id;
	return (
			<div className={ss.dialog}><NavLink to={path} activeClassName={ss.active}>{props.name}</NavLink></div>
		);
};


export default DialogItem; 