
import { Container, ContainerTitle, ContainerDiv } from './styled'
import { FiMap, FiFolderPlus, FiSearch } from 'react-icons/fi'
import { CardProject } from '../../components/CardProject';
import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { TitleCard } from '../../components/TitleCardProject';


export default function Dashboard(props: any) {

  const history = useHistory()

  
  const handleGoToFormProject = useCallback(() => {
    history.push('/form-project')
  }, [history])

  return (
    <Container>
      <ContainerTitle>
        <h2><FiMap size="25"></FiMap> Projetos</h2>
        <div>
          <input placeholder="Search" />
          <button>
            <FiSearch size="15"></FiSearch>
          </button>
        </div>
        <button onClick={handleGoToFormProject}>
          <FiFolderPlus size="16"></FiFolderPlus>. Novo Projeto
        </button>
      </ContainerTitle>
      <ContainerDiv>
        <TitleCard/>
        <CardProject/>
        <CardProject/>
        <CardProject/>
        <CardProject/>
        <CardProject/>
        <CardProject/>
      </ContainerDiv>

    </Container>
  );
}