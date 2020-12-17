import React from 'react'
import Preloader from '../../common/Preloader/Preloader'
import s from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
  if(!props.profile) {
    return <Preloader/>
  }
  
  return (
    <div >
    {/* <div>
      <img alt="alt" src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"/>   
    </div> */}
    <div className={s.descriptionBlock}>
   
      <img src={props.profile.photos.large}/>

      <ProfileStatus status={'gfgfgf'}/>


      <div>{props.profile.fullName}</div>
      <div>{props.profile.lookingForAJobDescription}</div>
    </div>

  </div>
  )
}

export default ProfileInfo;
