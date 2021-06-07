import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from './pages/auth/login';
import FirstAcess from './pages/auth/acesso';
import TelaPrincipal from './principal';
import Listagem from './principal/listagem';
import Repositorio from './principal/repositorio';
import Registro from './pages/auth/registro';
import Cadastro from './principal/cadastro';
import TelaPrincipalUser from './principal copy';

function Routes(){
    return (
        <BrowserRouter>
            <Switch>
              <Route path="/" exact component={FirstAcess} />
              <Route path="/login" exact component={Login} />
              <Route path="/cadastro" exact component={Cadastro} />
              <Route path="/principal copy" exact component={TelaPrincipalUser} />
              <Route path="/listagem" exact component={Listagem} />
              <Route path="/registro" exact component={Registro} />
              <Route path="/principal" exact component={TelaPrincipal} />
              <Route path="/repositorio" exact component={Repositorio} />

            </Switch>
        </BrowserRouter>
    );
}

export default Routes