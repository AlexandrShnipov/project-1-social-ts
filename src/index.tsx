import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

export type PostType = {
    id: string;
    message: string;
    likesCount: number;
}

let posts: Array<PostType> = [
    {id: '1', message: 'Hi my friends', likesCount: 11},
    {id: '2', message: `It's my first post!`, likesCount: 25}
]

export type MessageElementType = {
    id: string;
    name: string;
}

let messagesElement: Array<MessageElementType> = [
    {id: '1', name: 'Dasha'},
    {id: '2', name: 'Sasha'},
    {id: '3', name: 'Dima'},
    {id: '4', name: 'Pasha'},
    {id: '5', name: 'Lena'},
    {id: '6', name: 'Sveta'}
]
export type MessageTextType = {
    id: string;
    message: string;
}

 let messagesText: Array<MessageTextType> = [
    {id: '1', message: 'Hi'},
    {id: '2', message: 'How is your it-kamasutra'},
    {id: '3', message: 'Yo'},
    {id: '4', message: 'Yo'}
]


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App messagesElement={messagesElement} messagesText={messagesText} posts={posts} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

