import React from 'react';
import classes from'./Avatar.module.css';


const Avatar = () => {
  return (
    <div className={classes.block}>
      <a className={classes.avatar} href='#'><img className={classes.avatarImg} src='../../img/avatar2700.jpg' alt='avatar'></img></a>
      <div className={classes.text}>
        avatar
      </div>
    </div>
  );
}

export default Avatar;
