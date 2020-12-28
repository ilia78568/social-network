import React, { useState } from 'react'
import Preloader from '../../common/Preloader/Preloader'
import s from './ProfileInfo.module.css'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'
import userPhoto from '../../../images/user.jpg'
import ProfileDataForm from './ProfileDataForm'
import ProfileDataFormRedux from './ProfileDataForm'

const ProfileInfo = (props) => {
  
  const [editMode, setEditMode] = useState(false) 
  
  if(!props.profile) {
    return <Preloader/>
  }
  
  const onMainPhotoSelected = (e)=> {
    if(e.target.files.length) {
      props.savePhoto(e.target.files[0])
      setEditMode(false)
    }
  }

  const onSubmit = (formData) => {
    props.saveProfile(formData)
    setEditMode(false)
    // console.log(formData)
  }

  return (
    <div >
      <div className={s.descriptionBlock}>

      <img src={
        props.profile.photos.large || userPhoto} className={s.img} />

      {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}

      <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
        {editMode 
        ? <ProfileDataFormRedux initialValues={props.profile} onSubmit={onSubmit} profile={props.profile}/> 
        : <ProfileData profile={props.profile} isOwner={props.isOwner}  goToEditMode={() => setEditMode(true)}/>}
        

    </div>

  </div>
  )
}


const ProfileData = (props) =>{
  return (
    <div>
      {props.isOwner && <button onClick={props.goToEditMode}>Edit</button>}
      <div>Fullname {props.profile.fullName}</div>

      <div>
        <b>loking for a job</b> {props.profile.lookingForAJob ? 'yes' : 'no'}
      </div>
      <div>
        <b>about me </b> {props.profile.aboutMe}
      </div>
      <div>
        <b>My professional skills</b> {props.profile.lookingForAJobDescription }
      </div>
      <div>
        <b>contacts </b> {Object.keys(props.profile.contacts).map(key =>{
          return <Contact key={key} contactValue={key} contactTitle={props.profile.contacts[key]}/>
        })}
      </div>
    </div>
  )
}

const Contact = (props) =>{
  return (
    <div>
      <b>{props.contactValue}</b>:{props.contactTitle}
    </div>
  )
}

export default ProfileInfo;
