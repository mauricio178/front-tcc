import { FiUserPlus, FiUserCheck, FiBox } from 'react-icons/fi';
import React, { useCallback, useRef } from 'react'
import { Container, ContainerTitle, ContainerDiv, Div } from './styled'
import { useHistory } from 'react-router-dom';


export default function Listagem(props: any) {

  const history = useHistory()

  const handleGoToFormMember = useCallback(() => {
    history.push('/form-member')
  }, [history])

  return (
    <Container>
      <ContainerTitle>

        <h2>Lista de Usuários / Equipe</h2>

        <div>
          <button onClick={handleGoToFormMember}><FiUserPlus size={16} />Adicionar Novo Usuário</button>
        </div>
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