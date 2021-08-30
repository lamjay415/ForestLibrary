import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import {Route} from 'react-router-dom';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import ForestContainer from './forest/forest_container';
import ProfileContainer from './trees/profile_container';
import OthersTreeContainer from './trees/others_tree_container';
import Search from './search/search';

import './app.css';

const App = () => (
    <div >
        <NavBarContainer/>
        <div className="app-containers">
            <div>
                <AuthRoute exact path="/login" component={LoginFormContainer} />
                <AuthRoute exact path="/register" component={SignupFormContainer} />
                <Route exact path="/users/:user_id" component={OthersTreeContainer} />
                <ProtectedRoute exact path="/users/:user_id/profile" component={ProfileContainer} />
                <Route exact path="/" component={ForestContainer} />
            </div>
           
        </div> 
        <div>
            <ProtectedRoute exact path="/search" component={Search} />
        </div>
    </div>
);

export default App;