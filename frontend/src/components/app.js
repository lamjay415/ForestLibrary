<<<<<<< HEAD
import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
// import { Switch } from 'react-router-dom';

import NavBarContainer from './nav/navbar_container';
import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import TreesContainer from './trees/trees_container';
// import TreeCreateContainer from "./trees/tree_create_container";
import ProfileContainer from './trees/profile_container';

import LeavesContainer from './leaves/leaves_container';
import AddLeafContainer from './leaves/add_leaf_container';
import './app.css';

const App = () => (
    <div>
        <NavBarContainer/>
        <div>
            <AuthRoute exact path="/" component={MainPage} />
            {/* <ProtectedRoute exact path='/' component={LeavesContainer} /> */}
        </div>
        <div>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/register" component={SignupFormContainer} />
            <ProtectedRoute exact path="/" component={TreesContainer}/>
            <ProtectedRoute exact path="/users/:id" component={ProfileContainer} />
            {/* <ProtectedRoute exact path="/users/userId" component={TreeCreateContainer} /> */}
        </div>
        <div>
            <ProtectedRoute exact path='/users/:id' component={AddLeafContainer}/>
        </div>
              
    </div>
);

=======
import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
// import { Switch } from 'react-router-dom';

import NavBarContainer from './nav/navbar_container';
import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import TreesContainer from './trees/trees_container';
import TreeCreateContainer from "./trees/tree_create_container";
import ProfileContainer from './trees/profile_container';

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
            <ProtectedRoute exact path="/tree" component={TreesContainer}/>
            <ProtectedRoute exact path="/profile" component={ProfileContainer} />
            <ProtectedRoute exact path="/new_tree" component={TreeCreateContainer} />
            <ProtectedRoute exact path='/leaves/new_leaf' component={AddLeafContainer}/>
        </div>
              
    </div>
);

>>>>>>> 18023da50a5d19ade5862c7fc9a4ca98140e5573
export default App;