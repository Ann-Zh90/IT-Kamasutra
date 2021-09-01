import React from 'react';
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img alt=''
                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQznlsVD7VbyxOiBR-GNYW5v09lRwapBHJ73Q&usqp=CAU"/>

            <div className={s.loginBlock}>
                {props.isAuth ? <div className={s.authContainer}>
                    <img className={s.userPhoto} src={props.photo} /> <div>{props.login}</div>
                </div> : <NavLink to={'/login'}>Login</NavLink>}
            </div>

        </header>
    )
}
export default Header