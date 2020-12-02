import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './Nav.module.css';
import OnlineContainer from './Online/OnlineContainer.js';
import About from '../Footer/About';

const Nav = (props) => {
	return (
	  <div className={style.block}>
	    <div>	
        <nav className = {style.nav}>
          <div className={style.item}>
            <NavLink to="/Profile" activeClassName={style.active}>Profile</NavLink>
          </div>
          <div className={style.item}>
            <NavLink to="/Users" activeClassName={style.active}>Users</NavLink>
          </div>
          <div className={`${style.item} ${style.active}`}>
            <NavLink to="/Dialogs" activeClassName={style.active}>Message</NavLink>
          </div>
          <div className={style.item}>
            <NavLink to="/News" activeClassName={style.active}>News</NavLink>
          </div>
          <div className={style.item}>
            <NavLink to="/Music" activeClassName={style.active}>Music</NavLink>
          </div>
          <div className={style.item}>
            <NavLink to="/Settings" activeClassName={style.active}>Settings</NavLink>
          </div>
          <div className={style.item}>
            <About className={style.modalWindow} listLib={style.listLib} />
          </div>
        </nav>
      </div>
      <div className={style.friends}>
        <OnlineContainer />
      </div>
    </div>
  )
};

 export default Nav;
 