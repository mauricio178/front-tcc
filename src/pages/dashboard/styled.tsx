import styled from 'styled-components'

export const Container = styled.div`
display: flex;
height: 100vh;
width: 100vw;
align-items: center;
flex-direction: column;
background:	#e0f7f8;

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
    padding: 5px 15px;
    font-size: 15px;
    border-radius: 5px;
    border: 1px solid #2F4F4F;
    background: transparent;
    cursor: pointer;
    background: #007070;
    color: #ffffff;
    box-shadow: 0 0 1px;
      :hover{
        background: #147272;
        color: #a0a0a0;
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
  background: transparent;
  border-radius: 4px;
  width: 90%;
  height: 70%;
  background:	#cee6e8;
  border: 1px solid #8FBC8F;
  margin-top: 10px;
  box-shadow: 0 0 1px;
  flex-direction: row;

  label {
    font-size: 10px;

  }
  
  div {
    display: flex;
    margin: 3px;
    padding: 1px;
    border-radius: 3px;
    box-shadow: 0 0 1px;
    background: #ffffff;
    flex-direction: row;
    
    div {
      padding: 20px;
      margin: 2px;
      width: 20%;
      border-radius: 3px;
      box-shadow: 0 0 1px;
      background: white;
      border: 1px solid #e4e4e4;
    }

  }
`;

export const Div = styled.div`
  display: flex;
  background:	#00a5a5;
  width: 68em;;
  height: 1em;
  margin-top: 3px;
  padding: 4px;
  border-radius: 3px;
  justify-content: space-between;
  align-items: center;

  div {
    
  }

  p{
    color: black;
    font-size: 10px;
    font-family: Century Gothic;


  }
`;

export const RowFixed = styled.div`
  display: flex;
  width: 68em;;
  height: 1em;
  border-radius: 3px;
  justify-content: space-between;
  align-items: center;

  p{
    color: black;
    font-size: 14px bold;
    font-family: Century Gothic;


  }
`;

