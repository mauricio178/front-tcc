import React, { useRef, } from 'react'
import { Form } from '@unform/web'
import * as Yup from 'yup'
import { BoxForm, Button, Container, ContainerForm, ContainerFormLeft, ContainerFormRigth, Legend, Title, Title2, FooterLegend } from './styled'
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
      <ContainerForm>
        <ContainerFormLeft>
          <Title2>
            Bem-Vindo!
          </Title2>
          <img src="./man.png" alt="imagem"></img>
          <Legend>
            <p>Gerencie seus projetos com facilidade, praticidade e eficiência!</p>
          </Legend>
          <FooterLegend>
            Copy Rigth ManagerG® Company - 2021
          </FooterLegend>
        </ContainerFormLeft>

        <ContainerFormRigth>
          <Title>Sign In</Title>
          <BoxForm>
            <Form ref={formRef} initialData={initialData} onSubmit={handleSubmit}>
              <Input placeholder="E-mail" type="email" name="email" />
              <Input placeholder="Senha" type="password" name="password" />
              <Button type="submit">Log In</Button>
            </Form>
          </BoxForm>
        </ContainerFormRigth>
      </ContainerForm>

    </Container>
  );
}