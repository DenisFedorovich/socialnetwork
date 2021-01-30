import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPost/MyPostsContainer';




const Profile = (props) => {

  return (
    <div>
      <ProfileInfo profile={props.profile} status={props.status}
        updateStatus={props.updateStatus} />
      <MyPostsContainer />
    </div>
  ); // атрибут совпадет название с массивом на который ссылаемся
}

export default Profile;



