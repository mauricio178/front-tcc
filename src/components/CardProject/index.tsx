import React from 'react';
import { FiMap, FiEdit, FiMoreHorizontal, FiTrash2 } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import { Container, DivControls, DivDateFim, DivDateInicio, DivGerente, DivIcon, DivId, DivName, DivVendedor } from './styled'

export const CardProject = () => {

  const history = useHistory()

  const handleGoToEditProject = React.useCallback(() => {
    history.push('./')
  }, [history])

  const handleGoToDeleteProject = React.useCallback(() => {
    history.push('./')
  }, [history])
  
  return (
    <Container>
      <DivIcon>
      <FiMap size="17"></FiMap>
      </DivIcon>

      <DivId>
        <p>001</p> 
      </DivId>

      <DivName>
        <p>Project Name</p>
      </DivName>

      <DivGerente>
        <p>Gerente Name</p>
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
        <button onClick={() => handleGoToEditProject()}><FiEdit size="16"></FiEdit></button>
        <button onClick={() => handleGoToDeleteProject ()}><FiTrash2 size="16"></FiTrash2></button>
        <button><FiMoreHorizontal size="16"></FiMoreHorizontal></button>
      </DivControls>
    </Container>
  )
}
