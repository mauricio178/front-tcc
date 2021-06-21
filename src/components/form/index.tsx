import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Container } from './styled'
import * as Yup from 'yup'
import { FormHandles } from '@unform/core'
import { useHistory } from 'react-router-dom';
import { api } from '../../services/api'
import { useLoader } from '../../hooks/LoaderProvider';
import Input from '../input';

import Select from '../select';
import { SecondaryButton } from '../SecondaryButton';
import { useFormModal } from '../../hooks/FormModalProvider';
import { useGlobalData } from '../../hooks/GlobalDataProvider';
import { Toast } from '../../hooks/AuthProvider';

interface IFormRefInterface extends FormHandles, React.MutableRefObject<null> {
  setErrors(error: any): void
}

interface ILocation {
  member: {
    email: string,
    name: string;
    profile: string; 
  }
}


interface IAxiosError {
  response: {
    data: {
      message: string
    }
  }
}


export function FormMember(props: any) {
  const { handleReloadMemberList, handleReloadProfileList, profileList } = useGlobalData()
  const { data: formData, handleCloseModal } = useFormModal()

  const formRef = useRef<IFormRefInterface>({} as IFormRefInterface);
  const edit = !!formData

  const history = useHistory()


  const { toggleLoading } = useLoader()

  async function handleSubmit(data: any,) {
    try {
      const schema = Yup.object().shape({        
        email: Yup.string().email('Email inválido').required('Email é um campo obrigatório'),
        name: Yup.string().required('Nome é um campo obrigatório'),
        profile: Yup.string().required('Perfil é um campo obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      toggleLoading()

      if (edit) {
        api.put("/team", data)
          .then(res => {
            console.log(res)
            Toast.fire({
              icon: 'success',
              title: `Usuário editado com sucesso`
            })
            handleReloadMemberList()
            handleCloseModal()
          })
          .catch((err: IAxiosError) => {
            const { message } = err.response.data
            alert(message)
          }).finally(() => {
            toggleLoading()

          })
      } else {
        api.post("/team", data)
          .then(res => {
            console.log(res)
            handleReloadMemberList()
            Toast.fire({
              icon: 'success',
              title: `Usuário adicionado com sucesso`
            })
            handleCloseModal()
          })
          .catch((err: IAxiosError) => {
            const { message } = err.response.data
            alert(message)
          }).finally(() => {
            toggleLoading()
          })
      }

    } catch (error) {

      console.log(error.message)

      if(error instanceof Yup.ValidationError){
        let errorMessages = {}

        error.inner.forEach(err => errorMessages = {
          ...errorMessages,
          [`${err.path}`] : err.message
        });

        formRef.current?.setErrors(errorMessages)
      }
      console.log(data)
    }
  }

  useEffect(() => {
    handleReloadProfileList()
  }, [])

  return (
    <Container ref={formRef} initialData={formData} onSubmit={handleSubmit}>
        
        <h2>{formData ? 'Editar membro' : 'Adicionar membro'}</h2>

        <Input placeholder="E-mail" type="email" name="email" />
        <Input placeholder="Nome" type="text" name="name" />
        {profileList.length && 
          <Select name="profile" >
            <option value={``}>SELECIONE UM PERFIL</option>
            {profileList.map(profile => (
              <option value={profile.name}>{profile.description}</option>
            ))}
          </Select>
        }

        <SecondaryButton label="Adicionar" />

    </Container>
  );
}

