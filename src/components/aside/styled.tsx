  import styled from 'styled-components'

  export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-image: linear-gradient(to bottom, #007070, #0070707f); ;

    header {
      margin-bottom: 20px;
      background-color: #fff;
    }

    > a {

      padding: 10px ; 
      display: flex;
      align-items: center;
      flex-direction: row;
      margin-left: 20px;
      margin-top: 20px;

      h3 {
        margin-left: 16px;
      }
    }
  `;