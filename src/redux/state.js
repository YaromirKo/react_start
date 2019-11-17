let store = {
    _state: {
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
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('state changed');
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likeCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
};

export default store;