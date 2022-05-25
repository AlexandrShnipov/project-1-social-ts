import state from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {addPost, StateType} from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

export const renderEntireTree = (state: StateType) => {
    root.render(
        <React.StrictMode>
            <App
                state={state} addPost={addPost}/>
        </React.StrictMode>
    );
}


renderEntireTree(state);

