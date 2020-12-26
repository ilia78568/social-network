import {profileAPI, usersAPI} from '../api/api'

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET-STATUS'
const DELETE_POST = 'DELETE-POST'

let initialState =   {
    posts: [
        {message: 'lallalaal', likeCount: 13, id: 0},
        {message: 'it is my first post', likeCount: 0, id: 1},
        {message: 'do u like anime', likeCount: 103, id: 2}
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5, 
                message: action.newPostText,
                likeCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
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
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id != action.postId)
            }
        }
       default:
            return state;
    }
}

export const setStatus = (status) => ({type: SET_STATUS, status})
export const addPostActionCreator = (newPostText) => ({type:ADD_POST, newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const deletePost = (postId) => ({type:DELETE_POST, postId})


export const getUserProfile = (userId) => async (dispatch) => {
    let res = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(res.data))
}

export const getStatus = (userId) => async (dispatch) => {
    let res = await profileAPI.getStatus(userId)
    dispatch(setStatus(res.data))
}

export const updateStatus = (status) => async (dispatch) => {
    let res = await profileAPI.updateStatus(status)
    if(res.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export default profileReducer