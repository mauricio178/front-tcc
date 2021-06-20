import React from 'react';
import {  } from 'react-icons/fi';

import { Container, DivControls, DivIcon, DivName, DivGerente, DivId, DivVendedor, DivDateInicio, DivDateFim } from './styled'

export const TitleCard = () => {

  return (
    <Container>
      <DivIcon>
        
      </DivIcon>
      <DivId>
        <p>ID</p> 
      </DivId>
      <DivName>
        <p>Nome do Projeto</p>
      </DivName>
      <DivGerente>
        Gerente/Responsável
      </DivGerente>
      <DivVendedor>
        <p>Vendedor</p>
      </DivVendedor>
      <DivDateInicio>
        <p>Previsão de Inicio</p>
      </DivDateInicio>
      <DivDateFim>
        <p>Previsão de Fim</p>
      </DivDateFim>
      <DivControls>
        <p></p>
      </DivControls>

    </Container>
  )
}
