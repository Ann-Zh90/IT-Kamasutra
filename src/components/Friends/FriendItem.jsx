import React from "react";
import s from './FriendItem.module.css'

const FriendItem = (props) => {
    return (
        <div className={s.friendItem}>
            <img src={props.src}/>
            <div>
                {props.name}
            </div>
        </div>
    )
}

export default FriendItem