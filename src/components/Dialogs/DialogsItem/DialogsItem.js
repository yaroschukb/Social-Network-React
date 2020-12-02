import React from 'react';
import style from './DialogsItem.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) =>{
	
	let path = "/Dialogs/"+props.id;
	
	return (
			<div className={style.dialog}>
				<NavLink to={path} activeClassName={style.active}>
					{props.name}
				</NavLink>
			</div>
		)
};

export default DialogItem; 