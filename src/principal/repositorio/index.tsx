import { Header } from '../../components/header';
import React, { useRef } from 'react'
import { Container, ContainerIn, Lbl } from './styled'
import NavBar from '../../components/navbar';

export default function Repositorio() {
  return (
    <>
      <Header/>
      <NavBar />
      <Container>
        <Lbl>Repositório</Lbl>
        <ContainerIn></ContainerIn>
      </Container>
    </>
  );
}
