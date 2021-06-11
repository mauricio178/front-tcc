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
  width: 70em;
  height: 50px;
  border-radius: 2px;
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
  width: 70em;
  height: 20em;


  h4 {
    font-size: 15px;
    color: white;
    padding: 10px;
    margin-top: 0.5em;
  }
`;

export const Div = styled.div`
  display: flex;
  background:	#00a5a5;
  width: 68em;;
  height: 1em;
  margin-top: 3px;
  padding: 4px;
  border-radius: 3px;
  justify-content: space-between;
  align-items: center;

  div {
    
  }

  p{
    color: black;
    font-size: 10px;
    font-family: Century Gothic;


  }
`;

export const RowFixed = styled.div`
  display: flex;
  width: 68em;;
  height: 1em;
  border-radius: 3px;
  justify-content: space-between;
  align-items: center;

  p{
    color: black;
    font-size: 14px bold;
    font-family: Century Gothic;


  }
`;

