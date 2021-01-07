import {authAPI, securityAPI} from '../api/api'
import {stopSubmit} from 'redux-form'

const SET_USER_DATA = 'samurai-network/auth/SET-USER-DATA';
const GET_CAPTCHA_URL = 'samurai-network/auth/GET-CAPTCHA-URL';


let initialState =   {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA: 
            return {
                ...state,
                ...action.payload,
            }
        case GET_CAPTCHA_URL: 
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}})
export const getCaptchaUrlAC = (captchaUrl) => ({type: GET_CAPTCHA_URL, payload: captchaUrl})


export const getAuthUserData = () => async (dispatch) => {
    const res = await authAPI.me()
    
    if(res.data.resultCode === 0) {
        let {id, login, email} = res.data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    
    let res = await authAPI.login(email,password,rememberMe, captcha)
       
        if(res.data.resultCode === 0) {
            dispatch(getAuthUserData())
        }
        else {
            if(res.data.resultCode === 10) {
                dispatch(getCaptchaUrl())
            }
            let message = res.data.messages.length > 0 ? res.data.messages[0] : 'Some error'
            dispatch(stopSubmit('login', {_error: message}))
        }
}

export const getCaptchaUrl = () => async (dispatch) => {
    let res = await securityAPI.getCaptchaUrl()
    const captchaUrl = res.data.url
            
    dispatch(getCaptchaUrlAC(captchaUrl))
}

export const logout = () => async (dispatch) => {
    
    let res = await authAPI.logout()
        if(res.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
}

export default authReducer