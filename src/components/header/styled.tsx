import styled from 'styled-components'


export const AreaHeader = styled.div`
background-image: linear-gradient(to right, #008080, white);

    position: fixed;
    top:0;
    left: 0;

    
    .container{
        margin-left: 70em;
        padding:;
        display: flex;
        align-items: center;
    }
        .logo{
            flex: 1;
            position: absolute;
            max-width: 2px;
            max-height: 1px;
            width: auto;
            height: auto;

            .img{
                
            }
        }

        nav {
            ul {
                display: flex;
            }

            li {
                list-style: none;
                margin-left: 20px;
                    
                a {
                    text-decoration: none;
                    color: black;
                    }
            }
        }
`;