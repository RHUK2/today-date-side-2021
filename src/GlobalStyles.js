import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset}
    * {
        box-sizing: border-box;
    }
    html {
        font-size: 62.5%;
    }
    body {
    }
    button {
        border: none;
        border-radius: 0.5rem;
        cursor: pointer;
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
    }
`;

export default GlobalStyles;
