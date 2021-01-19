import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';


const Header = (props) => {
  return (
    <header className={classes.header}>
      <a href='#'><img src='/img/logo.png' alt='logo' className={classes.logo}></img></a>
      <div><h1>Social Network</h1></div>
      <div className={classes.loginblock}>
        {props.isAuth
          ? <div>{props.login} <button className={classes.btn} onClick={props.logout}>Log out</button> </div>
          : <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  );
}

export default Header;

