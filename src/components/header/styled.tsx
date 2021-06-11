import styled from 'styled-components'

export const Container = styled.div`
  padding: 10px 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 80vw;

  header {
    max-height: 30px;

    img {
      max-height: 60px;
      max-width: 70px;
    }
  }

  div {
    display: flex;
    align-items  : center;
    justify-content: center;

    * {
      margin: 0 6px;
    }

    button:hover {
      opacity: .3;
      transition: opacity .3s;
      cursor: pointer;
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