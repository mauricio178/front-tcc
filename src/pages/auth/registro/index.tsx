import React, { useCallback, useRef } from 'react'
import { Form } from '@unform/web'
import * as Yup from 'yup'
import { Button, ContainerForm, ContainerFormLeft, Title, Img, InputSelect } from './styled'
import Input from '../../../components/input'
import { FormHandles } from '@unform/core'
import { AuthDefaultBackground } from '../../../components/auth/bg'
import { useHistory } from 'react-router-dom'



const initialData = {
  email: 'mauricio@dev',
  address: {
    city: '',
  }
}

interface IFormRefInterface extends FormHandles, React.MutableRefObject<null> {
  setErrors(error: any): void
}

export default function Registro() {

  const formRef = useRef<IFormRefInterface>({} as IFormRefInterface);

  async function handleSubmit(data: any, { reset }: any) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().min(10).required(),
        phone: Yup.string().min(9).max(11).required(),
        cpf: Yup.string().min(11).required(),
        birth: Yup.date().required(),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errorMessages = {
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

  const history = useHistory()

  const handleGoToPrincipalUser = useCallback(() => {
    history.push('../principal copy')
  }, [history])

  return (
    <AuthDefaultBackground>

        <ContainerFormLeft >
        <Img><img src="./man.png" alt="imagem"></img></Img>
          <ContainerForm>
            <Title>Cadastro Pessoal</Title>
            <Form ref={formRef} initialData={initialData} onSubmit={handleSubmit}>
              <Input placeholder="Nome" type="text" name="name" />
              <Input 
                type="tel" 
                id="phone" 
                name="phone" 
                placeholder="Telefone" 
                pattern="[0-9]{2}[0-9]{5}[0-9]{4}" />
              <Input placeholder="CPF" type="number" name="cpf" />
              <InputSelect placeholder="Data de Nascimento" type="date" name="birth"></InputSelect>
              <Button type="submit" onClick={handleGoToPrincipalUser}> Enviar </Button>
              
            </Form>
          </ContainerForm>
        </ContainerFormLeft>

    </AuthDefaultBackground>
  );
  }