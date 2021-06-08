  import styled from 'styled-components'

  export const Container = styled.div`
    display: flex;
    flex-direction: column;
    color: #fff;
    background-color: #555;

    header {
      padding: 16px ;
      margin-bottom: 32px;
      background-color: #fff;
    }

    > a {

      padding: 16px ; 
      display: flex;
      align-items: center;
      flex-direction: row;

      h3 {
        margin-left: 16px;
      }
    }
  `;