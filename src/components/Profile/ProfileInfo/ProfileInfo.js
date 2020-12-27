import React from 'react'
import Preloader from '../../common/Preloader/Preloader'
import s from './ProfileInfo.module.css'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'
import userPhoto from '../../../images/user.jpg'

const ProfileInfo = (props) => {
  if(!props.profile) {
    return <Preloader/>
  }
  
  const onMainPhotoSelected = (e)=> {
    if(e.target.files.length) {
      props.savePhoto(e.target.files[0])
    }
  }
  return (
    <div >
      <div className={s.descriptionBlock}>

      <img src={
        props.profile.photos.large || userPhoto} className={s.img} />


      {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}

      <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>


      <div>{props.profile.fullName}</div>
      <div>{props.profile.lookingForAJobDescription}</div>
    </div>

  </div>
  )
}

export default ProfileInfo;
