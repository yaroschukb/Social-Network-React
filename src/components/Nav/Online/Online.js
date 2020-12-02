import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './Online.module.css';
import Block from "./Block/Block.js";

const Online = (props) => {

	let onlineImgElement = props.friends.map(i=> <Block image={i.image} name={i.name} key={i.id} />);

	return (
		<div className={style.block_friends}>
			<div className={style.block_header}>
				<NavLink to="/Users">
					<h1>Friends</h1>
				</NavLink>
			</div>
			<div className={style.friends}>
				{onlineImgElement}
			</div>
			<div className={style.go_to}>
				<NavLink to="/Dialogs">
					Go to dialogs...
				</NavLink>
			</div>
		</div>
		)
};


export default Online;