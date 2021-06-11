import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Container, ContainerForm, ContainerHeader, Button } from './styled'
import * as Yup from 'yup'
import { FormHandles } from '@unform/core'
import { useHistory } from 'react-router-dom';
import { api } from '../../../../services/api'
import { useLoader } from '../../../../hooks/LoaderProvider';
import Input from '../../../../components/input';
import { Form } from '@unform/web';


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


export default function FormMember(props: any) {

  const formRef = useRef<IFormRefInterface>({} as IFormRefInterface);

  const { toggleLoading } = useLoader()

  async function handleSubmit(data: any,) {
    try {
      const schema = Yup.object().shape({
        email: Yup.string().email().required(),
        name: Yup.string().required(),
        permission: Yup.string().required(),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      toggleLoading()

      api.post("/team", data)
        .then(res => {
          handleGoToDashboard()
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

  const handleGoToDashboard = useCallback(() => {
    history.push('/dashboard')
  }, [history])

  return (
    <Container>
      <ContainerHeader>
        <div>

        </div>
        <h2>Adicionar Novo Membro</h2>
      </ContainerHeader>
      
      <ContainerForm>
        <Form ref={formRef} onSubmit={handleSubmit}>
          
          <Input placeholder="E-mail" type="email" name="email" />
          <Input placeholder="Nome" type="text" name="name" />
          <Input placeholder="Nível de Permissão" type="text" name="permission" />
          <Button>Adicionar</Button>
        </Form>
      </ContainerForm>
    </Container>
  );
}

