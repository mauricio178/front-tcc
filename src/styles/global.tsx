import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    :root {
        --background: #338D8C;
        --background-ligth: #34B6B4;

        --secondary-color: #E9E8E8;
        --title-color: #7B7979;
        --text-color: #BBBBBB;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }
        
        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-family: 'Roboto', sans-serif;
        font-weight: 600;
    }

    a {
        text-decoration: none;
    }

    body { 
        background:  var(--secondary-color);
        --webkit-font-smoothing: antialiased;
    }


    #root{
        position:relative;
        min-height: 100vh;
        /* height: 100%; */
        /* max-width: 960px; */
    }

    html, body {
        /* width: 100%; */
        /* height: 100%; */
    }

    a:link {
        color:#fff;
    }

    /* visited link */
    a:visited {
        color:#fff;
    }

    /* mouse over link */
    a:hover {
        color:#fff;
    }

    /* selected link */
    a:active {
        color:#fff;
    }

    button {
        cursor: pointer;
    }
    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    /* MODAL */
    .react-modal-overlay{
        background: rgba(0, 0, 0, .5);
        
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .react-modal-content {
        width: 100%;
        max-width: 576px;
        background-color: var(--secondary-color);
        padding: 3rem;
        position: relative;            
        border-radius: 0.25rem;
    }
    .react-modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background-color: transparent;
        transition: filter 0.2s;
        &:hover {
            filter: brightness(0.8);
        }
    }
`