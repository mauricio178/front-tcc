import React, { useRef, } from 'react'
import { Container, ContainerForms, ContainerFormLeft, ContainerFormRigth, Legend, Title2, Button2, } from './styled'

interface AuthDefaultBackgroundInterface{
  children: React.ReactNode;
  isLogin?: boolean;
  
}

function AuthDefaultBackground({ children, isLogin }: AuthDefaultBackgroundInterface){
  return (
    <Container className="App"> 
      <ContainerForms>
        <ContainerFormLeft >
          {children}
        </ContainerFormLeft>

        <ContainerFormRigth background-image="./img1-login.png">
        <Title2>
            Bem-Vindo {isLogin && "de volta"} ao Manager G!
          </Title2>
          <Legend>
            <p>___________________________________________________</p>
            <br></br>
            <p>- Assuma o controle de seus projetos, organizando tarefas e gerenciando recursos.</p>
            <br></br>
            <p>- Pensado principalmente para empresas que procuram uma maneira simples de gerenciar seus
            projetos baseado nas premissas do PMBOK (6ª Ed.)
            </p>
            <br></br>
            <p>___________________________________________________</p>
          </Legend>
          <Button2 type="submit">
            Ler Mais...
          </Button2>     
        </ContainerFormRigth>

      </ContainerForms>
    </Container>
  );
}


export { AuthDefaultBackground }