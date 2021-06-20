import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Container } from './styled'
import * as Yup from 'yup'
import { FormHandles } from '@unform/core'
import { useHistory } from 'react-router-dom';
import { api } from '../../../../services/api'
import { useLoader } from '../../../../hooks/LoaderProvider';
import Input from '../../../../components/input';

import Select from '../../../../components/select';
import { SecondaryButton } from '../../../../components/SecondaryButton';
import { useFormMember } from '../../../../hooks/FormMemberProvider';


interface IProfileProps {
  name: string;
  description: string;
}

interface IMemberInterface {
  email: string;
  name: string;
  profile: string;
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


export function FormMember(props: any) {
  const { handleOpenModal } = useFormMember()
  const formRef = useRef<IFormRefInterface>({} as IFormRefInterface);

  const history = useHistory()

  const [edit, setEdit] = useState(false)


  // useEffect(() => {
  //   if (location.state) {
  //     let { member } = location.state as ILocation
  //     setInicialData(member)
  //     setEdit(true)
  //   }
  // }, [])


  // const location = useLocation()

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

    } catch (error) {

      console.log(error.message)

      // if (err instanceof Yup.ValidationError) {
      //   let errorMessages = {}

      //   err.inner.forEach(error => errorMessages = {
      //     ...errorMessages,
      //     [`${err.path}`]: err.message
      //   });
      //   formRef.current.setErrors(errorMessages);
      // }

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
    <Container ref={formRef} initialData={props.data} onSubmit={handleSubmit}>
        
        <h2>{props.data ? 'Editar membro' : 'Adicionar membro'}</h2>

        <Input placeholder="E-mail" type="email" name="email" />
        <Input placeholder="Nome" type="text" name="name" />
        <Select name="profile">
          <option value={``}>SELECIONE SEU PERFIL</option>
          {profileList.map((profile: IProfileProps) => (
            <option value={profile.name}>{profile.description}</option>
          ))}
        </Select>

        <SecondaryButton label="Adicionar" />

    </Container>
  );
}

