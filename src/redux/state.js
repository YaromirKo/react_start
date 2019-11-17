let rerenderEntireTree = () => {
    console.log('state changed');
};

let state = {

    profilePage: {
        posts: [
            {id: 1, message: 'Hi,...', likeCount: 12},
            {id: 2, message: 'Normal', likeCount: 1},
            {id: 3, message: 'test mess', likeCount: 1}
        ],
        newPostText: 'test-it',
    },

    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dima'},
            {id: 2, name: 'Sema'},
            {id: 3, name: 'Gena'},
            {id: 4, name: 'Yaro'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Hi Sema'},
            {id: 3, message: 'Yeee'},
            {id: 4, message: 'YesYo'}
        ]
    },
};


export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likeCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
};
export default state;