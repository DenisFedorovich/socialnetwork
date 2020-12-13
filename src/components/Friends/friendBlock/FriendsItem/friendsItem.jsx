import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './friendsItem.module.css';

const FriendsItem = (props) => {

  return (
    <div className={classes.friendsblock}>
      <div className={classes.friends}>
        <img className={classes.friendsphoto} src='../../img/Fallout.jpg' alt='photo'></img>
        <div className={classes.nameBlock}>
          <span>{props.name}</span>
        </div>
      </div>
    </div>
  );
}

export default FriendsItem;
