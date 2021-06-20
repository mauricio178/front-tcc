import styled from 'styled-components'

export const Container = styled.div`
  
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  background: transparent;
  /* width: 100%; */
  /* max-width: 1120px; */
  
  /* align-self: flex-start; */
  margin: 2rem ;

  h2 {
    font-weight: 400;
  }

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