import profileReducer, { addPostActionCreator, deletePost } from "./profileReducer"

let state =   {
    posts: [
        {message: 'lallalaal', likeCount: 13, id: 0},
        {message: 'it is my first post', likeCount: 0, id: 1},
        {message: 'do u like anime', likeCount: 103, id: 2}
    ],
}

it('length of posts should be increment', () => {
    let action = addPostActionCreator('test')
  
    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(4);

})

it('message of post should contain test1', () => {
    let action = addPostActionCreator('test1')
 
    let newState = profileReducer(state, action)

    expect(newState.posts[3].message).toBe('test1');
})


it('after deleting length of messages should be decrement', () => {
   
    let action = deletePost(1)
 
    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(2);
})