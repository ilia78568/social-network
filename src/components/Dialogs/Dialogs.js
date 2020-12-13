import React from 'react'
import styles from './Dialogs.module.css'
import DialogsItem from './DialogItem/DialogsItem'
import Message from './Message/Message'
import { addMessageActionCreator, onMessageChangeActionCreator } from '../../redux/state'

const Dialogs = (props) => {
   
    let newMessageElement = React.createRef();


    let dialogsElements = props.dialogsPage.dialogs.map(elem => {
        return <DialogsItem id={elem.id} name={elem.name}/>
    })
    let messagesElements = props.dialogsPage.messages.map(elem => {
        return <Message message={elem.message} id={elem.id}/>
    })

    let addMessage = () => {
        props.dispatch(addMessageActionCreator())
    }
    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch(onMessageChangeActionCreator(text))
    }

    return (
        <div className={styles.dialogs}>
           <div className={styles.dialogsItems}>
              {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messagesElements}
                <textarea value={props.dialogsPage.newMessageText} onChange={onMessageChange} ref={newMessageElement}></textarea>
                <button onClick={addMessage}>Add message</button>
            </div>
        </div>
    )
}

export default Dialogs