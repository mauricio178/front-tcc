import styled from 'styled-components'

export const Container = styled.div`

  background: white;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  border-radius: 3px;
  align-items: center;
  margin: 4px;
  height: 8vh;
  opacity: 0.8;
  color: #272727;
  font-size: 17px;
  
  box-shadow: 0 0 1px;
  :hover{
    opacity: 1;
    transition: 0.8s;
    color: black;
  }
`;

export const DivIcon = styled.div`
  margin-left: 10px;

  width: 5%;
`;

export const DivId = styled.div`

  width: 5%;
`;

export const DivName = styled.div`

  width: 20%;
`;


export const DivGerente = styled.div`
  width: 20%;

`;

export const DivDate = styled.div`
  width: 15%;
`;

export const DivControls = styled.div`
  width: 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  background: white;

  button{
    cursor: pointer;
    padding: 5px;
    margin: 5px;
    border-radius: 2px;
    border: transparent;
    color: #168853;
    background: white;
    font-size: 14px;
    svg {
      background: white;
    }
    :hover {
      transition: 0.8s;
      border-radius: 4px;
      color: #00301b;
      font-size: 15px;
    }

  }
`;
