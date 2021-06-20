import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Aside } from '../components/aside';
import { Header } from '../components/header';
import { HomeContainer } from '../components/home/HomeContainer';
import Repositorio from '../pages/dashboard/repositorio';
import Dashboard from '../pages/dashboard';
import Listagem from '../pages/dashboard/member/listagem';
import FirstAcess from '../pages/auth/acesso';
// import FormMember from '../pages/dashboard/member/form';
import FormProjeto from '../pages/dashboard/projeto/form';

function HomeRoutes(){
    return (
      <BrowserRouter>
          <HomeContainer>

              <Switch>
                {/* TODO, Maurício - Adicionar rotas autenticadas aqui */}
                <Route path="/" exact component={Dashboard} />
                <Route path="/listagem" exact component={Listagem} />
                <Route path="/repositorio" exact component={Repositorio} />
                {/* <Route path="/form-member" exact component={FormMember} /> */}
                <Route path="/form-project" exact component={FormProjeto} />
                


              </Switch>
           
          </HomeContainer>
      </BrowserRouter>
    );
}

export { HomeRoutes }