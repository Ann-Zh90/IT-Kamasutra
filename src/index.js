import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogs = [
    {id: 1, name: 'Anna'},
    {id: 2, name: 'Sveta'},
    {id: 3, name: 'Yuliya'},
    {id: 4, name: 'Petya'},
    {id: 5, name: 'Vova'},
]

let messages = [
    {id: 1, message: 'Hi!'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo'},
]

let posts = [
    {id: 1, message: 'Hi! How are you?', likeCounter: '15'},
    {id: 2, message: 'It\'s my first post', likeCounter: '24'},
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
