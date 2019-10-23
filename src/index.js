import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


let posts = [
    { id: 1, message: 'Hi,...', likeCount: 12 },
    { id: 2, message: 'Normal', likeCount: 1 },
    { id: 3, message: 'test mess', likeCount: 1 }
];

let dialogs = [
    { id: 1, name: 'Dima' },
    { id: 2, name: 'Sema' },
    { id: 3, name: 'Gena' },
    { id: 4, name: 'Yaro' }
];

let messages = [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'Hi Sema' },
    { id: 3, message: 'Yeee' },
    { id: 4, message: 'YesYo' }
];


ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
