import React from 'react'
import Post from './Post/Post'

const MyPosts = (props) => {
 
  let posts = props.posts.map(elem => <Post message={elem.message} likeCount={elem.likeCount}/>)
  
  let newPostElement = React.createRef();
  
  
  let onAddPost = () => {
    props.addPost()
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
        <button onClick={onAddPost}>Add post</button>
      </div>
      {posts}
    </div>

  )
}

export default MyPosts;
