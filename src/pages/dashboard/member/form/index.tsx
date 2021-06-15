import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Container, ContainerForm, ContainerHeader, Button } from './styled'
import * as Yup from 'yup'
import { FormHandles } from '@unform/core'
import { useHistory } from 'react-router-dom';
import { api } from '../../../../services/api'
import { useLoader } from '../../../../hooks/LoaderProvider';
import Input from '../../../../components/input';
import { Form } from '@unform/web';
import { Select } from '../../../../components/select/styled';

interface IProfileProps{
  name: string;
  description: string;
}

interface IFormRefInterface extends FormHandles, React.MutableRefObject<null> {
  setErrors(error: any): void
}

interface IAxiosError {
  response: {
    data: {
      message: string
    }
  }
}


export default function FormMember(props: any) {

  const formRef = useRef<IFormRefInterface>({} as IFormRefInterface);

  const { toggleLoading } = useLoader()
  
  async function handleSubmit(data: any,) {
    try {
      const schema = Yup.object().shape({
        email: Yup.string().email().required(),
        name: Yup.string().required(),
        permission: Yup.string().required(),
      });
      
      await schema.validate(data, {
        abortEarly: false,
      });
      
      toggleLoading()
      
      api.post("/team", data)
      .then(res => {
        handleGoToDashboard()
      })
      .catch((err: IAxiosError) => {
        const { message } = err.response.data
        alert(message)
      }).finally(() => {
        toggleLoading()
      })
      
    } catch (err) {
      
      console.log(err.message)
      
      if (err instanceof Yup.ValidationError) {
        let errorMessages = {}
        
        err.inner.forEach(error => errorMessages = {
          ...errorMessages,
          [`${err.path}`]: err.message
        });
        formRef.current.setErrors(errorMessages);
      }
      console.log(data)
    }
  }
  
  const history = useHistory()

  const handleGoToDashboard = useCallback(() => {
    history.push('/dashboard')
  }, [history])  

  const [profileList, setProfileList] = useState ([]);

  async function fetchPerfil(){
   const { data } = await api.get('profile')
   setProfileList(data) 
   console.log(data)   
  }

  useEffect(() => {
    fetchPerfil()
  }, [])

  return (
    <Container>
      <ContainerHeader>
        <div>
        </div>
        <h2>Adicionar Novo Membro</h2>
      </ContainerHeader>

      <ContainerForm>
        <Form ref={formRef} onSubmit={handleSubmit}>

          <Input placeholder="E-mail" type="email" name="email" />
          <Input placeholder="Nome" type="text" name="name" />
          <label>Perfil</label>
          <Select>
            {profileList.map((profile: IProfileProps) => (
              <option value={profile.name}>{profile.description}</option>
            ))}
          </Select>
          <Button>Adicionar</Button>
        </Form>
      </ContainerForm>
    </Container>
  );
}
