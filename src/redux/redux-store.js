import {combineReducers, createStore} from 'redux'
import profileReducer from './profileReducer'
import dialogsReducer from './dialogsReducer'


let redusers = combineReducers({
    profilePage : profileReducer,
    dialogsPage: dialogsReducer
});


let store = createStore(redusers)

export default store;
