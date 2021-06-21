  import styled from 'styled-components'

  export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: var(--background);
    height: 100vh;

    header {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
      /* background-color: #fff; */
      img {
        width: 70%;
        padding: 0.5rem;
        margin-bottom: 2em;
        margin-top: 1em;
      }
    }

    > a {

      padding: 8px ; 
      display: flex;
      align-items: center;
      flex-direction: row;
      margin: 10px 16px;

      svg {
        color: var(--seconday-color);
        font-size: 32px;
      }

      h4 {
        margin-left: 8px;
      }
    }
  `;