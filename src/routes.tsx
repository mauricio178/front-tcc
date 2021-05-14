import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from './pages/auth/login';

function Routes(){
    return (
        <BrowserRouter>
            <Switch>

              <Route path="/" exact component={Login} />
                
            </Switch>
        </BrowserRouter>
    );
}

export default Routes