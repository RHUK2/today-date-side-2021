import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset}
    html {
        font-size: 62.5%;
    }
    body {
        box-sizing: border-box;
        padding-top: 80px;
    }
`;

export default GlobalStyles;
