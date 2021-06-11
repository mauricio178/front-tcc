import styled from 'styled-components'

export const Container = styled.div`
display: flex;
height: 100vh;
width: 100vw;
align-items: center;
flex-direction: column;
background: 	#2F4F4F;
  button {
    padding: 3px;
    margin-right: px;
  }

`;

export const ContainerTitle = styled.div`
  display: flex;
  width: 90%;
  height: 10%;
  align-items: center;
  justify-content: space-between;

  button {
    padding: 4px 10px;
    border-radius: 20px;
    border: 0px solid;
    background: transparent;
    cursor: pointer;
    color: white;
      :hover{
        background: #008080;
        color: white;
        transition: .7s;
      }
  }

  div {
    display: flex;
    justify-content: space-between;
  }

  h2 {
    color: white;
    font-size: 20px;
    font-family: Century Gothic;
  }
`;

export const ContainerDiv = styled.div`
  background: 	#008080;
  border-radius: 8px;
  padding: 10px 10px; 
  width: 89%;
  height: 70%;


  h4 {
    font-size: 15px;
    color: white;
    padding: 10px;
    margin-top: 0.5em;
  }
`;

export const Div = styled.div`
  display: flex;
  background:	#00a5a5;
  width: 98%;
  height: 7%;
  margin-top: 15px;
  border-radius: 10px;

`;

export const DivFixed = styled.div`
  display: flex;
  width: 98%;
  height: 7%;
  border-radius: 8px;
  justify-content: space-between;
  align-items: center;

  p{
    color: black;
    font-size: 14px;
    font-family: Century Gothic;


  }
`;

