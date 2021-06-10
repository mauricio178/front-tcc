import React, { useCallback, useEffect, useRef, useState } from 'react'
import SelectInput from '../../components/select'
import { Container, ContainerTitle, ContainerDiv, Div, DivFixed } from './styled'


export default function Dashboard(props: any) {

  return (
    <Container>
      <ContainerTitle>
        <h2>DashBoard</h2>

      </ContainerTitle>
      <ContainerDiv>
        <h4>Projetos</h4>
        <DivFixed>
          <div>
            <p>Cód.</p>
          </div>
          <div>
            <p>Nome</p>
          </div>
          <div>
            <p>Data de Inicio</p>
          </div>
          <div>
            <p>Gerente</p>
          </div>
          <div>
            <p>Situação</p>
          </div>
        </DivFixed>
        <Div></Div>
        <Div></Div>
        <Div></Div>
        <h4>Tarefas</h4>
        <Div></Div>
        <Div></Div>
      </ContainerDiv>
    </Container>
  );
}