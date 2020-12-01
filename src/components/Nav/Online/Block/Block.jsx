import React from 'react';
import s from './Block.module.css'




const Block = (props) => {
	
	return (
		<div className={s.block}>
			<div className={s.image}>{props.image} <img src="https://cdnimg.rg.ru/img/content/177/18/63/1000s_d_850.jpg " alt=""/></div>
			<div className={s.name}>{props.name}</div>
		</div>
		)
}





export default Block; 

/*https://cdnimg.rg.ru/img/content/177/18/63/1000s_d_850.jpg */