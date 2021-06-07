import React, { useCallback, useRef, } from 'react'
import { Container } from './styled'
import { FiHome } from 'react-icons/fi';
import { useAuth } from '../../hooks/AuthProvider'

interface IAside{
  renderAside: boolean
}

export const Aside = ({ renderAside }: IAside) => {

  const { data: { user } } = useAuth()

  if(!renderAside) return null

  return (
    <Container>
      <header>
        <img src="./man.png" alt="imagem"/>
      </header>
      <div>
        <FiHome />
        <h3> Home </h3>
      </div>
      <div>
        <FiHome />
        <h3> Repositórios </h3>
      </div>
      <div>
        <FiHome />
        <h3> Equipe </h3>
      </div>
    </Container>
  )
}
