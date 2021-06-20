import React from 'react';
import {  } from 'react-icons/fi';

import { Container, DivControls, DivIcon, DivName, DivEmail, DivPerfil} from './styled'

export const TitleCard = () => {

  return (
    <Container>
      <DivIcon>
        
      </DivIcon>
      <DivName>
        <p>Nome</p> 
        
      </DivName>
      <DivEmail>
        <p>Email</p>
      </DivEmail>
      <DivPerfil>
        <p>Perfil</p>
      </DivPerfil>
      <DivControls>
        <p></p>
      </DivControls>

    </Container>
  )
}
