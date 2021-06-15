import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Aside } from '../components/aside';
import { Header } from '../components/header';
import { HomeContainer } from '../components/home/HomeContainer';
import Repositorio from '../pages/dashboard/repositorio';
import Dashboard from '../pages/dashboard';
import Listagem from '../pages/dashboard/member/listagem';
import FirstAcess from '../pages/auth/acesso';
import FormMember from '../pages/dashboard/member/form';

function HomeRoutes(){
    const [ renderAside, setRenderAside ] = useState(true)

    return (
      <BrowserRouter>
          <HomeContainer>
            <Aside renderAside={renderAside} />
            <div className="innerPage">
              <Header setRenderAside={setRenderAside} />
              <Switch>

                {/* TODO, Maurício - Adicionar rotas autenticadas aqui */}
                <Route path="/dashboard" exact component={Dashboard} />
                <Route path="/listagem" exact component={Listagem} />
                <Route path="/repositorio" exact component={Repositorio} />
                <Route path="/form-member" exact component={FormMember} />
                <Route path="/" exact component={FirstAcess} />


              </Switch>
            </div>
          </HomeContainer>
      </BrowserRouter>
    );
}

export { HomeRoutes }