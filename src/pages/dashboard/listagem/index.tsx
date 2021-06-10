import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Container, ContainerTitle, ContainerDiv, Div, DivFixed } from './styled'


export default function Listagem(props: any) {

  return (
    <Container>
      <ContainerTitle>
        <h2>Lista de Usuários / Equipe</h2>

      </ContainerTitle>
      <ContainerDiv>

        <Div></Div>
        <Div></Div>
        <Div></Div>
        <Div></Div>
        <Div></Div>
      </ContainerDiv>
    </Container>
  );
}