import React, { useCallback, useEffect, useRef, useState, } from 'react'
import { Form } from '@unform/web'
import * as Yup from 'yup'
import { ContainerForm, Img } from './styled'
import Input from '../../../components/input'
import { FormHandles } from '@unform/core'
import { useHistory, useLocation } from 'react-router-dom';
import { AuthDefaultBackground } from '../../../components/auth/bg'
import { api } from '../../../services/api'
import { useLoader } from '../../../hooks/LoaderProvider'
import { useAuth } from '../../../hooks/AuthProvider'
import { SecondaryButton } from '../../../components/SecondaryButton'



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
    history.push('/')
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
        <h2>Sign In</h2>
        <Form ref={formRef} initialData={initialData} onSubmit={handleSubmit}>
          <Input placeholder="E-mail" type="email" name="email"/>
          <Input placeholder="Senha" type="password" name="password" />
          <SecondaryButton type="submit" label="Entrar"/>
        </Form>
      </ContainerForm>
    </AuthDefaultBackground>
  ); 
}

