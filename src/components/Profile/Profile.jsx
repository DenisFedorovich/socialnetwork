import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPost/MyPostsContainer';
import classes from './Profile.module.css';



const Profile = (props) => {

  return (
    <div>
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer />
    </div>
  ); // атрибут совпадет название с массивом на который ссылаемся
}

export default Profile;



