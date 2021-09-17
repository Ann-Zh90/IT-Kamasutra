import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'Hi! How are you?', likeCounter: '15'},
        {id: 2, message: 'It\'s my first post', likeCounter: '24'},
        {id: 3, message: 'Blablabla', likeCounter: '19'},
        {id: 4, message: 'Dada', likeCounter: '21'},
    ]
};

it('Length of posts should be incremented', () => {
    // 1. test data
    let action = addPostActionCreator('it=kamasutra.com');
    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(5);
})

it('text of new post should be correct', () => {
    // 1. test data
    let action = addPostActionCreator('it=kamasutra.com');
    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts[4].message).toBe('it=kamasutra.com');
})

it('After deleting length of posts should be decremented', () => {
    // 1. test data
    let action = deletePost(1);
    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(3)
})

it(`After deleting length of posts shouldn't decrement if id is incorrect`, () => {
    // 1. test data
    let action = deletePost(1000);
    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(4)
})
