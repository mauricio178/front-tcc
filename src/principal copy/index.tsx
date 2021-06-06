import React, { useRef } from 'react'
import { Container, Lbl } from './styled'
import { Header } from '../components/header';
import NavBar from '../components/navbar';

export default function TelaPrincipalUser() {
  return (
    <>
      <Header />
      <NavBar />
      <Container>
        <Lbl>Bem vindo! Novo Usuário.</Lbl>
      </Container>
    </>
  )
}

