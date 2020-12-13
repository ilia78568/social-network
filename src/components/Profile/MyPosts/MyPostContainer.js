import React from 'react'
import {addPostActionCreator, onPostChangeActionCreator} from '../../../redux/profileReducer'
import StoreContext from '../../../storeContext'
import MyPosts from './MyPosts'

const MyPostsContainer = (props) => {  
  


 

  return (
    <StoreContext.Consumer> 
      {
      (store) => {
          let state = store.getState()

          let addPost = () => {
            store.dispatch( addPostActionCreator());
          }

          let onPostChange = (text) => {
            let action = onPostChangeActionCreator(text)
            store.dispatch(action)
          }

        return <MyPosts updateNewPostText={onPostChange} 
                        addPost={addPost} 
                        posts={state.profilePage.posts}
                        newPostText={state.profilePage.newPostText}/>}}
    </StoreContext.Consumer>
      
  
       
      
  )
}

export default MyPostsContainer;
