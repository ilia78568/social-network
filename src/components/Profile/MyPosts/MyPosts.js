import React from 'react'
// import styles from './MyPosts.module.css'
import Post from './Post/Post'


const MyPosts = (props) => {
 
  let posts = props.postData.map(elem => <Post message={elem.message} likeCount={elem.likeCount}/>)
  
  let newPostElement = React.createRef();
  
  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = ''
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
