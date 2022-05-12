import React from "react";
import s from './NavBar.module.css';
import {NavLink} from "react-router-dom";

//variants one
// const getActiveClass = ({isActive}: { isActive: boolean }): any  => isActive ? `${s.active} ${s.navBarItemLink}` : s.navBarItemLink

//variants two
const getActiveClass = ({isActive}: any)  => isActive ? `${s.active} ${s.navBarItemLink}` : s.navBarItemLink

const NavBar = () => {
    return (
        <div className={s.navBar}>
            <nav className={s.navBarMenu}>
                <ul className={s.navBarItems}>
                    <li className={s.navBarItem}>
                        {/*<NavLink className={getActiveClass as any} to="/profile">Profile</NavLink>*/}
                        <NavLink className={getActiveClass} to="/profile">Profile</NavLink>
                    </li>
                    <li className={s.navBarItem}>
                        <NavLink className={getActiveClass} to="/messages">Messages </NavLink>
                    </li>
                    <li className={s.navBarItem}>
                        <NavLink className={getActiveClass} to="/news">News</NavLink>
                    </li>
                    <li className={s.navBarItem}>
                        <NavLink className={getActiveClass} to="/music">Music</NavLink>
                    </li>
                    <li className={s.navBarItem}>
                        <NavLink className={getActiveClass} to="/setting">Setting</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;