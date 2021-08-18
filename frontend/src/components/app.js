import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';

import NavBarContainer from './nav/navbar_container';
import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import TreesContainer from './trees/trees_container';
import TreeCreateContainer from "./trees/tree_create_container";
import ProfileContainer from './trees/profile_container';

import './app.css';

const App = () => (
    <div>
        <NavBarContainer/>
        <Switch>
            <AuthRoute exact path="/" component={MainPage} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/register" component={SignupFormContainer} />
            <ProtectedRoute exact path="/tree" component={TreesContainer}/>
            <ProtectedRoute exact path="/profile" component={ProfileContainer} />
            <ProtectedRoute exact path="/new_tree" component={TreeCreateContainer} />
        </Switch>


    </div>
);

export default App;