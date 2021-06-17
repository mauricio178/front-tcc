import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Aside } from '../components/aside';
import { Header } from '../components/header';
import { HomeContainer } from '../components/home/HomeContainer';
import Login from '../pages/auth/login';
import Repositorio from '../pages/dashboard/repositorio';
import Dashboard from '../pages/dashboard';
import Listagem from '../pages/dashboard/listagem';
import FirstAcess from '../pages/auth/acesso';

function HomeRoutes(){
    return (
      <BrowserRouter>
          <HomeContainer>

              <Switch>
                {/* TODO, Maurício - Adicionar rotas autenticadas aqui */}
                <Route path="/" exact component={FirstAcess} />
                <Route path="/dashboard" exact component={Dashboard} />
                <Route path="/listagem" exact component={Listagem} />
                <Route path="/repositorio" exact component={Repositorio} />
              </Switch>
           
          </HomeContainer>
      </BrowserRouter>
    );
}

export { HomeRoutes }