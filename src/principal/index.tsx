import React, { useRef } from 'react'
import { Container, Lbl } from './styled'
import { Header } from '../components/header';
import NavBar from '../components/navbar';

export default function TelaPrincipal() {
  return (
    <>
      <Header />
      <NavBar />
      <Container>
        <Lbl>Bem vindo! Seu Dashboard será vizualizado aqui.</Lbl>
      </Container>
    </>
  )
}

