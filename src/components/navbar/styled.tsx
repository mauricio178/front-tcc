import styled from 'styled-components'

export const MenuBar = styled.div`
    position: absolute;
    height: 100%;
    width: 80px;
    z-index: 1;
    height: 510px;
    background: #00008B;
    padding-top: 10px;
    justify-items: left;
`;


export const Titlle = styled.h2`
    font-size: 20px;
    padding: 2px;
    font-family: Century Gothic;
    color: white;
    margin-bottom: 5px;
`;

export const Button = styled.button`
    display: flex;
    font-family: Century Gothic;
    background: transparent;
    padding: 3px;
    margin-top: 8px;
    border: 1px solid gray;
    
    :hover {
        background-color: #008080;
        color: white;
      }
`;

export const Nav = styled.div`
text-align: left;

`;