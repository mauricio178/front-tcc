import React, { useCallback, useRef, } from 'react'
import { Container, NavRight, NavLeft, NavCenter, Nav, Lbl, Button, Lbl2} from './styled'
import Menu from '../navbar'
import { useHistory } from 'react-router-dom'
import NavBar from '../navbar'

interface HeaderInterface{
  children: React.ReactNode;
  titlePage: string;
  
}


export const Header = () => {

  const history = useHistory()

  const handleLogOut = useCallback(() => {
    history.push('/')
  }, [history])

  return (
    <Container>
      <Nav>
        <NavLeft>
          <Lbl>Manager G</Lbl>
        </NavLeft>

        <NavCenter>
         <Lbl2>AQUI</Lbl2>
        </NavCenter>
  
        <NavRight>
          <Button onClick={handleLogOut}>Log Out</Button>
        </NavRight>
      </Nav>
    </Container>
  )
}
