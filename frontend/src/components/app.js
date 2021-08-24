import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import {Route} from 'react-router-dom';
// import { Switch3 } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import ForestContainer from './forest/forest_container';
import ProfileContainer from './trees/profile_container';

import './app.css';

const App = () => (
    <div>
        <NavBarContainer/>
        <div>
         <div>
             {/* <Switch> */}
                <AuthRoute exact path="/login" component={LoginFormContainer} />
                <AuthRoute exact path="/register" component={SignupFormContainer} />
                <Route exact path="/users/:id" component={ProfileContainer} />
                <Route exact path="/" component={ForestContainer}/>
             {/* </Switch> */}
            {/* <ProtectedRoute exact path="/users/userId" component={TreeCreateContainer} /> */}
        </div>
\            {/* <ProtectedRoute exact path='/' component={LeavesContainer} /> */}
        </div>
   
        <div>
        </div>
              
    </div>
);

export default App;