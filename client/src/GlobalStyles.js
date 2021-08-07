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
        font-family: 'Jua', sans-serif;
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
        font-family: 'Jua', sans-serif;
        border: none;
        border-radius: 0.5rem;
        outline: none;
    }
    textarea {
        font-family: 'Jua', sans-serif;
        border-radius: 0.5rem;
        resize: none;
    }
    select {
        font-family: 'Jua', sans-serif;
        border-radius: 0.5rem;
    }
`;

export default GlobalStyles;
