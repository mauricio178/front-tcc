import styled from 'styled-components'

export const Container = styled.div`
display: flex;
height: 100vh;
width: 100vw;
align-items: center;
flex-direction: column;
background:	#e0f7f8;
`;

export const CardUser = styled.div`
  display: flex;
  flex-direction: row;
  margin: 3px;
  align-items: center;
  border: 1px solid;
  width: 98%;
  height: 40px;
  border-radius: 3px;
  background: #f2f2f2;
     :hover{
       opacity: 1;
       color: black;
       transition: 0.5s;
     }
`;

export const ContainerTitle = styled.div`
  display: flex;
  width: 90%;
  height: 8%;
  margin-top: 10px;
  border-radius: 4px;
  align-items: center;
  justify-content: space-between;

  input {
    padding: 5px 50px; 
    border-radius: 4px;
    border: 0px solid;
    box-shadow: 0 0 1px;
    font-size: 15px;
    font-family: Century Gothic;
    margin-right: 5px;

  }

  button {
    padding: 6px 20px;
    font-size: 15px;
    border-radius: 2px;
    border: 1px solid #2F4F4F;
    background: transparent;
    cursor: pointer;
    background: #007070;
    color: #ffffff;
    box-shadow: 0 0 1px;
      :hover{
        background: #147272;
        color: #a0a0a0;
        transition: .4s;
      }
  }


  h2 {
    margin-left: 5px;
    color: #2F4F4F;
    font-size: 25px;
    font-family: Century Gothic;
  }
`;

export const ContainerDiv = styled.div`
  display: flex;
  background: transparent;
  border-radius: 4px;
  width: 90%;
  height: 70%;
  background:	#ebebeb;
  border: 1px solid #8FBC8F;
  margin-top: 10px;
  box-shadow: 0 0 1px;
  flex-direction: column;
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

export const DivIcon = styled.div`

    border: 1px solid;
    margin-left: 5px;
    margin-right: 5px;
    width: 3%;
    font-size: 15px;   
  `;

  
export const DivEmail = styled.div`

    border: 1px solid;
    width: 35%;
    margin: 2px;
    font-size: 15px;  
  `;

  
export const DivProfile = styled.div`
border: 1px solid;
    width: 35%;
    margin: 2px;  
    font-size: 15px; 
  `;


export const DivControls = styled.div`
border: 1px solid;
display: flex;
flex-direction: row-reverse;
    width: 30%;
    margin: 2px;  
    font-size: 13px;
    

    button{
      background: transparent;
      color: black;
      border: transparent;
      padding: 10px;
      border-radius: 2px;
      margin-left: 2px;
      :hover{
        background: #bbbbbb;
        transition: 0.8s;
        color: #004d32;
        border-radius: 20px;
      }
    }

  `;
