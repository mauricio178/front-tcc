import styled from 'styled-components'

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
display: flex;
font-family: Century Gothic;
color: #2F4F4F;
font-size: 22px;
margin-left: 1.2em;
`;

export const Title2 = styled.h1`
margin-left: 1em;
font-size: 27px;
margin-top: 1em;
flex-direction: column;
font-family: Century Gothic;
color: #D3D3D3;
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
background-color: #DC143C;
padding: 5px 40px;
margin-left: 45px;
margin-top: 1em;
margin-bottom: 2px;
`;

export const Button2 = styled.button`
  padding: 5px;
  font-family:Century Gothic;
  font-weight:bold;
  background-color: Transparent;
  border: 1px solid 	#B0C4DE;
  color: 	#B0C4DE;
  margin-left: 2em;
`;

export const Container = styled.div`
background-image: linear-gradient(to right, #008080, white);
width: 100vw;
height: 100vh;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
border: 1px solid ;
`;

export const ContainerFormRigth = styled.div`
width: 28em;
height: 32em;
float: left;
align-items: center;
background-image: url("img1-login.png");
box-shadow: 0 0 3px #000000;
`;

export const ContainerFormLeft = styled.div`
width: 28em;
height: 32em;
left:0px;
background-image: linear-gradient(180deg, white, #D3D3D3);
float: left;
align-items: center;
box-shadow: 0 0 3px #000000;
`;

export const ContainerForms = styled.div`
background: #00000;
margin: 2em;
`;

export const ContainerForm = styled.div`
border: 1px solid;
border-radius: 3px;
margin: 2em 7em;
align-items: center;
justify-content: center;
flex-direction: column;
background-color: white
`;


export const ErrorMesage = styled.span`
color: #f00;
`;