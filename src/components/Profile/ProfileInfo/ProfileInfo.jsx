import React from 'react';
import Preloader from '../../Preloader/Preloader';
import classes from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfieStatus/ProfileStatusWithHooks';
import userAvatar from './../../../assets/img/avatar.jpg';

const ProfileInfo = ({profile, status, updateStatus}) => {

  if (!profile) {
    return <Preloader />
  }

  return (
    <div className={classes.block}>
      <div  className={classes.avatar}>
         <img className={classes.avatarImg}src={profile.photos.large} />
      </div>
      <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      <div>
        <div className={classes.profileName}> {profile.fullName} </div>
      </div>
      <div className={classes.text}>
        <div className={classes.information}><p className={classes.infotext}>Facebook: </p>{profile.contacts.facebook}</div>
        <div className={classes.information}><p className={classes.infotext}>Vkontakte: </p> {profile.contacts.vk} </div>
        <div className={classes.information}><p className={classes.infotext}>My job: </p> {profile.lookingForAJobDescription}</div>
        <div className={classes.information}><p className={classes.infotext}>About me: </p> {profile.aboutMe} </div>
      </div>
    </div>
  );
}

export default ProfileInfo;


/*<div className={classes.avatar}>
        <img src={userPhoto} className={classes.avatarImg} />
      </div>
      <div  className={classes.avatar}>
        <img className={classes.avatarImg} src={props.profile.photos.large} />
      </div>*/