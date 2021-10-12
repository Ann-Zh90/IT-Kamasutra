import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/objects-helpers";

const SET_FRIENDS = 'SET_FRIENDS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_FRIENDS = 'SET_TOTAL_FRIENDS';
const UNFOLLOW = 'UNFOLLOW';
const FOLLOW = 'FOLLOW';


let initialState = {
    friends: [],
    currentPage: 1,
    pageSize: 10,
    totalFriends: 0

};

const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FRIENDS: {
            return {
                ...state,
                friends: [...action.friends]
            };
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: [...action.currentPage]
            };
        }
        case SET_TOTAL_FRIENDS: {
            return {
                ...state,
                totalFriends: action.total
            };
        }
        case UNFOLLOW: {
            return {
                ...state,
                friends: updateObjectInArray(state.friends, action.id, 'id', {followed: false})
            };
        }
        case FOLLOW: {
            return {
                ...state,
                friends: updateObjectInArray(state.friends, action.id, 'id', {followed: true})
            };
        }

        default:
            return state;
    }
}

export const setFriends = (friends) => ({type: SET_FRIENDS, friends});
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page});
export const setTotalFriends = (total) => ({type: SET_TOTAL_FRIENDS, total});
const followSuccess = (userId) => ({type: FOLLOW, userId})
const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId})


export const getFriends = (currentPage, pageSize) => async (dispatch) => {
    let response = await usersAPI.getUsers(currentPage, pageSize, true)
    dispatch(setFriends(response.items))
    dispatch(setTotalFriends(response.totalCount))
}

export const unFollow =  (userId) => async (dispatch) => {
    let response = await usersAPI.unfollow(userId);
    if (response.data.resultCode === 0) {
        alert("you have successfully unsubscribed.")
        dispatch(unfollowSuccess(userId))
    }
}



export default friendsReducer;