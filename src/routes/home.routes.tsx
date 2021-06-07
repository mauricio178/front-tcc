import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Aside } from '../components/aside';
import { Header } from '../components/header';
import { HomeContainer } from '../components/home/HomeContainer';
import FirstAcess from '../pages/auth/acesso';

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
                <Route path="/" exact component={FirstAcess} />

              </Switch>
            </div>
          </HomeContainer>
      </BrowserRouter>
    );
}

export { HomeRoutes }