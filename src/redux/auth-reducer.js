import {authAPI, usersAPI} from "../api/api";
import * as axios from "axios";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_USER_PHOTO = 'SET_USER_PHOTO';


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    photo: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        case SET_USER_PHOTO:
            return {
                ...state,
                photo: action.photo,
            }
        default:
            return state;
    }

}

export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}});
export const setUserPhoto = (photo) => ({type: SET_USER_PHOTO, photo});

export const getAuthUserData = () => {
    return (dispatch) => {
        authAPI.me()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    dispatch(setAuthUserData(id, email, login));
                    usersAPI.getProfile(8)
                        .then(response => {
                            dispatch(setUserPhoto(response.data.photos.small));
                        })
                }
            })
    }
}




export default authReducer;