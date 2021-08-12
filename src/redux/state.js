

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi! How are you?', likeCounter: '15'},
            {id: 2, message: 'It\'s my first post', likeCounter: '24'},
            {id: 3, message: 'Blablabla', likeCounter: '19'},
            {id: 4, message: 'Dada', likeCounter: '21'},
        ],
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Anna'},
            {id: 2, name: 'Sveta'},
            {id: 3, name: 'Yuliya'},
            {id: 4, name: 'Petya'},
            {id: 5, name: 'Vova'},
        ],
        messages: [
            {id: 1, message: 'Hi!'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'},
        ]
    }
}

export default state;