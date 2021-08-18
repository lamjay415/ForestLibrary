import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
// import { Switch } from 'react-router-dom';

import NavBarContainer from './nav/navbar_container';
import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import LeavesContainer from './leaves/leaves_container';
import AddLeafContainer from './leaves/add_leaf_container';
import './app.css';

const App = () => (
    <div>
        <NavBarContainer/>
        <div>
            <AuthRoute exact path="/" component={MainPage} />
            <ProtectedRoute exact path='/' component={LeavesContainer} />
        </div>
        <div>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/register" component={SignupFormContainer} />
            <ProtectedRoute exact path='/trees/treeId' component={AddLeafContainer}/>
        </div>
              
    </div>
);

export default App;