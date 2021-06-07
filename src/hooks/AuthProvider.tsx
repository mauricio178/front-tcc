import React, { useContext, createContext, useState, useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { api } from '../services/api';
import { useLoader } from './LoaderProvider';
import Swal from 'sweetalert2'



interface AuthContextData {
  login(data: ILoginDTO): void;
  logout(): boolean;
  data: IAuthState;
}

interface ILoginDTO{
  email: string;
  password: string;
}

interface IAuthState{
  token: string;
  user: {
    name: string;
    email: string;
  }
}

export const AuthProviderContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

const AuthProvider: React.FC = ({ children }) => {
  const history = useHistory()
  const { toggleLoading } = useLoader()
  const [ data, setData ] = useState<IAuthState>({} as IAuthState)

  useEffect(() => {
    const user = localStorage.getItem('@GP:user')
    const token = localStorage.getItem('@GP:token')

    if(user && token){
      setData({
        token,
        user: JSON.parse(user)
      })
    }
  },[children])

  const logout = useCallback(() => {

    Swal.fire({
      title: 'Deseja realmente sair da plataforma?',
      showCancelButton: true,
      confirmButtonText: `Sim`,
      confirmButtonColor: '#008080',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        
        localStorage.removeItem('@GP:user')
        localStorage.removeItem('@GP:token')

        setData({} as IAuthState)
        return true
      }
    })


    return false;
  },[data])

  const login = useCallback( async ({ email, password }: ILoginDTO) => {
    toggleLoading()

    try {
      const { data } = await api.post('users/login', {
        email,
        password
      })

      const { user, token } = data

      localStorage.setItem('@GP:user', JSON.stringify(user))
      localStorage.setItem('@GP:token', token)

      setData({
        token,
        user
      })
      Toast.fire({
        icon: 'success',
        title: `${email} autenticado com sucesso`
      })
      toggleLoading()
      
    } catch (error) {
      toggleLoading()
      console.log(error.message)
      throw new Error("Credenciais inválidas");
    }

  }, [history, toggleLoading]);

  return (
    <AuthProviderContext.Provider value={{ login, data, logout }}>
      {children}
    </AuthProviderContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthProviderContext);

  if (!context) {
    throw new Error('useAuth must be used with AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
