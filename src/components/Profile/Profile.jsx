import React from 'react';
import Avatar from './Avatar/Avatar';
import MyPostsContainer from './MyPost/MyPostsContainer';
import classes from './Profile.module.css';


const Profile = (props) => {

  return (
    <div className={classes.main}>
      <Avatar />
      <MyPostsContainer/>
    </div>
  ); // атрибут совпадет название с массивом на который ссылаемся
}

export default Profile;



