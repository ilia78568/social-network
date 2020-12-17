import {applyMiddleware, combineReducers, createStore} from 'redux'
import profileReducer from './profileReducer'
import dialogsReducer from './dialogsReducer'
import usersReducer from './usersReducer';
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'

let redusers = combineReducers({
    profilePage : profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
});


let store = createStore(redusers, applyMiddleware(thunkMiddleware))

window.store = store;

export default store;
