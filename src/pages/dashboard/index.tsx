import { FiUserPlus, FiUsers, FiSearch } from 'react-icons/fi';
import { useCallback, useEffect, useState } from 'react'
import { Container, ContainerTitle, ContainerDiv } from './styled'
import { useHistory } from 'react-router-dom';
import { api } from '../../services/api';
import { useRouter } from '../../hooks/RouterProvider';
import { PrimaryButton } from '../../components/PrimaryButton';
import { useFormModal } from '../../hooks/FormModalProvider';
import { useGlobalData } from '../../hooks/GlobalDataProvider';
import FormProject, {  } from './projeto/form';
import { Content } from './member/listagem/styled';
import { CardProject } from '../../components/CardProject';

interface IProjectProps {
    name: string;
    description: string;
    seller_id: string;
    post_seller_id: string;
    cost: string;
    prediction_start: string;
    prediction_end: string;
}

export default function Projects(props: any) {
  const { handleOpenModal, handlesSetFormComponent } = useFormModal()
  const { handleReloadProjectList, projectList }: any = useGlobalData()
  const { handleSetHeaderTitle } = useRouter()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function fetchProject() {
    handleReloadProjectList()
  }

  useEffect(() => {
    fetchProject()
    handleSetHeaderTitle('Projetos')
  }, [fetchProject, handleSetHeaderTitle])

  const history = useHistory()

  const handleGoToFormProject = useCallback(() => {
    handlesSetFormComponent(<FormProject />)
  }, [history])

  return (
    <Container>
      <Content>

        <ContainerTitle>
          <p />          
          <PrimaryButton onClick={handleGoToFormProject} label="+ Novo Projeto"> </PrimaryButton>
        </ContainerTitle>
        <ContainerDiv>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Vendedor</th>
                <th>Gerente</th>
                <th>Custo</th>
                <th>Previsão Inicio</th>
                <th>Previsão Fim</th>
                <th>Descrição</th>
              </tr>
            </thead>
            <tbody>
              {projectList && projectList.map((project: IProjectProps) => (
                <CardProject project={project} fetchProject={fetchProject} />
                ))}
            </tbody>
          </table>
        </ContainerDiv>
      </Content>
    </Container>
  );
}