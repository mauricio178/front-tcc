import styled from 'styled-components'

export const Container = styled.div`
display: flex;
height: 100vh;
width: 100vw;
align-items: center;
flex-direction: column;
background:	#e0f7f8;
`;

export const CardUser = styled.div`
  display: flex;
  flex-direction: row;
  margin: 3px;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #dcdcdc;
  width: 99%;
  height: 40px;
  opacity: 0.9;
  color: black;
  border-radius: 3px;
  background: #eeeeee;
    :hover{
       opacity: 1;
       color: black;
       background: #ffffff;
       transition: 0.5s;
     }

  div{
    display:flex;
    justify-content: space-between;
    margin: 5px;
    
    button{
      background: transparent;
      color: black;
      border: transparent;
      padding: 10px;
      border-radius: 2px;
      margin-left: 2px;
      :hover{
        background: #8c8c8c;
        transition: 0.8s;
        color: #ffffff;
        border-radius: 20px;
      }
    }
  }
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
    font-family: Century Gothic;
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
    font-family: Century Gothic;
  }
`;

export const ContainerDiv = styled.div`
  display: flex;
  background: transparent;
  border-radius: 4px;
  width: 90%;
  height: 70%;
  background:	transparent;
  border: 0px solid #d0d0d0;
  margin-top: 10px;
  box-shadow: 0 0 1px;
  flex-direction: column;
`;

