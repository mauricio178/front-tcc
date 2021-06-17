import React, { useState } from 'react';
import { Aside } from '../../aside';
import { Header } from '../../header';

import { Container } from './styled';

const HomeContainer: React.FC = ({ children }) => {
  const [ renderAside, setRenderAside ] = useState(true)
  
  return (
    <Container>
        <Aside renderAside={renderAside} />
        <div className="innerPage">
          <Header setRenderAside={setRenderAside} />
          {children}
        </div>
    </Container>
  );
}

export { HomeContainer };