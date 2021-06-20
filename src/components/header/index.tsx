import React, { useCallback, useRef, } from 'react'
import { Container } from './styled'
import { FiMenu, FiUser, FiLogOut } from 'react-icons/fi';
import { useAuth } from '../../hooks/AuthProvider'
import { useHistory } from 'react-router';
import { useRouter } from '../../hooks/RouterProvider';

interface IHeader {
  setRenderAside(data: any): void
}

export const Header = ({ setRenderAside }: IHeader) => {
  const history = useHistory()
  const { headerTitle } = useRouter()

  const { data: { user }, logout } = useAuth()

  const handleLogout = useCallback(() => {
    const confirmLogout = logout()
    if (confirmLogout) {
      setTimeout(() => {
        history.push('/login')
      },200)
    }
  }, [])

  const handleToggleAside = useCallback(() => {
    setRenderAside((prevData: boolean) => !prevData)
  }, [setRenderAside])

  return (
    <Container>
      <div>
        {/* <button type='button' onClick={handleToggleAside} >
          <FiMenu size={16} />
        </button>         */}
        <h2>{headerTitle}</h2>
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
