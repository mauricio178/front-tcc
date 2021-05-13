import React, { useRef } from 'react'
import { Form } from '@unform/web'
import * as Yup from 'yup'
import './App.css'
import { Title, InputText, Container, Button } from './components/styled/inputs'

const initialData = {
  email: 'mauricio@mauricio',
  address: {
    city: '',
  }
}


export default function App() {

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
    reset();

  }
}
  return (
    <Container className="App">
      <img src="./man.jpg" alt="imagem"></img>
      <Title>SIGN IN</Title>
      <Form ref={formRef} initialData={initialData} onSubmit={handleSubmit}>
      <InputText placeholder="Email" type="email" name="email"/>
      <InputText placeholder="Senha" type="password" name="password"/>

        <Button type="submit">Sign in</Button>
      </Form>
    </Container>
  );
  }