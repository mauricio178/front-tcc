import { useCallback, } from 'react'
import { Container } from './styled'
import { FiUser, FiLogOut } from 'react-icons/fi';
import { useAuth } from '../../hooks/AuthProvider'
import { useHistory } from 'react-router';
import { useRouter } from '../../hooks/RouterProvider';
import Swal from 'sweetalert2';

interface IHeader {
  setRenderAside(data: any): void
}

export const Header = ({ setRenderAside }: IHeader) => {
  const history = useHistory()
  const { headerTitle } = useRouter()
  const { data: { user }, clearUserData } = useAuth()

  const handleLogout = useCallback(() => {
    Swal.fire({
      title: 'Deseja realmente sair da plataforma?',
      showCancelButton: true,
      confirmButtonText: `Sim`,
      confirmButtonColor: '#008080',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {        
        history.push('/')
        clearUserData()
      }
    })
  }, [])

  // TODO, Rever Aside
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
