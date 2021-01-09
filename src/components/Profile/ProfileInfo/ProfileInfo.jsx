import React from 'react';
import Preloader from '../../Preloader/Preloader';
import classes from './Avatar.module.css';


const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div className={classes.block}>
      <div>
        <img className={classes.avatarImg} src='../../img/avatar2700.jpg' alt='avatar'></img>
      </div>
      <div>
        <img className={classes.peopleAva} src={props.profile.photos.large} />
      </div>
      <div>
        <div className={classes.profileName}> {props.profile.fullName} </div>
      </div>
      <div className={classes.text}>
        <div className={classes.information}> {props.profile.contacts.facebook} </div>
        <div className={classes.information}> {props.profile.contacts.vk} </div>
        <div className={classes.information}> {props.profile.lookingForAJobDescription}</div>
        <div className={classes.information}> {props.profile.aboutMe} </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
