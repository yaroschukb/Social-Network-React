import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Online.module.css';
import Block from "./Block/Block.jsx";


const Online = (props) => {
let onlineImgElement = props.friends.map(i=> <Block image={i.image} name={i.name} key={i.id} />);


	return (
		<div className={s.block_friends}>
			<div className={s.block_header}><NavLink to="/Users"><h1>Friends</h1></NavLink></div>
			<div className={s.friends}>
				{onlineImgElement}
			</div>
			<div className={s.go_to}><NavLink to="/Dialogs">Go to dialogs...</NavLink></div>
		</div>
		)
};


export default Online;