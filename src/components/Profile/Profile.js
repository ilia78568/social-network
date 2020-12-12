import React from 'react'
import MyPosts from './MyPosts/MyPosts'
// import styles from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'


const Profile = (props) => {
  return (
    <div >
    <ProfileInfo/>
    <MyPosts postData={props.profilePage.posts} 
    addPost={props.addPost}
    newPostText={props.profilePage.newPostText}
    updateNewPostText={props.updateNewPostText}/>
  </div>
  )
}

export default Profile;
