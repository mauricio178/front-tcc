import styled from 'styled-components'

export const Container = styled.div`
  border-left: solid 1px #555;
  padding: 24px 48px 24px 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #555;
  background-color: #fff;
  max-width: 80vw;

  div {
    display: flex;
    align-items  : center;
    justify-content: center;

    * {
      margin: 0 14px;
    }

    button:hover {
      opacity: .5;
      transition: opacity .3s;
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