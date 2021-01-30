import React from 'react';
import Preloader from '../../Preloader/Preloader';
import classes from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfieStatus/ProfileStatusWithHooks';


const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div className={classes.block}>
      <div>
        <img src='./../../../../public/img/avatar2700.jpg'/>
      </div>
      <div>
        <img className={classes.peopleAva} src={props.profile.photos.large} />
      </div>
      <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
      <div>
        <div className={classes.profileName}> {props.profile.fullName} </div>
      </div>
      <div className={classes.text}>
        <div className={classes.information}><p className={classes.infotext}>Facebook: </p>{props.profile.contacts.facebook}</div>
        <div className={classes.information}><p className={classes.infotext}>Vkontakte: </p> {props.profile.contacts.vk} </div>
        <div className={classes.information}><p className={classes.infotext}>My job: </p> {props.profile.lookingForAJobDescription}</div>
        <div className={classes.information}><p className={classes.infotext}>About me: </p> {props.profile.aboutMe} </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
