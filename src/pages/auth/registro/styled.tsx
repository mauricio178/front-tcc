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
;
color: #2F4F4F;
font-size: 22px;
margin-left: 1.2em;
`;

export const Button = styled.button`
border: 1px solid #25692A;
color: white;
border-radius: 3px;
cursor:pointer;
;
font-weight: bold;
font-size: 12px;
background-color: 	#FF4500;
padding: 5px 60px;
margin-left: 31px;
margin-top: 1em;
margin-bottom: 2px;
`;

export const InputSelect = styled.input`
  outline: none !important;
  border: 0px solid;
  box-shadow: 0 0 3px #000000;  
  color: 	#363636;
  padding: 4px 11px;
  margin-top: 1.5em;
  margin-bottom: 1.5em;
  border-radius: 3px;
  margin-left: 31px;
  font-size: 12px;
  ;
`;

export const ContainerFormLeft = styled.div`
`;

export const ContainerForm = styled.div`
margin: 2em 7em;
flex-direction: column;
`;


export const ErrorMesage = styled.span`
color: #f00;
`;