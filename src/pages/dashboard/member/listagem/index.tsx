import { FiUserPlus } from 'react-icons/fi';
import { useCallback, useEffect, useState } from 'react'
import { Container, ContainerTitle } from './styled'
import { useHistory } from 'react-router-dom';
import { api } from '../../../../services/api';

interface IMemberProps{
  email: string;
  profile: string;
}


export default function Listagem(props: any) {

  const history = useHistory()

  const handleGoToFormMember = useCallback(() => {
    history.push('/form-member')
  }, [history])

  const [memberList, setMemberList] = useState([]);

  async function fetchMember() {
    const { data } = await api.get('team')
    setMemberList(data)
    console.log(data)
  }
  useEffect(() => {
    fetchMember()
  }, [])

  return (
    <Container>
      <ContainerTitle>
        <h2>Lista de Usuários / Equipe</h2>
        <div>
          <button onClick={handleGoToFormMember}><FiUserPlus size={16} />Adicionar Novo Usuário</button>
        </div>
      </ContainerTitle>
      <div>
      {memberList.map((member: IMemberProps) => (
        <label>{member.email}
        {member.profile}</label>
      ))}
      </div>
    </Container>
  );
}