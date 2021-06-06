import * as React from 'react'
import { MenuBar, Titlle, Button, Nav } from './styled'
import Link, { useHistory } from 'react-router-dom'

function NavBar() {

  const history = useHistory()

  const handleGoToRegister = React.useCallback(() => {
    history.push('/cadastro')
  }, [history])

  const handleGoToListagem = React.useCallback(() => {
    history.push('/listagem')
  }, [history])

  const handleGoToPrincipal = React.useCallback(() => { 
    history.push('/principal')
  }, [history])

  const handleGoToRepositorio = React.useCallback(() => {
    history.push('/repositorio')
  }, [history])

  return (
    <MenuBar>
      <Nav>
        <Titlle> Menu </Titlle>
        <Button type="button" onClick={handleGoToPrincipal}>
          Home
        </Button>
        <Button type="button" onClick={handleGoToRegister}>
          Cadastro
        </Button>
        <Button type="button" onClick={handleGoToListagem}>
          Listagem
        </Button>
        <Button type="button" onClick={handleGoToRepositorio}>
          Repositório
        </Button>
        

      </Nav>
    </MenuBar>);

}

export default NavBar