import {rerenderEntireTree} from '../render'

let state = {
    profilePage: {
        posts: [
            {message: 'lallalaal', likeCount: 13},
            {message: 'it is my first post', likeCount: 0},
            {message: 'do u like anime', likeCount: 103}
        ]
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
}

export let addPost = (postMessage => {
    let newPost = {
        id: 5, 
        message: postMessage,
        likeCount: 0
    }

    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state)
})

export default state;