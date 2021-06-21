
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HomeContainer } from '../components/home/HomeContainer';
import Dashboard from '../pages/dashboard';
import Listagem from '../pages/dashboard/member/listagem';
import FormProject from '../pages/dashboard/projeto/form';
import Projects from "../pages/dashboard";
// import FormMember from '../pages/dashboard/member/form';

function HomeRoutes(){
    return (
      <BrowserRouter>
          <HomeContainer>

              <Switch>
                {/* TODO, Maurício - Adicionar rotas autenticadas aqui */}
                <Route path="/" exact component={Dashboard} />
                <Route path="/listagem" exact component={Listagem} />
                <Route path="/dashboard" exact component={Projects} /> 
                {/* <Route path="/form-member" exact component={FormMember} /> */}
                <Route path="/form-project" exact component={FormProject} />
                


              </Switch>
           
          </HomeContainer>
      </BrowserRouter>
    );
}

export { HomeRoutes }