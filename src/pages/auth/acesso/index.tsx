import React, { useCallback, useRef } from 'react'
import { Form } from '@unform/web'
import * as Yup from 'yup'
import { Button, ContainerForm, Title, Img } from './styled'
import Input from '../../../components/input'
import { FormHandles } from '@unform/core'
import { AuthDefaultBackground } from '../../../components/auth/bg'
import { useHistory } from 'react-router-dom'
import { api } from '../../../services/api'
import { useLoader } from '../../../hooks/LoaderProvider'


const initialData = {
  email: 'mauricio@dev',
  address: {
    city: '',
  }
}

interface IFormRefInterface extends FormHandles, React.MutableRefObject<null> {
  setErrors(error: any): void
}



interface IAxiosError {
  response: {
    data: {
      message: string
    }
  }
}

export default function FirstAcess() {

  const { toggleLoading } = useLoader()

  const formRef = useRef<IFormRefInterface>({} as IFormRefInterface);

  const history = useHistory()

  const handleGoToLogin = useCallback(() => {
    history.push('/login')
  }, [history])

  const handleGoToRegister = useCallback((email: string) => {
    history.push('/registro', {email})
  }, [history])

  async function handleSubmit(data: any, { reset }: any) {
    try {
      const schema = Yup.object().shape({
        email: Yup.string().email().required(),
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

    toggleLoading()

    api.post("users/access", data)
      .then(res => {
        handleGoToLogin()
      })
      .catch((err: IAxiosError) => {
        const { message } = err.response.data
        console.log(message)
        // eslint-disable-next-line eqeqeq
        if (message == "Usuário não cadastrado, complete teu registro para continuar!") {
          alert(`${message}, verifique seu email com seu código de acesso.`)
          handleGoToRegister(String(data.email))

        } else {
          alert(message)
          reset()

        }
      }).finally(() => {
        toggleLoading()
      })


  }


  return (
    <AuthDefaultBackground>
      <Img><img src="./man.png" alt="imagem"></img></Img>
      <ContainerForm>
        <Title>Primeiro Acesso</Title>
        <Form ref={formRef} initialData={initialData} onSubmit={handleSubmit}>
          <Input placeholder="E-mail" type="email" name="email" />

          <Button type="submit">Entrar
              </Button>
        </Form>
      </ContainerForm>

    </AuthDefaultBackground>
  );
}