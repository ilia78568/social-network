import React from 'react'
import styles from './Dialogs.module.css'
import DialogsItem from './DialogItem/DialogsItem'
import Message from './Message/Message'
import { addMessageActionCreator, onMessageChangeActionCreator } from '../../redux/dialogsReducer'
import Dialogs from './Dialogs'

const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }
    let onMessageChange = (text) => {
        props.store.dispatch(onMessageChangeActionCreator(text))
    }
    return (
       <Dialogs 
       addMessage={addMessage}
       onMessageChange={onMessageChange}
       dialogsPage = {state}/>
    )
}

export default DialogsContainer