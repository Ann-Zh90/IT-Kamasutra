import React from "react";
import FriendItem from "./FriendItem";
import s from './Friends.module.css'
import {connect} from "react-redux";
import {getFriends, unFollow} from "../../redux/friends-reducer";
import Friends from "./Friends";
import {usersAPI} from "../../api/api";



class FriendsContainer extends React.Component {
    componentDidMount() {
        this.props.getFriends(this.props.currentPage, this.props.pageSize)
    }
    onPageChange = (currentPage) => {
        let pageSize = this.props.pageSize;
        this.props.getFriends(currentPage, pageSize)
}

    render() {
        return (
            <div>
                <Friends friends={this.props.friends}
                         currentPage={this.props.currentPage}
                         totalFriends={this.props.totalFriends}
                         pageSize={this.props.pageSize}
                         onPageChange={this.onPageChange}
                         unFollow={this.props.unFollow}

                />
            </div>
        )
        /* let friendsElements = props.state.map(fr => <FriendItem src={fr.img} name={fr.name}/>)
         return (
             <div className={s.friendList}>
             {friendsElements}
             </div>
         )*/
    }
}
const mapStateToProps = (state) => {
    return {
        friends: state.friendsPage.friends,
        currentPage: state.friendsPage.currentPage,
        totalFriends:state.friendsPage.totalFriends,
        pageSize: state.friendsPage.pageSize,
    }
}

export default connect (mapStateToProps, {getFriends, unFollow}) (FriendsContainer)