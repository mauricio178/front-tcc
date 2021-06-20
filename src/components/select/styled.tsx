import styled from 'styled-components'

interface IContainerProps{
    error?: string
  }
  

export const Container = styled.div<IContainerProps>`
    font-weight: 400;
    padding: .25rem 0;

    select {
        border-radius: 0.25rem;
        border: ${({ error }) => error ? '3px solid red' : 'none' };
        width: 100%;
        height: 3rem;
        padding: 0 1.0rem;
    }
`;
