import React from 'react';
import { Link } from 'react-router-dom';

import { AreaHeader } from './styled'

function Header() {
    return (
        <AreaHeader>
            <div className="container">
                <div className="logo">
                <img src="./man.png" alt="imagem"></img>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/cadastro">Registrar-se</Link></li>
                        <li><Link to="/pre-cadastro">Sou Pré-Cadastrado</Link></li>
                    </ul>
                </nav>
            </div>
        </AreaHeader>
    );
}

export default Header;