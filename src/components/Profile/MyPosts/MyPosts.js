import React from 'react'
// import styles from './MyPosts.module.css'
import Post from './Post/Post'


const MyPosts = ({postData}) => {
 
  let posts = postData.map(elem => <Post message={elem.message} likeCount={elem.likeCount}/>)
  
  let newPostElement = React.createRef();
  let addPost = () => {
    let text = newPostElement.current.value;
    alert(text);
  }

  return (
    <div className="posts">
      My post
      <div>
        <textarea ref={newPostElement}></textarea>
        <button onClick={addPost}>Add post</button>
      </div>
      {posts}
    </div>

  )
}

export default MyPosts;
