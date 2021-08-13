import React from "react";
import FriendItem from "./FriendItem";
import s from './Friends.module.css'


const Friends = (props) => {
    let friendsElements = props.state.map(fr => <FriendItem src={fr.img} name={fr.name}/>)
    return (
        <div className={s.friendList}>
        {friendsElements}
        </div>
    )
}

export default Friends