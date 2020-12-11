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
      <Post/>
      <Post/>
      <Post/>
    </div>

  )
}

export default MyPosts;
