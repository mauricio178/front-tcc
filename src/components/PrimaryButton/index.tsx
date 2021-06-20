import React from 'react';
import { ButtonHTMLAttributes } from 'react';

import { Container } from './styled';

function PrimaryButton({ label, bg, icon, ...rest }: any) {
  return (
    <Container {...rest} style={{ background: bg }}>
      {label || icon}
    </Container>
  );
}

export { PrimaryButton }