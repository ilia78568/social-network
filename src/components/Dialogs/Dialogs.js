import React from 'react'
import styles from './Dialogs.module.css'
import DialogsItem from './DialogItem/DialogsItem'
import Message from './Message/Message'

const Dialogs = (props) => {
    let state = props.dialogsPage;
   
    
    let dialogsElements = state.dialogs.map(elem => {
        return <DialogsItem id={elem.id} key={elem.id} name={elem.name}/>
    })
    let messagesElements = state.messages.map(elem => {
        return <Message message={elem.message} key={elem.id} id={elem.id}/>
    })
    let newMessageText = state.newMessageText

    let addMessage = () => {
    props.addMessage()
    }
    let onMessageChange = (e) => {
        let text = e.target.value;
        props.onMessageChange(text)
        
    }

    // if(props.isAuth === false) {
    //     return <Redirect to={'/login'}/>
    // }

    return (
        <div className={styles.dialogs}>
           <div className={styles.dialogsItems}>
              {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messagesElements}
                <textarea value={newMessageText} onChange={onMessageChange} ></textarea>
                <button onClick={addMessage}>Add message</button>
            </div>
        </div>
    )
}

export default Dialogs