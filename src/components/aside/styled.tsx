  import styled from 'styled-components'

  export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: #373233;

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
      margin-top: 1em;
      h3 {
        margin-left: 16px;
      }
    }
  `;