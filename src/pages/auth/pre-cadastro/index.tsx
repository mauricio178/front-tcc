import React, { useRef } from 'react'
import { Form } from '@unform/web'
import * as Yup from 'yup'
import { Button, Container, ContainerForms, ContainerForm, ContainerFormLeft, ContainerFormRigth, Legend, Title, Title2, Img, Button2, Lbl } from './styled'
import Input from '../../../components/input'
import { FormHandles } from '@unform/core'
import { Link } from 'react-router-dom';

const initialData = {
  email: 'mauricio@mauricio',
  address: {
    city: '',
  }
}

interface IFormRefInterface extends FormHandles, React.MutableRefObject<null> {
  setErrors(error: any): void
}

export default function Register() {

  const formRef = useRef<IFormRefInterface>({} as IFormRefInterface);

  async function handleSubmit(data: any, { reset }: any) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string(),
        email: Yup.string().email().required(),
        password: Yup.string().min(6).required(),
        passwordConfirm: Yup.string().min(6).required(),
        userName: Yup.string().min(6).required(),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errorMessages = {
            email: 'Email Obrigatório!',
            name: 'Nome Obrigatório',
            userName: 'O nome de Usuário é Obrigratório',
            password: 'Senha Obrigatória',
            passwordConfirm: 'As senhas têm de ser iguais',
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

      <ContainerForms>

        <ContainerFormLeft >
        <Img><img src="./man.png" alt="imagem"></img></Img>
          <ContainerForm>
            <Title>Pré-Cadastrado</Title>
            <Form ref={formRef} initialData={initialData} onSubmit={handleSubmit}>
              <Input placeholder="E-mail" type="email" name="email" />
              <Input placeholder="Nome Completo" type="string" name="name" />
              <Input placeholder="Nome de Usuário" type="string" name="nameUser"/>
              <Input placeholder="Senha" type="password" name="password" />
              <Input placeholder="Confirme sua Senha" type="password" name="passwordConfirm" />
              <Button type="submit">Registrar</Button>
              <Lbl>
              <Link to="/">Já tenho uma Conta!</Link>
              </Lbl>
            </Form>
          </ContainerForm>
        </ContainerFormLeft>

        <ContainerFormRigth background-image="./img1-login.png">
        <Title2>
            Bem-Vindo ao Manager!
          </Title2>
          <Legend>
            <p>___________________________________________________</p>
            <p>Assuma o controle de seus projetos, organizando tarefas e gerenciando recursos.</p>
            <p>Pensado principalmente para empresas que procuram uma maneira simples de gerenciar seus
            projetos baseado nas premissas do PMBOK (6ª Ed.)
            </p>
            <p>___________________________________________________</p>
          </Legend>
          <Button2 type="submit">
            Ler Mais...
          </Button2>     
        </ContainerFormRigth>

      </ContainerForms>
    </Container>
  );
  }