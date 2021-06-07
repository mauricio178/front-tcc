import React, { useCallback, useRef, } from 'react'
import { Container } from './styled'
import { FiMenu, FiUser, FiLogOut } from 'react-icons/fi';
import { useAuth } from '../../hooks/AuthProvider'
import { useHistory } from 'react-router';

interface IHeader{
  setRenderAside(data: any): void
}

export const Header = ({ setRenderAside }: IHeader) => {
  const history = useHistory()
  const { data: { user }, logout } = useAuth()

  const handleLogout = useCallback(() => {
    const confirmLogout =  logout()
    if(confirmLogout){
      history.push('/login')
    }
  }, [])

  const handleToggleAside = useCallback(() => {
    setRenderAside((prevData: boolean) => !prevData)    
  }, [])

  return (
    <Container>
      <div>
        <button type='button' onClick={handleToggleAside} >
          <FiMenu size={16} />
        </button>
      </div>
      <div>
        <FiUser size={18} /> Bem vindo(a), {user.name} 
        <button type="button" onClick={handleLogout}>
          <FiLogOut size={16} />
        </button>
      </div>
    </Container>
  )
}
