import React, { useRef, } from 'react'
import { PrimaryButton } from '../../PrimaryButton';
import { Container, ContainerForm } from './styled'

interface AuthDefaultBackgroundInterface{
  children: React.ReactNode;
  isLogin?: boolean;
  
}

function AuthDefaultBackground({ children, isLogin }: AuthDefaultBackgroundInterface){
  return (
    <Container className="App"> 
        <ContainerForm>
          {children}
        </ContainerForm>
    </Container>
  );
}


export { AuthDefaultBackground }