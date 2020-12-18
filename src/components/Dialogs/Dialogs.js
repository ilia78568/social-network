import React from 'react'
import styles from './Dialogs.module.css'
import DialogsItem from './DialogItem/DialogsItem'
import Message from './Message/Message'
import { Field, reduxForm } from 'redux-form'
import { Textarea } from '../common/FormsControl/FormsControl'
import { maxLengthCreator, required } from '../../utils/validators/validators'

const maxLength = maxLengthCreator(100)
const Dialogs = (props) => {
    let state = props.dialogsPage;
       
    let dialogsElements = state.dialogs.map(elem => {
        return <DialogsItem id={elem.id} key={elem.id} name={elem.name}/>
    })
    let messagesElements = state.messages.map(elem => {
        return <Message message={elem.message} key={elem.id} id={elem.id}/>
    })
 
    let addNewMessage = (values) => {
        props.addMessage(values.newMessageText)
    }

    return (
        <div className={styles.dialogs}>
           <div className={styles.dialogsItems}>
              {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messagesElements}
                
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

const AddMessageForm =(props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name='newMessageText' placeholder="Enter message" 
            validate={[required, maxLength]}></Field>
            <button >Add message</button>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs