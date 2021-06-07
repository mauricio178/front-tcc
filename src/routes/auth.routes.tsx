import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import FirstAcess from '../pages/auth/acesso';
import Login from '../pages/auth/login';
import Registro from '../pages/auth/registro';

function AuthRoutes(){
    return (
        <BrowserRouter>
            <Switch>
              <Route path="/" exact component={FirstAcess} />
              <Route path="/login" exact component={Login} />
              <Route path="/registro" exact component={Registro} />
              

            </Switch>
        </BrowserRouter>
    );
}

export { AuthRoutes }