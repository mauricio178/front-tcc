import styled from 'styled-components'

export const Container = styled.div`
  
  
  /* flex-direction: column;
  justify-content: space-between;
  background: transparent;
  width: 100%;
  max-width: 1120px;
  align-items: center;
  align-self: flex-end; */
  margin: 0 2rem ;
`;

export const Content = styled.div`
  background: var(--background);
  /* max-width: 1120px; */
  display: flex;
  height: 100%;
  align-items: center;
  flex-direction: column;
  align-self: flex-end;
  border-radius: .5rem;
  padding: 2rem 0;
  margin-bottom: 2rem ;
`

export const ContainerTitle = styled.div`
  display: flex;
  width: 90%;
  height: 8%;
  margin-top: 10px;
  border-radius: 4px;
  align-items: center;
  justify-content: space-between;

  input {
    padding: 5px 50px; 
    border-radius: 4px;
    border: 0px solid;
    box-shadow: 0 0 1px;
    font-size: 15px;    
    margin-right: 5px;
  }

  h2 {
      margin-left: 5px;
      color: var(--title-color);
      font-size: 25px;
      font-weight: 500;
  }
`;

export const ContainerDiv = styled.div`
  width: 100%;
  padding: 2rem 2rem;
  flex-direction: column;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    tr {
      color: #fff;
      font-weight: 600;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    tbody tr {
      border-radius: .25rem;
      box-shadow: 0px 3px 0px #dedede;
    }

    th {
      padding: 1rem 2rem;
    }

    td {
      color: var(--text-color);
      padding: 1rem 2rem;
      border: 0;
      background: #fff;
      /* border-radius: .25rem; */

      /* &:last-child{
        margin-right: auto;
      } */
    }

  }
`;
