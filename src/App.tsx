import React from 'react';
import './App.css';
import './Reset.css'
import Header from "./components/header/Header";
import NavBar from "./components/navBar/NavBar";
import Profile from "./components/profile/Profile";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Setting from "./components/setting/Setting";
import Messages from "./components/messages/Messages";
import {BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";

function App() {
    return (
        <BrowserRouter>
            <div className="appWrap">
                <Header/>
                <NavBar/>
                <main className={'content'}>
                    <Routes>
                        <Route path={'/profile/*'} element={<Profile/>}/>
                        <Route path={'/messages/*'} element={<Messages/>}/>
                        <Route path={'/news/*'} element={<News/>}/>
                        <Route path={'/music/*'} element={<Music/>}/>
                        <Route path={'/setting/*'} element={<Setting/>}/>
                    </Routes>

                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
