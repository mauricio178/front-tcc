import styled from 'styled-components'

export const ErrorMesage = styled.span`
  color: #f00;
`;

interface IContainerProps{
  error?: string
}

export const Container = styled.div<IContainerProps>`
  font-weight: 400;
  padding: .25rem 0;

  input {
    border: ${({ error }) => error ? '3px solid red' : 'none' };
    border-radius: 0.25rem;
    width: 100%;
    height: 3rem;
    padding: 0 1.0rem;
  }
`;
