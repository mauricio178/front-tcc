import { useCallback } from 'react';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import Swal from 'sweetalert2';
import { Toast } from '../../hooks/AuthProvider';
import { useFormModal } from '../../hooks/FormModalProvider';
import { api } from '../../services/api';

import { FormMember } from '../form';
import { PrimaryButton } from '../PrimaryButton';
interface ImemberInterface {
  email: string;
  name: string;
  profile: string;
}

interface CardUserProps {
  member: ImemberInterface;
  fetchMember(): void;
}

export const CardUser = ({ member, fetchMember }: CardUserProps) => {
  const { handlesSetFormComponent } = useFormModal()

  const handleOpenModalEdit = useCallback(() => {
    handlesSetFormComponent(<FormMember />, member)
  }, [handlesSetFormComponent, member])

  const handleDeleteUser = useCallback(() => {
    Swal.fire({
      title: 'Deseja realmente Deletar o Usuário?',
      showCancelButton: true,
      confirmButtonText: `Sim`,
      confirmButtonColor: '#008080',
      cancelButtonText: 'Não'
    }).then(async (result: { isConfirmed: any; }) => {

      if (result.isConfirmed) {
        await api.delete(`team?email=${member.email}`)
        Toast.fire({
          icon: 'success',
          title: `Usuário Deletado com sucesso`
        })
        fetchMember()
      }
    })
  }, [])

  return (
    <tr>
      <td>{member.name}</td>
      <td>{member.email}</td>
      <td>{member.profile}</td>
      <td>
        <PrimaryButton bg="#ffe420" onClick={handleOpenModalEdit} icon={<FiEdit color="#555" />} />
        &nbsp; &nbsp;
        <PrimaryButton bg="#ca2f2f" onClick={handleDeleteUser} icon={<FiTrash2 />} />

      </td>
    </tr>
  )

}
