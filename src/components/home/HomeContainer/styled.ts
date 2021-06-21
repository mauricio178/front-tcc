import styled from 'styled-components'

export const Container = styled.div`
  /* max-width: 960px; */
  /* height: 100vh; */
  width: 100%;

  object-fit: contain;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #555;

  .innerPage {
    width: 100%;
    display: flex;
    flex-direction: column;

  }
`;