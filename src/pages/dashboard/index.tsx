
import { Container, ContainerTitle, ContainerDiv } from './styled'
import { FiGrid, FiFolderPlus, FiSearch } from 'react-icons/fi'


export default function Dashboard(props: any) {

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
        <button>
          <FiFolderPlus size="16"></FiFolderPlus> Novo Projeto
        </button>
      </ContainerTitle>
      <ContainerDiv>
        <div>
          <div>
          </div>
          <div>
          </div>
          <div>
          </div>
          <div>
          </div>
          <div>
          </div>
        </div>
      </ContainerDiv>

    </Container>
  );
}