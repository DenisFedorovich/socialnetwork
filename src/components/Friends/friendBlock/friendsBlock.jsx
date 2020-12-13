import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './friendsBlock.module.css';
import FriendsItem from './FriendsItem/friendsItem';

const FriendsBlock = (props) => {

  let FriendsElem = props.friendsData.friendsData.map(n => <FriendsItem name={n.name} id={n.id} />);

  return (
    <div className={classes.friendsblock}>
      <h2>Friends:</h2>
      { FriendsElem }
    </div>
  );
}

export default FriendsBlock;
