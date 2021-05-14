import React, { useRef } from 'react'
import { Form } from '@unform/web'
import * as Yup from 'yup'
import './App.css'
import { Button, Container, ContainerForm, Header, InputText, Title } from '../../../components/input/styled'

const initialData = {
  email: 'mauricio@mauricio',
  address: {
    city: '',
  }
}


export default function Login() {

  const formRef = useRef(null)

  async function handleSubmit(data, { reset }) {
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
            errorMessages[error.path] = error.message;
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
        <InputText placeholder="Email" type="email" name="email"/>
        <InputText placeholder="Senha" type="password" name="password"/>
        <Button type="submit">Entrar</Button>
        </Form>
      </ContainerForm>
    </Container>
  );
  }