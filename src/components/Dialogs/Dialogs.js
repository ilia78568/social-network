import React from 'react'
import styles from './Dialogs.module.css'
import DialogsItem from './DialogItem/DialogsItem'
import Message from './Message/Message'

const Dialogs = (props) => {
   
    let dialogsElements = props.state.dialogs.map(elem => {
        return <DialogsItem id={elem.id} name={elem.name}/>
    })

    let messagesElements = props.state.messages.map(elem => {
        return <Message message={elem.message} id={elem.id}/>
    })
    return (
        <div className={styles.dialogs}>
           <div className={styles.dialogsItems}>
              {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs