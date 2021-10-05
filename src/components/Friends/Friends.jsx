import React from "react";
import FriendItem from "./FriendItem";
import User from "../Users/User";
import Paginator from "../common/Paginator/Paginator";

const Friends = (props) => {
    debugger
    let friends = props.friends;
    let pagesCount = Math.ceil(props.totalFriends / props.pageSize);

    let pages = [];

    for (let i = 0; i <= pagesCount; i++) {
        pages.push(i)
    }


    return (
        <div>
            <div>
                <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChange}
                           totalItemsCount={props.totalFriends} pageSize={props.pageSize}/>
            </div>

            {
                friends.map(fr => <FriendItem friend={fr}
                                              key={fr.id}
                />)
            }

        </div>
    )
}

export default Friends