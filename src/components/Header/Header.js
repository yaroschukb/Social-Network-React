import React from 'react';
import style from './Header.module.css';
import ReactBull from './../assets/images/react-bull.png';
import { Link, NavLink} from 'react-router-dom';

const Header =(props)=> {
	return (
		<header className = {style.header}>
			<div className = {style.header_img}>
				<Link to="/Profile"> <img src={ReactBull} alt="OOOpppsss!"/> </Link>
			</div>
			{props.isAuth 
				? 	<div className={style.loginBlock}> 
						<div className={style.loginName}>
							{props.login}
						</div> 
						<div>
							<button onClick={props.logout}>Log OUT</button>
						</div>  
					</div>
    			: 	<div className={style.loginBtn}> 
						<div>
							<NavLink to={'/Login'}>Login</NavLink>
						</div>		
			 		</div>
            }
    	</header>
    )
};

export default Header; 