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
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import {StateType} from "./redux/state";
import Friends from "./components/friends/Friends";

type AppPropsType = {
    state: StateType,
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="appWrap">
                <Header/>
                <NavBar stateNavBar={props.state.navBar}/>
                <main className={'content'}>
                    <Routes>
                        <Route
                            path={'/profile/*'}
                            element={<Profile stateProfile={props.state.profilePage}/>}
                        />
                        <Route
                            path={'/messages/*'}
                            element={<Messages stateMessages={props.state.dialogsPage}/>}
                        />
                        <Route path={'/news/*'} element={<News/>}/>
                        <Route path={'/music/*'} element={<Music/>}/>
                        <Route path={'/setting/*'} element={<Setting/>}/>
                        <Route path={'/friends/*'} element={<Friends/>}/>
                    </Routes>

                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
