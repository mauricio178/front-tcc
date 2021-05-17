import styled from 'styled-components'

export const Title = styled.h1`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-family: calibri;
color: #2F4F4F;
`;

export const Title2 = styled.h1`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-family: calibri;
color: #D3D3D3;
`;

export const Legend = styled.h4`
margin: 2em;
margin-top: 2em;
font-family: calibri;
color: 	#B0C4DE;
align-items: center;
`;

export const FooterLegend = styled.h6`
  font-family: calibri;
  margin: 13em;
  margin-top: 8em;
`;

export const Button = styled.button`
background-color: green;
  color: white;
  margin: ;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 1em 5em;
  cursor: pointer;
`;

export const Container = styled.div`
background-color: #20B2AA;
width: 100vw;
height: 100vh;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;  


`;


export const ContainerFormRigth = styled.div`
position: relative;
border-width:2px;
width: 30em;
height: 25em;
background-color: #D3D3D3;
float: left;
align-items: center;
box-shadow: 0 0 10px #000000;

border-radius: 0px 30px 30px 0px;
`;

export const ContainerFormLeft = styled.div`
position: relative;
    border-width:2px;
    width: 30em;
    height: 25em;
    left:0px;
    background-color: #2F4F4F;
    float: left;
    align-items: center;
    box-shadow: 0 0 10px #000000;
    border-radius: 30px 0px 0px 30px;
`;

export const ContainerForm = styled.div`
background: #fff;
border-radius: 30px 30px 30px 30px;
`;

export const BoxForm = styled.div`
padding: 10px;
background: #808080;
margin: 1em;
border-radius: 25px 5px 25px;
 align-items: center;
 margin: 30px;
 box-shadow: 0 0 10px #000000;
`;

export const ErrorMesage = styled.span`
  color: #f00;
`;