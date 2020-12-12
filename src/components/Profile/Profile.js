import React from 'react'
import MyPosts from './MyPosts/MyPosts'
// import styles from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'


const Profile = (props) => {
  return (
    <div >
    <ProfileInfo/>
    <MyPosts postData={props.profilePage.posts} 
    dispatch={props.dispatch}
    newPostText={props.profilePage.newPostText}
    />
  </div>
  )
}

export default Profile;
