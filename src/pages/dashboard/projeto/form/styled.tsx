import styled from 'styled-components'

export const Container = styled.div`
display: flex;
height: 100vh;
width: 100vw;
align-items: center;
justify-content: start;
flex-direction: column;
background: 	#434371;
`;

export const DivForm = styled.div`
  display: flex;
  flex-direction: row;

`;

export const DivButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 4px;
  padding: 5px 0px;
`;

export const DivProject = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
`;


export const DivClient = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;

`;

export const ContainerForm = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
border-radius: 5px;
background: transparent;
padding: 8px;
  form{
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: flex-start;

    label {
      margin-top: 1.5em;
      font-size: 14px;
      color: #ffffff;
      font-weight: bold;
      font-family: sans-serif;
      margin-left: 2px;
    }

    input {
     padding: 8px 25px;
     margin-right: 16px;
     margin-top: 2px;
     opacity: 0.9;
     :hover {
       opacity: 1;
       transition: 0.4s;
      }
    }

    select {
     padding: 8px 34px;
     margin: 2px;
     opacity: 0.9;
     :hover {
       opacity: 1;
       transition: 0.4s;
      }

    }
  }
`;

export const ContainerHeader = styled.div`
  display: flex;
  width: 90%;
  height: 8%;
  margin-top: 10px;
  border-radius: 4px;
  align-items: center;
  justify-content: space-between;
  margin-top: 1em;

  button{
    padding: 8px 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #dddddd;
    background: transparent;
    border-radius: 4px;
    color: #dddddd;
    cursor: pointer;
    font-size: 16px;
    font-family: sans-serif;

     :hover {
       box-shadow: 0 0 2px;
        transition: 0.8s;
        background: #0a0a49;
        border: 1px solid #2055a5;
       color: #ffffff;
     }
  }

    
  h2 {
    margin-left: 5px;
    color: #ffffff;
    font-size: 25px;
    font-family: sans-serif;
  }
`;

export const Button = styled.button`
border: 1px solid transparent;
color: #c0c0c0;
border-radius: 3px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
cursor: pointer;
font-family: Century Gothic;
font-weight: bold;
font-size: 16px;
background-color: 	transparent;
padding: 8px 48px;
margin-top: 1em;
    box-shadow: 0 0 5px;

  :hover{
    background-color: 	#0a0a49;
    color: #ffffff;
    transition: 0.7s;
  }
`;