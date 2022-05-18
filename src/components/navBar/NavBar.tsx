import React from "react";
import s from './NavBar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./friends/Friends";
import {ItemType, NavBarType} from "../../redux/state";
import NavBarItem from "./navBarItem/NavBarItem";


type NavBarPropsType = {
    stateNavBar: NavBarType,
}
//variants one
// const getActiveClass = ({isActive}: { isActive: boolean }): any  => isActive ? `${s.active} ${s.navBarItemLink}` : s.navBarItemLink

//variants two
const getActiveClass = ({isActive}: any)  =>
    isActive ? `${s.active} ${s.navBarItemLink}` : s.navBarItemLink

const NavBar = (props: NavBarPropsType) => {

    let navBarItem = props.stateNavBar.item.map ((item: ItemType) => <NavBarItem key={item.id} {...item}/>)

    return (
        <div className={s.navBar}>
            <nav className={s.navBarMenu}>
                <ul className={s.navBarItems}>
                    {navBarItem}
                  <Friends friends={props.stateNavBar.friends}/>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;