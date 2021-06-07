import React, { useCallback, useRef, } from 'react'
import { Form } from '@unform/web'
import * as Yup from 'yup'
import { Button, Title, ContainerForm, Img, Button2 } from './styled'
import Input from '../../../components/input'
import { FormHandles } from '@unform/core'
import { useHistory } from 'react-router-dom';
import { AuthDefaultBackground } from '../../../components/auth/bg'
import { api } from '../../../services/api'
import { useLoader } from '../../../hooks/LoaderProvider'
import { useAuth } from '../../../hooks/AuthProvider'

const initialData = {
  email: "mau.ricio4@hotmail.com",
  password: "12312342224"
}

interface IFormRefInterface extends FormHandles, React.MutableRefObject<null> {
  setErrors(error: any): void
}

export default function Login() {
  const history = useHistory()
  const { login } = useAuth()

  const formRef = useRef<IFormRefInterface>({} as IFormRefInterface);

  async function handleSubmit(data: any) {
    try {
      const schema = Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().required().min(8),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        let errorMessages = {}

        err.inner.forEach(error => errorMessages = {
          ...errorMessages,
          [`${err.path}`]: err.message
        });
        formRef.current.setErrors(errorMessages);
      }

    }

    try {      
      login(data)    
      handleGoToHome()
    } catch (error) {
    }


  }

  const handleGoToHome = useCallback(() => {
    history.push('/')
  }, [history])

  const handleGoToAcess = useCallback(() => {
    history.push('/acesso')
  }, [history])



  return (
    <AuthDefaultBackground isLogin={true}>
      <Img><img src="./man.png" alt="imagem"/></Img>
    
      <ContainerForm>
        <Title>Sign In</Title>
        <Form ref={formRef} initialData={initialData} onSubmit={handleSubmit}>
          <Input placeholder="E-mail" type="email" name="email"/>
          <Input placeholder="Senha" type="password" name="password" />
          <Button type="submit">Log In</Button>
          <Button2 type="button" onClick={handleGoToAcess}>Primeiro acesso</Button2>
        </Form>
      </ContainerForm>
    </AuthDefaultBackground>
  ); 
}

