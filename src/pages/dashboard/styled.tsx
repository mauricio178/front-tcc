import styled from 'styled-components'

export const Container = styled.div`
display: flex;
height: 100vh;
width: 100vw;
align-items: center;
flex-direction: column;
background:	#434371;

`;

export const ContainerTitle = styled.div`
  display: flex;
  width: 90%;
  height: 8%;
  margin-top: 1em;
  border-radius: 4px;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: row;
    input {
      opacity: 0.7;
      :hover {
        opacity: 1;
        transition: 0.5s;
      }
    }
  }

  input {
    padding: 5px 50px; 
    border-radius: 4px;
    border: 0px solid;
    box-shadow: 0 0 1px;
    font-size: 15px;
    font-family: sans-serif;
    margin-right: 5px;

  }

  button{

    border: 1px solid transparent;
    color: #d3d3d3;
    border-radius: 3px;
    display: flex;
    cursor: pointer;
    font-family: sans-serif;
    font-weight: bold;
    font-size: 14px;
    background-color: 	#1e1e24;
    opacity: 0.9;
    padding: 8px 16px;
      :hover{
        background-color: 	#1e1e24;
        color: #ffffff;
        transition: 0.7s;
        opacity: 1;
        box-shadow: 0 0 3px;
      }
    }


  h2 {
    margin-left: 5px;
    color: #ffffff;
    font-size: 25px;
    font-family: sans-serif;
  }
`;

export const ContainerDiv = styled.div`

  display: flex;
  background:	transparent;
  border-radius: 4px;
  width: 90%;
  height: 70%;
  border: 0px solid #d0d0d0;  
  margin-top: 1em;
  box-shadow: 0 0 1px;
  flex-direction: column;

`;

