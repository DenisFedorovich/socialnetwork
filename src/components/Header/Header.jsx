import React from 'react';
import classes from './Header.module.css';


const Header = () => {
  return (
    <header className={classes.header}>
      <a href='#'><img src='/img/logo.png' alt='logo' className={classes.logo}></img></a>
      <h1>Social Network</h1>
    </header>
  );
}

export default Header;
