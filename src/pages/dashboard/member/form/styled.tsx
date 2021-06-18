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
height: 300px;
width: 250px;
align-items: center;
flex-direction: column;
justify-content: center;
background: 	#00a5a5;
margin-top: 30px;
border-radius: 10px;

    label {
      margin-left:10px;
      color: white;
      font-family: Century Gothic;
    }
    
    select {
      border: transparent;
      border-radius: 5px;
      padding: 4px 4px;
      margin-top: 0.5em;
      box-shadow: 0 0 3px;
      color: #444444;
      font-family: Century Gothic;
    }
`;
export const ContainerHeader = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 30px;

    
    h2 {
    color: white;
    font-size: 20px;
    font-family: Century Gothic;
  }
`;

export const Button = styled.button`
border: 1px solid #25692A;
color: #c2c2c2;
border-radius: 3px;
cursor:pointer;
font-family: Century Gothic;
font-weight: bold;
font-size: 12px;
background-color: 	#cc7008;
padding: 5px 50px;
margin-left: 45px;
margin-top: 2em;
margin-bottom: 1em;

  :hover {
      background: 	#FF4500;
      transition: .3s;
      color: white;
  }
`;