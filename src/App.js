import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
//import DialogsContainer from "./components/Dialogs/DialogsContainer";

import UsersContainer from "./components/Users/UsersContainer";
//import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/preloader/Preloader";
import store from "./redux/redux-store";
import FriendsContainer from "./components/Friends/FriendsContainer";
import {withSuspense} from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


class App extends React.Component {
    catchAllUnhandledErrors = (promiseRejectionEvent) => {
        alert('Some error occurred');
        //console.error(promiseRejectionEvent)
    }
    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }
componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors)
}

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Switch>
                        <Route path='/news' component={News}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/settings' component={Settings}/>
                        <Route path='/dialogs' render={withSuspense(DialogsContainer)}/>
                        <Redirect exact  from="/" to="/profile" />
                        <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/login' render={() => <LoginPage/>}/>
                        {/*<Route path='/friends' render={() => <FriendsContainer/>}/>*/}
                        <Route path='*' render={() => <div>404 NOT FOUND</div>}/>

                    </Switch>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppConrainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

let SamuraiJSApp = (props) => {
    return <BrowserRouter>
        <React.StrictMode>
            <Provider store={store}>
                <AppConrainer/>
            </Provider>
        </React.StrictMode>
    </BrowserRouter>
}
export default SamuraiJSApp;