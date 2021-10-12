import React from "react";
import s from './FriendItem.module.css'
import userPhoto from "../../assets/images/user.png";
import {unFollow} from "../../redux/friends-reducer";

const FriendItem = (props) => {
    return (
        <div className={s.friendItem}>
            <div><img alt='' src={props.friend.photos.small || userPhoto}/></div>
            {props.friend.followed&&<button onClick={()=> props.unFollow(props.friend.id)}>Unfollow</button>}
            {!props.friend.followed&&<button onClick={()=> props.unFollow(props.friend.id)}>Follow</button>}


            <div>
                <div>{props.friend.name}</div>
                <div> Status: {props.friend.status}</div>
                <div>{props.friend.name}</div>

            </div>
        </div>
    )
}

export default FriendItem