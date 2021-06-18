import React from 'react';
import { FiEdit, FiMoreHorizontal, FiTrash2, FiUser } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Toast } from '../../hooks/AuthProvider';
import { useLoader } from '../../hooks/LoaderProvider';
import { api } from '../../services/api';
import { Container, DivControls, DivIcon, DivEmail, DivName, DivProfile } from './styled'

export const CardUser = ({ member, fetchMember }: any) => {

  const history = useHistory()

  const handleGoToEditUser = React.useCallback((member: any) => {
    history.push('./form-member', { member })
  }, [ history])

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
        Toast.fire({
          icon: 'success',
          title: `Usuário Deletado com sucesso`
        })
        fetchMember()

      }
    })
  }, [])


  return (
    <Container>
      <DivIcon>
        <FiUser size="20"></FiUser>
      </DivIcon>
      <DivName>
        <label>{member.name}</label>
      </DivName>
      <DivEmail>
        <label>{member.email}</label>
      </DivEmail>
      <DivProfile>
        <label>{member.profile}</label>
      </DivProfile>
      <DivControls>
        <button onClick={() => handleGoToEditUser(member)}><FiEdit size="16"></FiEdit></button>
        <button onClick={() => handleGoToDeleteUser(member.email)}><FiTrash2 size="16"></FiTrash2></button>
        <button><FiMoreHorizontal size="16"></FiMoreHorizontal></button>
      </DivControls>

    </Container>
  )
}
