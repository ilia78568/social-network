import React from 'react'
import styles from './MyPosts.module.css'
import Post from './Post/Post'


const MyPosts = () => {
  let postData = [
    {message: 'lallalaal', likeCount: 13},
    {message: 'it is my first post', likeCount: 0},
    {message: 'do u like anime', likeCount: 103}
  ]
  let posts = postData.map(elem => <Post message={elem.message} likeCount={elem.likeCount}/>)
  return (
    <div className="posts">
      My post
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      {posts}
    </div>

  )
}

export default MyPosts;
