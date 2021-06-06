import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    * {
        /* overflow-x: hidden;  */
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: 0;
        text-decoration: none;
    }

    #root{
        position:relative;
        min-height: 100vh;
        /* height: 100%; */
        /* min-width: 100vw; */
    }

    html, body {
        width: 100%;
        height: 100%;
    }
`