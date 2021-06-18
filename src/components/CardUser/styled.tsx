import styled from 'styled-components'

export const Container = styled.div`
  background: white;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  border-radius: 4px;
  align-items: center;
  margin: 3px;
  height: 7vh;
  opacity: 0.8;
  color: #272727;
  font-size: 15px;
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
    padding: 5px;
    margin: 5px;
    border-radius: 2px;
    border: transparent;
    background: transparent;
    color: #033f2a;
    :hover {
      background: #014f3e;
      transition: 0.8s;
      border-radius: 4px;
      color: #75f3ce
    }

  }
`;
