import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

/* font-family: 'Nanum Gothic', sans-serif; */

const GlobalStyles = createGlobalStyle`
    ${reset}
    * {
        box-sizing: border-box;
    }
    html {
        font-size: 62.5%;
    }
    body {
        font-family: 'Jua', sans-serif;
    }
    button {
        border: none;
        border-radius: 0.5rem;
        cursor: pointer;
        font-family: 'Jua', sans-serif;
        
    }
    a {
        text-decoration: none;
        color: black;
        :visited {
            color: black;
        }
    }
    input {
        outline: none;
        font-family: 'Jua', sans-serif;
        border: none;
        border-radius: 0.5rem;
    }
`;

export default GlobalStyles;
