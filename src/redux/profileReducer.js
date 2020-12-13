const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState =   {
    posts: [
        {message: 'lallalaal', likeCount: 13},
        {message: 'it is my first post', likeCount: 0},
        {message: 'do u like anime', likeCount: 103}
    ],
    newPostText: 'Helo ilia'
}


 const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5, 
                message: state.newPostText,
                likeCount: 0
            }
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost)
            stateCopy.newPostText = ''
            return stateCopy
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText
            return stateCopy;
        }
            
       default:
            return state;
    }
}

export const addPostActionCreator = () => ({type:ADD_POST})
export const onPostChangeActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText : text})
export default profileReducer