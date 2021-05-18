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
font-family: Century Gothic;
color: #2F4F4F;
`;

export const Title2 = styled.h1`
margin-left: 1em;
margin-top: 4em;
flex-direction: column;
font-family: Century Gothic;
color: #D3D3D3;
`;

export const Legend = styled.h4`
margin: 2em;
margin-top: 5px;
font-family: Century Gothic;
color: 	#B0C4DE;

`;

export const FooterLegend = styled.h6`
font-family: Century Gothic;
margin: 13em;
margin-top: 8em;
color: white;
font-size: 10px;
`;

export const Button = styled.button`
border: 1px solid #25692A;
color: white;
border-radius: 4px;
cursor:pointer;
font-family: Century Gothic;
font-weight: bold;
font-size: 13px;
background-color: #DC143C;
padding: 10px 112px;
margin-left: 60px;
margin-top: 2em;
margin-bottom: 2em;
`;

export const Button2 = styled.button`
  padding: 5px;
  font-family:Century Gothic;
  font-weight:bold;
  background-color: Transparent;
  border: 1px solid 	#B0C4DE;
  color: 	#B0C4DE;
  margin-left: 27em;
`;

export const Container = styled.div`
background-image: linear-gradient(to right, white, #008080);
width: 100vw;
height: 100vh;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`;

export const ContainerFormRigth = styled.div`
width: 30em;
height: 33em;
float: left;
align-items: center;
background-image: linear-gradient(180deg, white, #D3D3D3);
box-shadow: 0 0 3px #000000;
`;

export const ContainerFormLeft = styled.div`

border-width:2px;
width: 30em;
height: 33em;
left:0px;
background-image: url("img1-login.png");
float: left;
align-items: center;
box-shadow: 0 0 3px #000000;
opacity: 0.9;
`;

export const ContainerForms = styled.div`
background: #00000;
margin: 2em;
`;

export const ContainerForm = styled.div`
border: 1px solid;
border-radius: 3px;
margin: 1em 3em;
align-items: center;
justify-content: center;
flex-direction: column;
background-color: white

`;



export const ErrorMesage = styled.span`
color: #f00;
`;