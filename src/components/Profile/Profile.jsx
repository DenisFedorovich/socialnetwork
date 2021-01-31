import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPost/MyPostsContainer';
import classes from './Profile.module.css';

const Profile = (props) => {

  return (
    <div>
      <ProfileInfo profile={props.profile} status={props.status}
        updateStatus={props.updateStatus} />
      <div className={classes.block}>
        <MyPostsContainer />
      </div>
    </div>
  );
}

export default Profile;



