import { usersAPI} from "../api/api";

const SET_FRIENDS = 'SET_FRIENDS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_FRIENDS = 'SET_TOTAL_FRIENDS';



let initialState = {
    friends: [],
    currentPage: 1,
    pageSize: 10,
    totalFriends:0

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

        default:
            return state;
    }
}

export const setFriends = (friends) => ({type: SET_FRIENDS, friends});
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page});
export const setTotalFriends = (total) => ({type: SET_TOTAL_FRIENDS, total});



export const getFriends = (currentPage, pageSize) => async (dispatch) => {
    let response = await usersAPI.getUsers(currentPage, pageSize, null, true)
    dispatch(setFriends(response.items))
    dispatch(setTotalFriends(response.totalCount))
}





export default friendsReducer;