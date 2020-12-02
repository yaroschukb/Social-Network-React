import React from 'react';
import style from './Block.module.css';

const Block = (props) => {
	return (
		<div className={style.block}>
			<div className={style.image}>{props.image} 
				<img src="https://cdnimg.rg.ru/img/content/177/18/63/1000s_d_850.jpg " alt="Ooops!"/>
			</div>
			<div className={style.name}>
				{props.name}
			</div>
		</div>
		)
};

export default Block; 