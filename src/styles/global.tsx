import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    * {
        /* overflow-x: hidden;  */
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: 0;
        text-decoration: none;
        font-family: 'Roboto', sans-serif;
    }

    #root{
        position:relative;
        min-height: 100vh;
        /* height: 100%; */
        max-width: 960px;
    }

    html, body {
        width: 100%;
        height: 100%;
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
`