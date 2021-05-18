import React, { useRef, } from 'react'
import { Form } from '@unform/web'
import * as Yup from 'yup'
import { Button, Container, Title, ContainerForms, ContainerForm, ContainerFormLeft, ContainerFormRigth, Legend, Title2, Button2, Img, Lbl } from './styled'
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

export default function Login() {

  const formRef = useRef<IFormRefInterface>({} as IFormRefInterface);

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
        const errorMessages = [] as string[];

        err.inner.forEach(error => {
          errorMessages.push(error.message);
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
            <Title>Sign In</Title>
            <Form ref={formRef} initialData={initialData} onSubmit={handleSubmit}>
              <Input placeholder="E-mail" type="email" name="email"/>
              <Input placeholder="Senha" type="password" name="password" />
              <Button type="submit">Log In</Button>
            </Form>
            <Lbl>
            <p>Não é registrado?
               <Link to="/cadastro">Cadastre-se</Link></p>
               <Link to="/pre-cadastro">Estou Pré-Cadastrado</Link>
            </Lbl>
            
          </ContainerForm>
        </ContainerFormLeft>

        <ContainerFormRigth background-image="./img1-login.png">
        <Title2>
            Bem-Vindo ao <strong>Manager!</strong>
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