import styled from 'styled-components'

export const Container = styled.div`
display: flex;
height: 100vh;
width: 100vw;
align-items: center;
flex-direction: column;
background:	#ebf4ff;

`;

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
    ;
    margin-right: 5px;

  }

  button {
    padding: 6px 20px;
    font-size: 15px;
    border-radius: 4px;
    border: 1px solid #2F4F4F;
    background: transparent;
    cursor: pointer;
    background: transparent;
    color: #2e2e2e;
    box-shadow: 0 0 1px;
      :hover{
        background: #005f5f;
        color: #ffffff;
        transition: .4s;
      }
  }


  h2 {
    margin-left: 5px;
    color: #2F4F4F;
    font-size: 25px;
    ;
  }
`;

export const ContainerDiv = styled.div`

  display: flex;
  background:	transparent;
  border-radius: 4px;
  width: 90%;
  height: 70%;
  border: 0px solid #d0d0d0;  
  margin-top: 10px;
  box-shadow: 0 0 1px;
  flex-direction: column;

`;

