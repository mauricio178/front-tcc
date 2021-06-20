import { FiUserPlus, FiUsers, FiSearch } from 'react-icons/fi';
import { useCallback, useEffect, useState } from 'react'
import { Container, ContainerTitle, ContainerDiv, Content } from './styled'
import { CardUser } from '../../../../components/CardUser'
import { useHistory } from 'react-router-dom';
import { api } from '../../../../services/api';
import { useRouter } from '../../../../hooks/RouterProvider';
import { PrimaryButton } from '../../../../components/PrimaryButton';
import { useFormMember } from '../../../../hooks/FormMemberProvider';

interface IMemberProps {
  email: string;
  name: string;
  profile: string;
}

export default function Listagem(props: any) {
  const { handleOpenModal } = useFormMember()
  const { handleSetHeaderTitle } = useRouter()
  const [memberList, setMemberList] = useState([]);

  async function fetchMember() {
    const { data } = await api.get('team')

    setMemberList(data)
    console.log(data)
  }
  useEffect(() => {
    fetchMember()
    handleSetHeaderTitle('Equipe')
  }, [])

  const history = useHistory()

  const handleGoToFormMember = useCallback(() => {
    // history.push('/form-member')
  }, [history])

  return (
    <Container>
      <Content>

        <ContainerTitle>
          <p />          
          <PrimaryButton onClick={handleOpenModal} label="+ Novo Membro"> </PrimaryButton>
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
              {memberList.map((member: IMemberProps) => (
                <CardUser member={member} fetchMember={fetchMember} />
                ))}
            </tbody>
          </table>
        </ContainerDiv>
      </Content>
    </Container>
  );
}