import React from 'react'
// import styles from './MyPosts.module.css'
import Post from './Post/Post'


const MyPosts = (props) => {
 
  let posts = props.postData.map(elem => <Post message={elem.message} likeCount={elem.likeCount}/>)
  
  let newPostElement = React.createRef();
  
  let addPost = () => {
    props.addPost();

  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text)
  }

  return (
    <div className="posts">
      My post
      <div>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
        <button onClick={addPost}>Add post</button>
      </div>
      {posts}
    </div>

  )
}

export default MyPosts;
