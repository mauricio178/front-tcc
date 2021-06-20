import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Container, ContainerForm, ContainerHeader, Button, DivProject, DivClient, DivForm, DivButton } from './styled'
import * as Yup from 'yup'
import { FormHandles } from '@unform/core'
import { useHistory, useLocation } from 'react-router-dom';
import { api } from '../../../../services/api'
import { useLoader } from '../../../../hooks/LoaderProvider';
import Input from '../../../../components/input';
import { Form } from '@unform/web';
import Select from '../../../../components/select';
import { FiCornerDownLeft, FiFilePlus, FiPlus } from 'react-icons/fi';

interface IMemberProps {
  name: string;
}

interface IFormRefInterface extends FormHandles, React.MutableRefObject<null> {
  setErrors(error: any): void
}

interface ILocation {
  projeto: {
    name: string,
    descricao: string;
    vendedor: string;
    pos_venda: string;
    custo: string;
    prev_inicio: string;
    prev_fim: string;
    cliente: string;

  }
}


interface IAxiosError {
  response: {
    data: {
      message: string
    }
  }
}


export default function FormProjeto(props: any) {

  const formRef = useRef<IFormRefInterface>({} as IFormRefInterface);

  const history = useHistory()

  const [initialData, setInicialData] = useState({})

  const [edit, setEdit] = useState(false)

  const location = useLocation()

  const { toggleLoading } = useLoader()

  const [memberList, setMemberList] = useState([]);

  useEffect(() => {
    if (location.state) {
      let { projeto } = location.state as ILocation
      setInicialData(projeto)
      setEdit(true)
    }
  }, [])


  async function handleSubmit(data: any,) {
    try {
      const schema = Yup.object().shape({

      });

      await schema.validate(data, {
        abortEarly: false,
      });

      toggleLoading()

      if (edit) {
        api.put("/", data)
          .then(res => {
            console.log(res)
            handleGoToDashboard()
          })
          .catch((err: IAxiosError) => {
            const { message } = err.response.data
            alert(message)
          }).finally(() => {
            toggleLoading()
          })
      } else {
        api.post("/", data)
          .then(res => {
            console.log(res)
            handleGoToDashboard()
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

  const handleGoToDashboard = useCallback(() => {
    history.push('/dashboard')
  }, [history])


  async function fetchMembers() {
    const { data } = await api.get('team')
    setMemberList(data)
    console.log(data)
  }

  useEffect(() => {
    fetchMembers()
  }, [])



  return (
    <Container>
      <ContainerHeader>
        <h2><FiFilePlus size="25"></FiFilePlus> Adicionar Novo Projeto</h2>
        <button onClick={handleGoToDashboard}><FiCornerDownLeft size="16"></FiCornerDownLeft>Voltar</button>
      </ContainerHeader>

      <ContainerForm>
        <Form ref={formRef} initialData={initialData} onSubmit={handleSubmit}>
          <DivForm>
            <DivProject>
              <label>Nome do Projeto</label>
              <Input type="text" name="name" />
              <label>Previsão de Inicio</label>
              <Input type="date" name="prev_inicio" />
              <label>E-mail Cliente</label>
              <Input placeholder="ex@ex.com" type="text" name="name" />
              <label>Custo Estimado</label>
              <Input placeholder="R$" type="text" name="custo" />
              <label>Gerente</label>
              <Select name="member">
                {memberList.map((member: IMemberProps) => (
                  <option value={member.name}>{member.name}</option>
                ))}
              </Select>
            </DivProject>
            <DivClient>
              <label>Cliente</label>
              <Input type="text" name="cliente" />
              <label>Previsão de Finalização</label>
              <Input type="date" name="prev_fim" />
              <label>Pós-Venda</label>
              <Input type="text" name="pos_venda" />
              <label>Detalhes refente</label>
              <Input type="text" name="descricao" />
              <label>Vendedor</label>
              <Select name="member">
                {memberList.map((member: IMemberProps) => (
                  <option value={member.name}>{member.name}</option>
                ))}
              </Select>
            </DivClient>
          </DivForm>
          <DivButton>
            <Button><FiPlus size="16"></FiPlus>Adicionar</Button>
          </DivButton>
        </Form>
      </ContainerForm>
    </Container>
  );
}

