import React from "react";
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img className={s.headerLogo} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPHRvtFUvNT9Rrpz2HE4gu05hPPg8m7DweCg&usqp=CAU" alt="logo"/>
        </header>
    )
}

export default Header;