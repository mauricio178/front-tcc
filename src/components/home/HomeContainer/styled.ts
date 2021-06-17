import styled from 'styled-components'

export const Container = styled.div`
  /* max-width: 960px; */
  width: 100%;

  object-fit: contain;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #555;
  background-color: #fff;

  .innerPage {
    width: 100%;
    display: flex;
    flex-direction: column;

  }
`;