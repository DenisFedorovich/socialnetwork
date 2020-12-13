import React from 'react';
import classes from './Footer.module.css';



const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.text}>
        <p>Делаем дорого богато</p>
        <address>© Все права ничем не защищены 2020</address>
      </div>
    </footer>
  );
}

export default Footer;
