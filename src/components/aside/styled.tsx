  import styled from 'styled-components'

  export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #555;

    header {
      margin-bottom: 20px;
      background-color: #fff;
    }

    > a {

      padding: 15px ; 
      display: flex;
      align-items: center;
      flex-direction: row;

      h3 {
        margin-left: 16px;
      }
    }
  `;