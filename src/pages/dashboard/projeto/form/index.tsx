import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Container, DivButton, DivForm, Title } from './styled'
import * as Yup from 'yup'
import { FormHandles } from '@unform/core'
import { useHistory, useLocation } from 'react-router-dom';
import { api } from '../../../../services/api'
import { useLoader } from '../../../../hooks/LoaderProvider';
import Input from '../../../../components/input';
import Select from '../../../../components/select';
import { useFormModal } from '../../../../hooks/FormModalProvider';
import { useGlobalData } from '../../../../hooks/GlobalDataProvider';
import { Toast } from '../../../../hooks/AuthProvider';
import { SecondaryButton } from '../../../../components/SecondaryButton';

interface IMemberProps {
  name: string;
}

interface IFormRefInterface extends FormHandles, React.MutableRefObject<null> {
  setErrors(error: any): void
}

interface ILocation {
  project: {
    name: string,
    description: string;
    seller_id: string;
    post_seller_id: string;
    cost: string;
    prediction_start: string;
    prediction_end: string;

  }
}


interface IAxiosError {
  response: {
    data: {
      message: string
    }
  }
}


export default function FormProject(props: any) {

  const { handleReloadProjectList, handleReloadProfileList, profileList, memberList } = useGlobalData()
  const { data: formData, handleCloseModal } = useFormModal()

  const formRef = useRef<IFormRefInterface>({} as IFormRefInterface);
  const edit = !!formData

  const history = useHistory()


  const { toggleLoading } = useLoader()

  async function handleSubmit(data: any,) {
    try {
      const schema = Yup.object().shape({
        description: Yup.string().required('Email é um campo obrigatório'),
        name: Yup.string().required('Nome é um campo obrigatório'),
        seller_id: Yup.string().required('Vendedor Obrigatório'),
        post_seller_id: Yup.string(),
        cost: Yup.string().required('Custo obrigatório'),
        prediction_start: Yup.string().required('Digite a previsão de Inicio'),
        prediction_end: Yup.string().required('Digite a previsão de Fim'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      toggleLoading()

      if (edit) {
        api.put("project", data)
          .then(res => {
            console.log(res)
            Toast.fire({
              icon: 'success',
              title: `Projeto editado com sucesso`
            })
            handleReloadProjectList()
          })
          .catch((err: IAxiosError) => {
            const { message } = err.response.data
            alert(message)
          }).finally(() => {
            toggleLoading()
            handleCloseModal()

          })
      } else {
        api.post("project", data)
          .then(res => {
            console.log(res)
            handleReloadProjectList()
            Toast.fire({
              icon: 'success',
              title: `Projeto adicionado com sucesso`
            })
          })
          .catch((err: IAxiosError) => {
            const { message } = err.response.data
            alert(message)
          }).finally(() => {
            toggleLoading()
            handleCloseModal()
          })
      }

    } catch (error) {

      console.log(error.message)

      if (error instanceof Yup.ValidationError) {
        let errorMessages = {}

        error.inner.forEach(err => errorMessages = {
          ...errorMessages,
          [`${err.path}`]: err.message
        });

        formRef.current?.setErrors(errorMessages)
      }
      console.log(data)
    }
  }

  async function fetchPerfil() {
    handleReloadProfileList()
  }

  useEffect(() => {
    fetchPerfil()
  }, [])



  return (
    <Container ref={formRef} initialData={formData} onSubmit={handleSubmit}>
      <Title>
        <h2>Adicionar Novo Projeto</h2>
      </Title>
      <DivForm>
        <div>

          <Input placeholder="Nome do Projeto" type="text" name="name" />
          <Input placeholder="Previsão de Inicio" type="date" name="prediction_start" />
          <Input placeholder="Previsão de Fim" type="date" name="prediction_end" />
          <Input placeholder="Custo Estimado" type="text" name="cost" />
          </div>
          <div>
          <Select name="seller_id">
          <option value={``}>Gerente/Responsável</option>
            {memberList.map((member: IMemberProps) => (
              <option value={member.name}>{member.name}</option>
            ))}
          </Select>
          <Select name="post_seller_id">
          <option value={``}>Vendedor</option>
            {memberList.map((member: IMemberProps) => (
              <option value={member.name}>{member.name}</option>
            ))}
          </Select>
          <Input placeholder="Descrição" type="text" name="description" />
        </div>
      </DivForm>

      <DivButton>
        <SecondaryButton label="Adicionar" />
      </DivButton>
    </Container>
  );
}

