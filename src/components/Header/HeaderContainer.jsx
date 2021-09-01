import React from 'react';
import * as axios from "axios";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData, setUserPhoto} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    this.props.setAuthUserData(id, email, login);
                    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/8`, {
                        withCredentials: true})
                        .then(response => {
                            this.props.setUserPhoto(response.data.photos.small)
                        })
                }
            })
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    photo: state.auth.photo
});

export default connect(mapStateToProps, {setAuthUserData, setUserPhoto})(HeaderContainer)