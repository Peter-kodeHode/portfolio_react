import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none; /* This single line fixes the blue focus outlines */
}

:root{
    --primary: #ffffffff;
    --secondary: #000000ff;
}

body{
    background-color: var(--primary);
    overflow-y: hidden;
    overflow-x: hidden;
    min-width: 100%;
}
`;

export default GlobalStyle;
