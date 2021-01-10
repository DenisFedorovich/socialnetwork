import React from 'react';
import Preloader from '../../Preloader/Preloader';
import classes from './ProfileInfo.module.css';
import ProfileStatus from './ProfieStatus/ProfileStatus';


const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div className={classes.block}>
      <div>
        <img className={classes.peopleAva} src={props.profile.photos.large} />
      </div>
      <ProfileStatus status={'привет, ребза'} />
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
