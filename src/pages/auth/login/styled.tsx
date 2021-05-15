import styled from 'styled-components'

export const Title = styled.h1`
  margin-top: 1em;
  color: ;
  font-family: Calibri;
  font-size: 35px
`;

export const Button = styled.button`
cursor: pointer;
font-size: 16px;
font-family: arial;
border-radius: 5px;
color: black;
border: 2px solid;
margin: 0 1em;
margin-top: 4em;
margin-bottom: 4em;
margin-left: px;
padding: 0.25em 1em;
transition: 0.5s all ease-out;
&:hover {
  background-color: gray;
  color: black;
}
`;

export const ContainerForm = styled.div`
  background-image: linear-gradient(to bottom, gray, white);
  margin-top: 2em;
  margin-left: 33em;
  margin-right: 33em;
  border: 1px solid;
  border-radius: 10px;
  flex: 1;
  display: flex;  
`;


export const Container = styled.div`
  background-image: linear-gradient(to bottom, #696969, white);
  position: absolute;
`;

export const InputText = styled.input`
  font-family: arial;
  border-radius: 10px;
  color: black;
  border: 1px solid;
  margin: 0 1em;
  margin-top: 1em;
  margin-bottom: 1em;
  padding: 0.5em 1em;
`;

export const ErrorMesage = styled.span`
  color: #f00;
`;

export const Header = styled.header`
  margin-top: 1em;
  display: start;
`;