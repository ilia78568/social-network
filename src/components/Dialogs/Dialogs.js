import React from 'react'
import styles from './Dialogs.module.css'
import DialogsItem from './DialogItem/DialogsItem'
import Message from './Message/Message'

const Dialogs = () => {
   
    let dialogsData = [
        {id: 1, name: 'Илья'},
        {id: 2, name: 'Андрей'},
        {id: 3, name: 'Влад'},
    ]
    let messagesData = [
        {id: 1, message: 'Hi all'},
        {id: 2, message: 'Do u like me?'},
        {id: 3, message: 'Bye bye'}
    ]
    let dialogsElements = dialogsData.map(elem => {
        return <DialogsItem id={elem.id} name={elem.name}/>
    })

    let messagesElements = messagesData.map(elem => {
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