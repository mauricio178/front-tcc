import styled from 'styled-components'

export const Container = styled.div`
display: flex;
height: 100vh;
width: 100vw;
align-items: center;
flex-direction: column;
background: 	#2F4F4F;

`;

export const ContainerTitle = styled.div`
  display: flex;

  width: 90%;
  height: 10%;
  border-radius: 8px;
  align-items: center;
  justify-content: space-between;

  h2 {
    color: white;
    font-size: 20px;
    font-family: Century Gothic;
  }
`;

export const ContainerDiv = styled.div`
  background: 	#008080;
  border-radius: 8px;
  padding: 10px 10px; 
  width: 89%;
  height: 70%;


  h4 {
    font-size: 15px;
    color: white;
    padding: 10px;
    margin-top: 0.5em;
  }
`;

export const Div = styled.div`
  display: flex;
  background:	#5F9EA0;
  width: 98%;
  height: 7%;
  margin-top: 15px;
  border-radius: 8px;
  justify-content: space-between;
  align-items: center;

  situacao {

  }

  p{
    color: black;
    font-size: 14px;
    font-family: Century Gothic;


  }
`;

export const DivFixed = styled.div`
  display: flex;
  width: 98%;
  height: 7%;
  border-radius: 8px;
  justify-content: space-between;
  align-items: center;

  p{
    color: black;
    font-size: 14px;
    font-family: Century Gothic;


  }
`;

