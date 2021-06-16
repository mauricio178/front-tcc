import styled from 'styled-components'

export const Container = styled.div`
display: flex;
height: 50px;
width: 100%;
align-items: center;
    flex-direction: row;
    justify-content: space-between;

background:	transparent;
  div {
    display: flex;
    width: 100%;
    margin: 2px;
    padding: 1px;
    background: white;
    opacity: 0.9;
    border-radius: 3px;
    box-shadow: 0 0 1px;
    align-items: center;
    flex-direction: row;
     :hover{
       opacity: 1;
       color: black;
       transition: 0.5s;
     }
  } 
`;

