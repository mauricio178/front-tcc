import styled from 'styled-components'

export const Container = styled.div`
  padding: 10px 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: transparent;
  /* max-width: 80vw; */

  div {
    display: flex;
    align-items  : center;
    justify-content: center;

    * {
      margin: 0 14px;
    }

    button:hover {
      opacity: .9;
      transition: opacity 3s;
      background: red;
      color: white;
    }
    button {

      border: none;
      border-radius: 5px;
      padding: 5px;
      color: #f00;
      background-color: transparent;
    }
  }
`;