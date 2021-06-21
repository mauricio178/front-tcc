import { useCallback } from 'react';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import Swal from 'sweetalert2';
import { Toast } from '../../hooks/AuthProvider';
import { useFormModal } from '../../hooks/FormModalProvider';
import FormProject from '../../pages/dashboard/projeto/form';
import { api } from '../../services/api';
import { PrimaryButton } from '../PrimaryButton';

interface IProjectInterface {
  id: string;
  name: string;
  description: string;
  seller_id: string;
  post_seller_id: string;
  cost: string;
  prediction_start: string;
  prediction_end: string;
}

interface CardProjectProps {
  project: IProjectInterface;
  fetchProject(): void;
}

export const CardProject = ({ project, fetchProject }: CardProjectProps) => {
  const { handlesSetFormComponent } = useFormModal()

  const handleOpenModalEdit = useCallback(() => {
    handlesSetFormComponent(<FormProject />, project)
  }, [handlesSetFormComponent, project])

  const handleDeleteProject = useCallback(() => {
    Swal.fire({
      title: 'Deseja realmente Deletar o Projeto?',
      showCancelButton: true,
      confirmButtonText: `Sim`,
      confirmButtonColor: '#008080',
      cancelButtonText: 'Não'
    }).then(async (result: { isConfirmed: any; }) => {

      if (result.isConfirmed) {
        await api.delete(`project/${project.id}`)
        Toast.fire({
          icon: 'success',
          title: `Projeto Deletado com sucesso`
        })
        fetchProject()
      }
    })
  }, [fetchProject, project.id])

  return (
      <tr>
        <td>{project.name}</td>
        <td>{project.post_seller_id}</td>
        <td>{project.description}</td>
        <td>
          <PrimaryButton bg="#ffe420" onClick={handleOpenModalEdit} icon={<FiEdit color="#555" />} />
          &nbsp; &nbsp;
          <PrimaryButton bg="#ca2f2f" onClick={handleDeleteProject} icon={<FiTrash2 />} />
        </td>
      </tr>
  )

}

