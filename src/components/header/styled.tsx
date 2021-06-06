import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  height: var(--header-height);
  text-align: center;
`;

export const Nav = styled.div`
max-width: 1010px;
padding: 4px;
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
margin: 0 auto;


`;


export const NavRight = styled.div`
  
`;

export const NavLeft = styled.div`
  padding: 4px;
  whidth: 33.333%;
  text-align: left;
`;

export const NavCenter = styled.div`
  whidth: 33.333%;
  text-align: center;
  opacity: 0.6;

`;

export const Lbl = styled.h4`
  font-family: Century Gothic;
`;

export const Lbl2 = styled.h5`
  font-family: Calibri;
  color:	#2F4F4F;
  font-size: 25px;
`;

export const Button = styled.button`
display: inline-block;
font-family: Century Gothic;
border-radius: 3px;
padding: 3px 0;
margin: 8px 10px;
width: 5em;
color: red;
border: 2px solid;
  hover:{background-color: #3e8e41}
`;