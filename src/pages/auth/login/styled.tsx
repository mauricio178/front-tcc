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
flex-direction: column;
justify-content: center;
align-items: center;
;
color: #2F4F4F;
`;

export const Button = styled.button`
border: 1px solid #25692A;
color: white;
border-radius: 3px;
cursor: pointer;
;
font-weight: bold;
font-size: 12px;
background-color: 	#FF4500;
padding: 5px 62px;
margin-left: 31px;
margin-top: 1.5em;
margin-bottom: 1em;
`;

export const Button2 = styled.button`
  padding: 1px;
  cursor: pointer; 
  font-size: 13px;
  border: 1px solid #008080;
  border-radius: 5px;
  font-weight:bold;
  background-color: Transparent;
  color: 	#008080;
  margin-left: 56px;
  margin-top: 10px;

`;

export const ContainerForm = styled.div`
margin: 2em 7em;
`;

export const ErrorMesage = styled.span`
color: #f00;
`;