import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, setUserPhoto} from "../../redux/auth-reducer";
import {authAPI} from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData();
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

export default connect(mapStateToProps, {setUserPhoto, getAuthUserData })(HeaderContainer)