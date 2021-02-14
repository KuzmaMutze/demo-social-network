import contentReducer from "./content-reducer";


it('new post should be added', () => {
    let action = addPostActionCreater("it-kamasutra");
    let state = {
        postData: [
            {message:"Hi, how are you?", like: 30},
            {message:"It's my first post", like: 32}
        ]
    };

    let newState = contentReducer(state, action);

    expect(newState.posts.length).toBe(5);
})

