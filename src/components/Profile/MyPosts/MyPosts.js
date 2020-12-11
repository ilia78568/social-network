import React from 'react'
import styles from './MyPosts.module.css'
import Post from './Post/Post'


const MyPosts = ({postData}) => {
 
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
