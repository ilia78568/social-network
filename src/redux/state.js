const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let store = {
    _state : {
        profilePage: {
            posts: [
                {message: 'lallalaal', likeCount: 13},
                {message: 'it is my first post', likeCount: 0},
                {message: 'do u like anime', likeCount: 103}
            ],
            newPostText: 'Helo ilia'
        },
        dialogsPage: {
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
    },
    getState() {
        return this._state;
    },
    
    _callSubscriber() {
        console.log('state changed')
    },
    
   
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        if(action.type === ADD_POST) {
            let newPost = {
                id: 5, 
                message: this._state.profilePage.newPostText,
                likeCount: 0
            }
            this._state.profilePage.newPostText = ''
            this._state.profilePage.posts.push(newPost)
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        }
    }

}

export const addPostActionCreator = () => ({type:ADD_POST})
export const onPostChangeActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText : text})
  
export default store;