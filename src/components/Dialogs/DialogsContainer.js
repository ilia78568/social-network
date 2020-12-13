import React from 'react'
import { addMessageActionCreator, onMessageChangeActionCreator } from '../../redux/dialogsReducer'
import StoreContext from '../../storeContext';
import Dialogs from './Dialogs'

const DialogsContainer = () => {
    
    return (
        <StoreContext.Consumer> 
            {
            (store) => {
                let state = store.getState().dialogsPage;

                let addMessage = () => {
                   store.dispatch(addMessageActionCreator())
                }
                let onMessageChange = (text) => {
                    store.dispatch(onMessageChangeActionCreator(text))
                }
                return <Dialogs addMessage={addMessage}
                               onMessageChange={onMessageChange}
                               dialogsPage = {state}/>
               }
            }
        </StoreContext.Consumer>
      
    )
}

export default DialogsContainer