import React from 'react';
import { NavLink } from 'react-router-dom';
//import FriendsItem from '../Friends/friendBlock/FriendsItem/friendsItem';
/*import Friends from '../Friends/friendBlock/FriendsItem/friendsItem';*/
import s from './Nav.module.css';

const Navbar = (props) => {

 // let FriendsElem = props.state.friendsData.map(n => <FriendsItem name={n.name} id={n.id} />)

  return (
    <nav className={s.nav}>
      <ul className={s.list}>
        <li className={s.link}><NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink></li>
        <li className={s.link}><NavLink to='/dialogs' activeClassName={s.activeLink}>Messages</NavLink></li>
        <li className={s.link}><NavLink to='/news' activeClassName={s.activeLink}>News</NavLink></li>
        <li className={s.link}><NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink></li>
        <li className={s.link}><NavLink to='/settings' activeClassName={s.activeLink}>Settings</NavLink></li>
      </ul>
      
      <div className={s.friendsLink}><NavLink to='/friends' activeClassName={s.activeLink}>Friends</NavLink></div>
     
    </nav>
  );
}

export default Navbar;

 //<div className={s.friendblock}> {FriendsElem} </div>
/*
import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <a>News</a>
            </div>
            <div className={s.item}>
                <a>Music</a>
            </div>
            <div className={s.item}>
                <a>Settings</a>
            </div>
        </nav>
    )
}

export default Navbar;*/