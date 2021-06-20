import styled from 'styled-components'

export const Container = styled.div`
  background: white;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  border-radius: 4px;
  align-items: center;
  margin: 4px;
  height: 8vh;
  opacity: 0.8;
  color: #272727;
  font-size: 17px;
  font-family: Centry Gotic;
  box-shadow: 0 0 1px;
  :hover{
    opacity: 1;
    transition: 0.8s;
    color: black;
  }
`;

export const DivIcon = styled.div`

  width: 5%;
  margin-left: 4px;

`;

export const DivEmail = styled.div`

width: 35%;
  
`;

export const DivName = styled.div`

  width: 25%;
`;

export const DivProfile = styled.div`

  width: 25%;
  height: 50%;
`;

export const DivControls = styled.div`
  width: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  button{
    cursor: pointer;
    padding: 3px;
    margin: 5px;
    border: 1px solid transparent; 
    background: transparent;
    color: #3a3a3a;
    border-radius: 8px;
    :hover {
      transition: 0.8s;
      color: #000000;
      border: 1px solid #3a3a3a; 
      box-shadow: 0 0 2px;
    }

  }
`;
