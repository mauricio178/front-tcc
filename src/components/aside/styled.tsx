  import styled from 'styled-components'

  export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #555;
    margin-top: 50px;

    header {
      margin-bottom: 20px;
      background-color: #fff;
    }

    > a {

      padding: 10px ; 
      display: flex;
      align-items: center;
      flex-direction: row;
      margin-left: 16px;

      h3 {
        margin-left: 16px;
      }
    }
  `;