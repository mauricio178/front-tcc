import { FiUserPlus, FiUsers, FiSearch } from 'react-icons/fi';
import { useCallback, useEffect, useState } from 'react'
import { Container, ContainerTitle, ContainerDiv } from './styled'
import { CardUser } from '../../../../components/CardUser'
import { useHistory } from 'react-router-dom';
import { api } from '../../../../services/api';


interface IMemberProps {
  email: string;
  name: string;
  profile: string;
}




export default function Listagem(props: any) {

  const [memberList, setMemberList] = useState([]);

  async function fetchMember() {
    const { data } = await api.get('team')

    setMemberList(data)
    console.log(data)
  }
  useEffect(() => {
    fetchMember()
  }, [])

  const history = useHistory()

  const handleGoToFormMember = useCallback(() => {
    history.push('/form-member')
  }, [history])

  return (

    <Container>
      <ContainerTitle>
        <h2><FiUsers size="25"></FiUsers>  Usuários / Equipe</h2>
        <div>
          <input placeholder="Search User / Team" />
          <button>
            <FiSearch size="15"></FiSearch>
          </button>
        </div>
        <button onClick={handleGoToFormMember}><FiUserPlus size={16} />  Novo Membro</button>
      </ContainerTitle>
      <ContainerDiv>
          {memberList.map((member: IMemberProps) => (
            <CardUser member={member} fetchMember={fetchMember} />
          ))}
      </ContainerDiv>
    </Container>
  );
}