const ADD_MESSAGE = 'ADD-MESSAGE'

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
}

 const dialogsReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case ADD_MESSAGE:
            let body = action.newMessageText;
            return {
                ...state,
                messages: [...state.messages, {id: 4, message: body}]
                }

        
        default:
            return state
    }
}
export default dialogsReducer
export const addMessageActionCreator = (newMessageText) => ({type: ADD_MESSAGE, newMessageText}) 
