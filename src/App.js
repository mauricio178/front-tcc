import React, { useRef } from 'react'
import { Form } from '@unform/web'
import { Scope } from '@unform/core'
import './App.css'

// IMPORTAR YUP E DEFINIR OS SCHEEMAS <<< 

import Input from './components/input';

const initialData = {
  email: 'mauricio@mauricio',
  address: {
    city: '',
  }
}


export default function SignIn() {

  const formRef = useRef(null)

  function handleSubmit(data, { reset }) {
    if (data.email === "")
    formRef.current.setFieldError('email', 'Email Obrigatório')
    // { email: 'test@example.com', password: '123456' }
    reset();
  }
  return (
    <div className="App">
      <h1>SIGN IN</h1>
      <Form ref={formRef} initialData={initialData} onSubmit={handleSubmit}>
      <Input placeholder="Email" type="email" name="email"/>

      <Scope path="address"/>
        <Input placeholder="Quadra" name="street"/>
        <Input placeholder="Cidade" name="city"/>
        <Input placeholder="Estado" name="state"/>
        <Input placeholder="Número da Casa" name="number"/>

        <button type="submit">Sign in</button>
      </Form>
    </div>
  );
}