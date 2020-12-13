const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let initialState = {
    dialogs: [
        {id: 1, name: 'Илья'},
        {id: 2, name: 'Андрей'},
        {id: 3, name: 'Влад'},
      ],
    messages: [
        {id: 1, message: 'Hi all test test'},
        {id: 2, message: 'Do u like me?'},
        {id: 3, message: 'Bye bye'}
      ],
      newMessageText: 'New message'
}

 const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 4,
                message: state.newMessageText
            }
            state.newMessageText = ''
            state.messages.push(newMessage)
            return state
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessageText;
            return state
        default:
            return state
    }
}
export default dialogsReducer
export const addMessageActionCreator = () => ({type: ADD_MESSAGE}) 
export const onMessageChangeActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessageText : text})
