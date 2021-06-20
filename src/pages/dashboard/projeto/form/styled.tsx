import styled from 'styled-components'

export const Container = styled.div`
display: flex;
height: 100vh;
width: 100vw;
align-items: center;
justify-content: start;
flex-direction: column;
background: 	#008080;
`;

export const ContainerForm = styled.div`
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
background: 	#00a5a5;


    label {
      margin-left:10px;
      color: white;
      ;
    }
    
    select {
      border: transparent;
      border-radius: 5px;
      padding: 4px 4px;
      margin-top: 0.5em;
      box-shadow: 0 0 3px;
      color: #444444;
      ;
    }
`;
export const ContainerHeader = styled.div`
  display: flex;
  width: 90%;
  height: 8%;
  margin-top: 10px;
  border-radius: 4px;
  align-items: center;
  justify-content: flex-start;

    
    h2 {
    color: white;
    font-size: 30px;
    font-family: sans-serif;
  }
`;

export const Button = styled.button`
border: 1px solid #25692A;
color: #c2c2c2;
border-radius: 3px;
cursor:pointer;
;
font-weight: bold;
font-size: 12px;
background-color: 	#cc7008;

  :hover {
      background: 	#FF4500;
      transition: .3s;
      color: white;
  }
`;