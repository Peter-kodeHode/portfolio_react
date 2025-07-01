import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none; /* This single line fixes the blue focus outlines */
}

:root{
    --primary: #000000ff;
    --secondary: #ffffffff;
}

body{
    background-color: var(--secondary);
    overflow-y: hidden;
    overflow-x: hidden;
    min-width: 100%;
}
`;

export default GlobalStyle;
