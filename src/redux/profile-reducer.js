const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'Hi! How are you?', likeCounter: '15'},
        {id: 2, message: 'It\'s my first post', likeCounter: '24'},
        {id: 3, message: 'Blablabla', likeCounter: '19'},
        {id: 4, message: 'Dada', likeCounter: '21'},
    ],
    newPostText: 'it-kamasutra.com'
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCounter: 0
            };
            let stateCopy = {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            };
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        default:
            return state;
    }

}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;