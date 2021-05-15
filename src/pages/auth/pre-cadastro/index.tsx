import React, { useRef } from 'react'
import { Form } from '@unform/web'
import * as Yup from 'yup'
import { Button, Container, ContainerForm, Header, Title } from './styled'
import Input from '../../../components/input'
import { FormHandles } from '@unform/core'

const initialData = {
  email: 'mauricio@mauricio',
  address: {
    city: '',
  }
}

interface IFormRefInterface extends FormHandles, React.MutableRefObject<null> {
  setErrors(error: any): void
}


export default function Login() {

  const formRef = useRef({} as IFormRefInterface);

  async function handleSubmit(data: any, { reset }: any) {
    try {
      const schema = Yup.object().shape({
        email: Yup.string().email().required(),
        senha: Yup.string().min(6).required(),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errorMessages = {
            email: 'Email Obrigatório!'
          };

          err.inner.forEach(error => {
            // errorMessages[(error: any).path] = error.message;
          })
          formRef.current.setErrors(errorMessages);
    }   
    console.log(data);
    reset();

  }
}
  return (
    <Container className="App">
      <Header>
        <img src="./man.png" alt="imagem"></img>
      </Header>
      <ContainerForm>
        <Form ref={formRef} initialData={initialData} onSubmit={handleSubmit}>
        <Title>Sign In</Title>
        <Input placeholder="Email" type="email" name="email"/>
        <Input placeholder="Senha" type="password" name="password"/>
        <Button type="submit">Entrar</Button>
        </Form>
      </ContainerForm>
    </Container>
  );
  }