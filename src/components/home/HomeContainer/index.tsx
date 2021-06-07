import React from 'react';

import { Container } from './styled';

const HomeContainer: React.FC = ({children}) => {
  return (
    <Container>
      {children}
    </Container>
  );
}

export { HomeContainer };