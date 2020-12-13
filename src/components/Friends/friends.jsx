import React from 'react';
import { NavLink } from 'react-router-dom';
import FriendsBlock from './friendBlock/friendsBlock';
import classes from './friends.module.css';

const Friends = (props) => {

  return (
    <div className={classes.friendsblock}>
      <FriendsBlock friendsData={props.state}/>
    </div>
  );
}

export default Friends;
