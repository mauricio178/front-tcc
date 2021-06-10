import React, { useCallback, useRef, } from 'react'
import { Container } from './styled'
import { FiFile, FiHome, FiUser } from 'react-icons/fi';
import { useAuth } from '../../hooks/AuthProvider'
import AsideItem from '../AsideItem';

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

      <AsideItem 
        icon={<FiHome />}
        path="/dashboard"
        label="Home"
      />
      
      <AsideItem 
        icon={<FiFile />}
        path="/repositorio"
        label="Repositório"
      />
      
      <AsideItem 
        icon={<FiUser />}
        path="/listagem"
        label="Equipe"
      />
      
    </Container>
  )
}
