import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router';

import MainPage from './main/main_page';

const App = () => (
    <div>
        <Switch>
            <AuthRoute exact path='/' component={MainPage}/>
            {/* <AuthRoute exact path="/login" component={LoginFormContainer} /> */}
            {/* <AuthRoute exact path="/signup" component={SignupFormContainer} /> */}
        </Switch>
    </div>
)

export default App;