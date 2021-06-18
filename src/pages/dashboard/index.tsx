
import { Container, ContainerTitle, ContainerDiv } from './styled'
import { FiGrid, FiFolderPlus, FiSearch } from 'react-icons/fi'
import { CardProject } from '../../components/CardProject';
import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';


export default function Dashboard(props: any) {

  const history = useHistory()

  
  const handleGoToFormProject = useCallback(() => {
    history.push('/form-project')
  }, [history])

  return (
    <Container>
      <ContainerTitle>
        <h2><FiGrid size="25"></FiGrid>  DashBoard</h2>
        <div>
          <input placeholder="Search" />
          <button>
            <FiSearch size="15"></FiSearch>
          </button>
        </div>
        <button onClick={handleGoToFormProject}>
          <FiFolderPlus size="16"></FiFolderPlus> Novo Projeto
        </button>
      </ContainerTitle>
      <ContainerDiv>
        <CardProject/>
      </ContainerDiv>

    </Container>
  );
}