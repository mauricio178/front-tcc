import { Header } from '../../components/header';
import React, { useRef, InputHTMLAttributes } from 'react'
import { Container, Lbl, ContainerIn } from './styled'

import NavBar from '../../components/navbar';

interface DivProps extends InputHTMLAttributes<HTMLSelectElement> {
  name: string;
}

const Listagem: React.FC<DivProps> = ({children}: any) => {
  return (
    <>
      <Header/>
      <NavBar />
      <Container>
      <Lbl>Listagem</Lbl>
        <ContainerIn>
          {children}
        </ContainerIn>
      </Container>
    </>
  );
}

export default Listagem