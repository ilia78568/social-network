import React from 'react'
import Post from './Post/Post'
import { Field, reduxForm } from 'redux-form'

const MyPosts = (props) => {
 
  let posts = props.posts.map(elem => <Post message={elem.message} likeCount={elem.likeCount}/>)

  let onAddPost = (obj) => {
    props.addPost(obj.newPostText)
    
  }

  return (
    <div className="posts">
      My post
      <div>
        <AddMessageFormRedux onSubmit={onAddPost}/>
      </div>
      {posts}
    </div>

  )
}

const AddPostComponent = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
       <Field component='textarea' name='newPostText' placeholder='Add text'/>
       <button>Add post</button>
    </form>
  )
}

const AddMessageFormRedux = reduxForm({form: 'profileAddPosts'})(AddPostComponent)


export default MyPosts;
