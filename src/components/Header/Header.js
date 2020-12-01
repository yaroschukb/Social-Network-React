import React from 'react';
import s from './Header.module.css';
import ReactBull from './../assets/images/react-bull.png'
import { Link, NavLink} from 'react-router-dom';



const Header =(props)=> {
	return (
		<header className = {s.header}>
			<div className = {s.header_img}>
				<Link to="/Profile"> <img src={ReactBull} alt="OOOpppsss!" /> </Link>
			</div>
			{props.isAuth 
			?<div className={s.loginBlock}> 
				<div className={s.loginName}>
					{props.login}
				</div> 
				<div>
					<button onClick={props.logout} >Log OUT</button>
				</div>  
			</div>
    		:<div className={s.loginBtn}> 
				<div>
					<NavLink to={'/Login'}>Login</NavLink>
				</div>		
			 </div>
            }
    	</header>
    	
    );
};



export default Header; 