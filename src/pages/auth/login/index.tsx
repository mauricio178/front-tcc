import React, { useCallback, useEffect, useRef, useState, } from 'react'
import { Form } from '@unform/web'
import * as Yup from 'yup'
import { Button, Title, ContainerForm, Img } from './styled'
import Input from '../../../components/input'
import { FormHandles } from '@unform/core'
import { useHistory, useLocation } from 'react-router-dom';
import { AuthDefaultBackground } from '../../../components/auth/bg'
import { useAuth } from '../../../hooks/AuthProvider'



interface ILocation {
  email: string
}

interface IFormRefInterface extends FormHandles, React.MutableRefObject<null> {
  setErrors(error: any): void
}

export default function Login() {

  const [initialData, setInicialData] = useState({}) 

  const location = useLocation()

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
      handleGoToDashboard()
    } catch (error) {
    }


  }

  const handleGoToDashboard = useCallback(() => {
    history.push('/dashboard')
  }, [history])

  useEffect(() => {
    console.log()
    console.log(location)

    const { email } = location.state as ILocation

    setInicialData({email})
  }, [])



  return (
    <AuthDefaultBackground isLogin={true}>
      <Img><img src="./man.png" alt="imagem"/></Img>
    
      <ContainerForm>
        <Title>Sign In</Title>
        <Form ref={formRef} initialData={initialData} onSubmit={handleSubmit}>
          <Input placeholder="E-mail" type="email" name="email"/>
          <Input placeholder="Senha" type="password" name="password" />
          <Button type="submit">Log In</Button>
        </Form>
      </ContainerForm>
    </AuthDefaultBackground>
  ); 
}

