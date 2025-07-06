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
    --icon-filter: invert(0%);
    --shadow-color: rgba(0, 0, 0, 1);
}

/* Only apply filter to social icons and poddin vector (not navbar icons since they use styled-components) */
.social-icon,
.poddin-vector,
.arrow-down {
    filter: var(--icon-filter);
    transition: filter 0.3s ease;
}

/* Shadow variables for navbar icons */
.navbar-icon {
    filter: var(--icon-filter) drop-shadow(0px 4px 4px var(--shadow-color));
}

body{
    background-color: var(--primary);
    color: var(--secondary);
    transition: background-color 0.3s ease, color 0.3s ease;
    overflow-y: hidden;
    overflow-x: hidden;
    min-width: 100%;
}
`;

export default GlobalStyle;
