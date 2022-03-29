import { createGlobalStyle } from "styled-components";
import FontStyle from "../fonts/fontStyles";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
:root{
    --primary: #000000ff;
    --secondary: #ffffffff;
}
body{
    background-color: var(--secondary);
    overflow-y: scroll;
    overflow-x: hidden;
    min-width: 100%;
    font-family: "Montserrat-regular";
}
`;

export default GlobalStyle;
