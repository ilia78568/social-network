import {profileAPI, usersAPI} from '../api/api'

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET-STATUS'

let initialState =   {
    posts: [
        {message: 'lallalaal', likeCount: 13},
        {message: 'it is my first post', likeCount: 0},
        {message: 'do u like anime', likeCount: 103}
    ],
    newPostText: 'Helo ilia',
    profile: null,
    status: ''
}


 const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5, 
                message: state.newPostText,
                likeCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }

        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        } 
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        } 
       default:
            return state;
    }
}

export const setStatus = (status) => ({type: SET_STATUS, status})
export const addPostActionCreator = () => ({type:ADD_POST})
export const onPostChangeActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText : text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId)
    .then(res => {
      dispatch(setUserProfile(res.data))
  })
}

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
    .then(res => {
      dispatch(setStatus(res.data))
  })
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
    .then(res => {
        if(res.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
  })
}

export default profileReducer