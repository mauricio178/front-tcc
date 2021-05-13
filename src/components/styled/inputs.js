import styled from 'styled-components'

export const Title = styled.h1`
  color: #1C1C1C;
  font-family: Calibri;
`;

export const Button = styled.button`
cursor: pointer;
background: green;
font-size: 16px;
font-family: Calibri;
border-radius: 3px;
color: black;
border: 2px solid;
margin: 0 1em;
padding: 0.25em 1em;
transition: 0.5s all ease-out;
&:hover {
  background-color: #00FF7F;
  color: black;
}
`;

export const Container = styled.div`
  background-color: #808080;
  margin-left: 25rem;
  margin-right: 25rem;
  border-radius: 15px;

`;

export const InputText = styled.input`
  margin-bottom: 30px;
  margin-right: 12px;
  color: 	black;
  padding: 0.25rem 0.5rem
  ;  

`;

export const ErrorMesage  = styled.span`
  color: #f00;
`;