import styled from 'styled-components'
import { Form } from '@unform/web';

export const Container = styled(Form)`

  h2 {
    margin-bottom: 2rem;
    color: var(--title-color)
  }   

  
`;

export const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const DivForm = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  input {
    padding: 4px 36px;
  }

   div {
     display: flex;
     flex-direction: column;
   }

`;

export const DivButton = styled.div`

`;
