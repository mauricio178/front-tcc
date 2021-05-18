import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from './pages/auth/login';
import PreRegister from './pages/auth/pre-cadastro';
import Register from './pages/auth/cadastro';

function Routes(){
    return (
        <BrowserRouter>
            <Switch>

              <Route path="/" exact component={Login} />
              <Route path="/cadastro" exact component={Register} />
              <Route path="/pre-cadastro" exact component={PreRegister} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes