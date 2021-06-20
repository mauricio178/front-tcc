import styled from "styled-components";


export const Container = styled.button`
  padding: 6px 20px;
  font-size: 15px;
  border-radius: 4px;
  border: none;
  background: var(--background-ligth);
  color: #fff;    
  box-shadow: 0px 5px 0px #dedede;
  transition: position  0.2s;

  &:active {
    position: relative;
    top: 3px;
    box-shadow: 0px 2px 0px #dedede;

  }    

  &:hover{
    filter: brightness(.9);
    /* transition: .4s; */
  }
`