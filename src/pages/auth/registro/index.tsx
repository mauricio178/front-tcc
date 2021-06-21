import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Form } from '@unform/web'
import * as Yup from 'yup'
import { ContainerForm, Img } from './styled'
import Input from '../../../components/input'
import { FormHandles } from '@unform/core'
import { AuthDefaultBackground } from '../../../components/auth/bg'
import { useHistory, useLocation } from 'react-router-dom'
import { useLoader } from '../../../hooks/LoaderProvider'
import { api } from '../../../services/api'
import { SecondaryButton } from '../../../components/SecondaryButton'


interface IFormRefInterface extends FormHandles, React.MutableRefObject<null> {
  setErrors(error: any): void
}

interface ILocation {
  email: string
}

interface IAxiosError {
  response: {
    data: {
      message: string
    }
  }
}

export default function Registro(props: any) {
  
  const [initialData, setInicialData] = useState({}) 

  const location = useLocation()

  const { toggleLoading } = useLoader()

  const formRef = useRef<IFormRefInterface>({} as IFormRefInterface);

  async function handleSubmit(data: any, { reset }: any) {
    try {
      const schema = Yup.object().shape({
        email: Yup.string().email().required(),
        name: Yup.string().required(),
        acess_code: Yup.string().required(),
        password: Yup.string().required(),  
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      toggleLoading()

    api.post("users/register", data)
      .then(res => {
        handleGoToLogin(String(data.email))
      })
      .catch((err: IAxiosError) => {
        const { message } = err.response.data
        alert(message)  
      }).finally(() => {
        toggleLoading()
      })
      
    } catch (err) {

      console.log(err.message)

      if (err instanceof Yup.ValidationError) {
        let errorMessages = {}

        err.inner.forEach(error => errorMessages = {
          ...errorMessages,
          [`${err.path}`]: err.message
        });
        formRef.current.setErrors(errorMessages);
      }
      console.log(data)

    
    
    }
  }

  const history = useHistory()

  const handleGoToLogin = useCallback((email: string) => {
    history.push('/login', {email})
  }, [history])

  useEffect(() => {
    console.log(props)
    console.log(location)

    const { email } = location.state as ILocation

    setInicialData({email})
  }, [location, props])

  return (
    <AuthDefaultBackground>
        <Img><img src="./man.png" alt="imagem"></img></Img>
          <ContainerForm>
            <h2>Cadastro Pessoal</h2>
            <Form ref={formRef} initialData={initialData} onSubmit={handleSubmit}>
              <Input placeholder="E-mail" type="email" name="email" disabled/>
              <Input placeholder="Nome" type="text" name="name" />
              <Input placeholder="Senha" type="password" name="password" />
              <Input placeholder="Código de Acesso" type="text" name="acess_code" />
              <SecondaryButton type="submit" label="Entrar"/>
            </Form>
          </ContainerForm>
    </AuthDefaultBackground>
  );
  }