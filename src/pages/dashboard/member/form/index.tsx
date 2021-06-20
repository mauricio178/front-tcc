import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Container, ContainerForm, Button } from './styled'
import * as Yup from 'yup'
import { FormHandles } from '@unform/core'
import { useHistory, useLocation } from 'react-router-dom';
import { api } from '../../../../services/api'
import { useLoader } from '../../../../hooks/LoaderProvider';
import Input from '../../../../components/input';
import { Form } from '@unform/web';
import Select from '../../../../components/select';
import { ContainerTitle } from '../../styled';
import { FiCornerDownLeft, FiPlus, FiUserPlus } from 'react-icons/fi';

interface IProfileProps {
  name: string;
  description: string;
}

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


export default function FormMember(props: any) {

  const formRef = useRef<IFormRefInterface>({} as IFormRefInterface);

  const history = useHistory()

  const [initialData, setInicialData] = useState({})

  const [edit, setEdit] = useState(false)


  useEffect(() => {
    if (location.state) {
      let { member } = location.state as ILocation
      setInicialData(member)
      setEdit(true)
    }
  }, [])


  const location = useLocation()

  const { toggleLoading } = useLoader()

  async function handleSubmit(data: any,) {
    try {
      const schema = Yup.object().shape({
        email: Yup.string().email().required(),
        name: Yup.string().required(),
        profile: Yup.string().required(),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      toggleLoading()

      if (edit) {
        api.put("/team", data)
          .then(res => {
            console.log(res)
            handleGoToListagem()
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
            handleGoToListagem()
          })
          .catch((err: IAxiosError) => {
            const { message } = err.response.data
            alert(message)
          }).finally(() => {
            toggleLoading()
          })
      }



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


  const handleGoToListagem = useCallback(() => {
    history.push('/listagem')
  }, [history])

  const [profileList, setProfileList] = useState([]);

  async function fetchPerfil() {
    const { data } = await api.get('profile')
    setProfileList(data)
    console.log(data)
  }

  useEffect(() => {
    fetchPerfil()
  }, [])



  return (
    <Container>
      <ContainerTitle>
        <h2><FiUserPlus/>  Adicionar Novo Membro</h2>
        <button onClick={handleGoToListagem}><FiCornerDownLeft size="16"></FiCornerDownLeft>Voltar</button>
      </ContainerTitle>

      <ContainerForm>
        <Form ref={formRef} initialData={initialData} onSubmit={handleSubmit}>
          <label>E-mail</label>
          <Input type="email" name="email" />
          <label>Nome Completo</label>
          <Input type="text" name="name" />
          <label>Perfil</label>
          <Select name="profile">
            {profileList.map((profile: IProfileProps) => (
              <option value={profile.name}>{profile.description}</option>
            ))}
          </Select>
          <Button><FiPlus size="16"/>  Adicionar</Button>
        </Form>
      </ContainerForm>
    </Container>
  );
}

