import styled from 'styled-components'

export const Container = styled.div`

  background: #ffffff;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  border-radius: 7px;
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
  margin-left: 8px;
  width: 5%;
`;

export const DivId = styled.div`
  width: 5%;
`;

export const DivName = styled.div`
  width: 20%;
`;

export const DivGerente = styled.div`
  width: 15%;
`;

export const DivVendedor = styled.div`
  width: 15%;
`;

export const DivDateInicio = styled.div`
  width: 15%;
`;

export const DivDateFim = styled.div`
  width: 15%;
`;


export const DivControls = styled.div`
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;


  button{
    display: flex;
  justify-content: center;
  align-items: center;
    cursor: pointer;
    padding: 3px;
    margin: 3px;
    border: 1px solid transparent;
    color: #484041;
    font-size: 16px;
    background: transparent;
    border-radius: 20px;
    :hover {
      transition: 0.8s;
      color: #000000;
      border: 1px solid #484041;
    }

  }
`;
