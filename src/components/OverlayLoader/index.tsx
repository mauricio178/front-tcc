import React from 'react';
import BeatLoader from 'react-spinners/BeatLoader';
import { Container } from './styled';


const OverlayLoader: React.FC = () => {
  return (
    <Container>
      <BeatLoader size={60}  margin={20} color="#008080" />
    </Container>
  );
}

export default OverlayLoader;