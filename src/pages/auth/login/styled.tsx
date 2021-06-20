import styled from 'styled-components'

export const Img = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 1em;

`;

export const Title = styled.h1`
display: flex;
font-family: sans-serif;
color: #2F4F4F;
`;

export const Button = styled.button`
border: 1px solid transparent;
color: #dadada;
border-radius: 3px;
cursor: pointer;
font-family: Century Gothic;
font-weight: bold;
font-size: 14px;
background-color: 	#404083;
padding: 8px 82px;
margin-top: 2em;
margin-bottom: 2px;
  :hover{
    background-color: 	#23237c;
    color: white;
    transition: 0.7s;
  }
`;

export const ContainerForm = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  form {
    margin-top: 2em;

    input {
      margin-top: 1em;
      font-family: sans-serif;
    }
  }
`;


export const ErrorMesage = styled.span`
color: #f00;
`;