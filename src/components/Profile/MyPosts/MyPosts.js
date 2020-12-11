import React from 'react'
import styles from './MyPosts.module.css'
import Post from './Post/Post'


const MyPosts = () => {
  return (
    <div className="posts">
      My post
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <Post message='Hi how are you' likeCount={13}/>
      <Post message='it is my first post'likeCount={0}/>
      <Post message='do u like me? ' likeCount={103}/>
    </div>

  )
}

export default MyPosts;
