import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Dialogs.module.css'

const DialogItem = (props) => {
    return (
        <NavLink to={'/dialogs/' + props.id} className={styles.dialog}>
             {props.name}
        </NavLink>
    )
}
const Message = ({message}) => {
    return (
        <div className="message">{message}</div>
    )
}
const Dialogs = () => {
   
    return (
        <div className={styles.dialogs}>
           <div className={styles.dialogsItems}>
               <DialogItem id='1' name='Илья'/>
               <DialogItem id='2' name='Аедрей'/>
               <DialogItem id='3' name='Влад'/>
            </div>
            <div className={styles.messages}>
                <Message message='Hi men'/>
                <Message message='Do u like reading'/>
                <Message message='Ddd'/>
            </div>
        </div>
    )
}

export default Dialogs