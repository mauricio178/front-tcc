import styled from 'styled-components'

export const Img = styled.div`
margin-top: 1em;

`;

export const Title = styled.h1`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-family: Century Gothic;
color: #2F4F4F;
`;

export const Title2 = styled.h1`
margin-left: 1em;
font-size: 27px;
margin-top: 1em;
flex-direction: column;
font-family: Century Gothic;
color: #D3D3D3;
`;

export const Lbl = styled.p`
  margin: 3em;
  font-family: Century Gothic;
  font-size: 10px;
`;

export const Legend = styled.p`
margin: 2em;
margin-top: 5px;
font-family: Century Gothic;
color: 	#B0C4DE;
`;

export const Button = styled.button`
border: 1px solid #25692A;
color: white;
border-radius: 3px;
cursor:pointer;
font-family: Century Gothic;
font-weight: bold;
font-size: 12px;
background-color: 	#FF4500;
padding: 5px 50px;
margin-left: 42px;
margin-top: 1em;
margin-bottom: 1em;
`;

export const Button2 = styled.button`
  padding: 5px;
  font-family:Century Gothic;
  font-weight:bold;
  background-color: Transparent;
  border: 1px solid 	#B0C4DE;
  color: 	#B0C4DE;
  margin-left: 2em;
  cursor: pointer;
`;

export const Container = styled.div`
background: #008080;
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`;

export const ContainerFormRigth = styled.div`
width: 28em;
height: 32em;
float: left;
align-items: center;
background-image: url("img1-login.png");
border-radius: 0px 15px 15px 0px;
`;

export const ContainerFormLeft = styled.div`
width: 28em;
height: 32em;
background-image: linear-gradient(180deg, white, #A9A9A9);
float: left;
align-items: center;
border-radius: 15px 0px 0px 15px;

`;

export const ContainerForms = styled.div`
background: transparent;
margin: 2em;
`;

export const ErrorMesage = styled.span`
color: #f00;
`;