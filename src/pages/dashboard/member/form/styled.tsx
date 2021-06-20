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

export const ContainerForm = styled.div`
display: flex;
height: 300px;
width: 250px;
align-items: center;
flex-direction: column;
justify-content: center;
background: 	transparent;
border-radius: 5px;
margin-top: 2em;

  input {
    margin-bottom: 30px;
    opacity: 0.8;
    :hover {
      opacity: 1;
      transition: 0.5s;
      font-family: sans-serif;

    }
  }

    label {
      color: white;
      font-family: sans-serif;
      font-weight: bold;
      font-size: 14px;
      margin-bottom: 2px;
    }
    
    select {
      border: transparent;
      border-radius: 5px;
      padding: 6px 30px;
      box-shadow: 0 0 3px;
      color: #444444;
      font-family:sans-serif;
    }
`;
export const ContainerTitle = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 30px;


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
border: 1px solid white;
color: #e8e8e8;
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
padding: 5px 56px;
margin-top: 3em;
box-shadow: 0 0 2px;

  :hover{
    background-color: 	#13134d;
    color: #ffffff;
    transition: 0.7s;
    box-shadow: 0 0 4px;
  }
`;