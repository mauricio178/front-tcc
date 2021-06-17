import { FiUserPlus, FiUsers, FiSearch, FiUser, FiMoreHorizontal, FiEdit, FiTrash2 } from 'react-icons/fi';
import { useCallback, useEffect, useState } from 'react'
import { Container, ContainerTitle, ContainerDiv, DivIcon, DivEmail, DivProfile, DivControls, CardUser } from './styled'
import { useHistory } from 'react-router-dom';
import { api } from '../../../../services/api';
import { DivUser } from '../../../../components/divUser';
import React from 'react';
import Swal from 'sweetalert2';

interface IMemberProps {
  email: string;
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

  const handleGoToEditUser = React.useCallback((email: string) => {
    history.push('./form-member', {email})
  }, [history])

  const handleGoToDeleteUser = React.useCallback((email: string) => {
    Swal.fire({
      title: 'Deseja realmente Deletar o Usuário?',
      showCancelButton: true,
      confirmButtonText: `Sim`,
      confirmButtonColor: '#008080',
      cancelButtonText: 'Não'
    }).then(async (result: { isConfirmed: any; }) => {
      if (result.isConfirmed) {
        await api.delete(`team?email=${email}`)
        fetchMember()
      }
    })
  }, [])

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
        <CardUser>
          <DivIcon>
            <FiUser size="20"></FiUser>
          </DivIcon>
          {memberList.map((member: IMemberProps) => (
            <>
              <DivEmail>
                <label>{member.email}</label>
              </DivEmail>
              <DivProfile>
                <label>{member.profile}</label>
              </DivProfile>
              <DivControls>
                <button><FiMoreHorizontal size="16"></FiMoreHorizontal></button>
                <button onClick={() => handleGoToDeleteUser(member.email)}><FiTrash2 size="16"></FiTrash2></button>
                <button onClick={() => handleGoToEditUser(member.email)}><FiEdit size="16"></FiEdit></button>
              </DivControls>
            </>
          ))}
        </CardUser>
      </ContainerDiv>
    </Container>
  );
}