import styled from 'styled-components'

export const Link = styled.button`
  border: 1px solid;
`;

export const Img = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 1em;
`;

export const Lbl = styled.p`
  margin: 1em 5em;
  font-family: Century Gothic;
  font-size: 10px;
`;

export const Title = styled.h1`
font-family: sans-serif;
font-weight: bold;
color: #174168;
margin-top: 1em;
font-size: 25px;
`;

export const Button = styled.button`
border: 1px solid transparent;
color: #dadada;
border-radius: 3px;
cursor: pointer;
font-family: Century Gothic;
font-weight: bold;
font-size: 12px;
background-color: 	#404083;
padding: 8px 85px;
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
      font-family: sans-serif;
    }
  }
`;


export const ErrorMesage = styled.span`
color: #f00;
`;