import React from "react";
import s from './FriendItem.module.css'
import userPhoto from "../../assets/images/user.png";

const FriendItem = (props) => {
    debugger
    return (
        <div className={s.friendItem}>
            <img alt='' src={props.friend.photos.small || userPhoto}/>
            <div>
                <div>{props.friend.name}</div>
                <div> Status: {props.friend.status}</div>
                <div>{props.friend.name}</div>

            </div>
        </div>
    )
}

export default FriendItem