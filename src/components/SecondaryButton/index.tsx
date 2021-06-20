import React from 'react';
import { ButtonHTMLAttributes } from 'react';

import { Container } from './styled';

function SecondaryButton({ label, icon, ...rest }: any) {
  return (
    <Container {...rest}>
      {label || icon}
    </Container>
  );
}

export { SecondaryButton }