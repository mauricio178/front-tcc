import { FiUserPlus, FiUsers, FiSearch } from 'react-icons/fi';
import { useCallback, useEffect, useState } from 'react'
import { Container, ContainerTitle, ContainerDiv, Content } from './styled'
import { CardUser } from '../../../../components/CardUser'
import { useHistory } from 'react-router-dom';
import { api } from '../../../../services/api';
import { useRouter } from '../../../../hooks/RouterProvider';
import { PrimaryButton } from '../../../../components/PrimaryButton';

import { FormMember } from '../../../../components/form';
import { useFormModal } from '../../../../hooks/FormModalProvider';
import { useGlobalData } from '../../../../hooks/GlobalDataProvider';

interface IMemberProps {
  email: string;
  name: string;
  profile: string;
}

export default function Listagem(props: any) {
  const { handleOpenModal, handlesSetFormComponent } = useFormModal()
  const { handleReloadMemberList, memberList } = useGlobalData()
  const { handleSetHeaderTitle } = useRouter()

  async function fetchMember() {
    handleReloadMemberList()
  }

  useEffect(() => {
    fetchMember()
    handleSetHeaderTitle('Equipe')
  }, [])

  const history = useHistory()

  const handleGoToFormMember = useCallback(() => {
    handlesSetFormComponent(<FormMember />)
  }, [history])

  return (
    <Container>
      <Content>

        <ContainerTitle>
          <p />          
          <PrimaryButton onClick={handleGoToFormMember} label="+ Novo Membro"> </PrimaryButton>
        </ContainerTitle>
        <ContainerDiv>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>Perfil</th>
                <th>Ações</th>                
              </tr>
            </thead>
            <tbody>
              {memberList && memberList.map((member: IMemberProps) => (
                <CardUser member={member} fetchMember={fetchMember} />
                ))}
            </tbody>
          </table>
        </ContainerDiv>
      </Content>
    </Container>
  );
}