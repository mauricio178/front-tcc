import React, {  useRef } from 'react'
import { Form } from '@unform/web'
import * as Yup from 'yup'
import { Container, Lbl, DivForm, Button } from './styled'
import Input from '../../components/input'
import { FormHandles } from '@unform/core'
import { Header } from '../../components/header'
import NavBar from '../../components/navbar'
import SelectInput from '../../components/select'
import { api } from '../../services/api'


interface IFormRefInterface extends FormHandles, React.MutableRefObject<null> {
  setErrors(error: any): void
}

export default function Cadastro() {

  const formRef = useRef<IFormRefInterface>({} as IFormRefInterface);

  async function handleSubmit(data: any) {
    try {
      const schema = Yup.object().shape({
        email: Yup.string().email("Precisa ser um e-mail válido!"),
        cargo: Yup.string().required("Digite um cargo Existente!"),
        cpf: Yup.number().min(11, "Número de CPF inválido").required(),
        departamento: Yup.string().required()
      });
      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        error.inner.forEach(() => {
          //
        })
      }

    }
    console.log(data);

    try {
      const response = await api.post("users/acess", data)
      console.log(response);
    } catch (error) {
      throw new Error(`Houve um erro ao Cadastrar, ${error.message}`);
    }

  }



  return (
    <>
      <Header />
      <NavBar />
      <Container>
        <Lbl>
          Cadastrar Usuário
          </Lbl>
        <DivForm>

          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input placeholder="E-mail" type="email" name="email" />
            <Input placeholder="CPF" type="string" name="cpf" />
            <Input placeholder="Cargo" type="string" name="cargo" />
            <Input placeholder="Departamento" type="string" name="departamento" />
            <SelectInput name="perfil" placeholder="Cargo">
              <option value="Developer">
                Developer
              </option>
              <option value="Manager">
                Manager 
              </option>
              <option value="PMO">
                PMO
              </option>
            </SelectInput>
            <Button type="submit">Save</Button>
          </Form>
        </DivForm>
      </Container>
    </>
  );
}