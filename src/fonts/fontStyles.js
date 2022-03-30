import styled from "styled-components";

const FontStyle = styled.div`
  /* montserrat-regular - latin */
  @font-face {
    font-family: "Montserrat-regular";
    font-style: normal;
    font-weight: 400;
    src: local(""),
      url("../fonts/Montserrat/montserrat-v23-latin-regular.woff2")
        format("woff2"),
      /* Super Modern Browsers */
        url("../fonts/Montserrat/montserrat-v23-latin-regular.woff")
        format("woff"); /* Modern Browsers */
  }

  /* montserrat-600 - latin */
  @font-face {
    font-family: "Montserrat-bold";
    font-style: normal;
    font-weight: 600;
    src: local(""),
      url("../fonts/Montserrat/montserrat-v23-latin-600.woff2") format("woff2"),
      /* Super Modern Browsers */
        url("../fonts/Montserrat/montserrat-v23-latin-600.woff") format("woff"); /* Modern Browsers */
  }

  /* montserrat-700 - latin */
  @font-face {
    font-family: "Montserrat-bolder";
    font-style: normal;
    font-weight: 700;
    src: local(""),
      url("../fonts/Montserrat/montserrat-v23-latin-700.woff2") format("woff2"),
      /* Super Modern Browsers */
        url("../fonts/Montserrat/montserrat-v23-latin-700.woff") format("woff"); /* Modern Browsers */
  }

  /* montserrat-italic - latin */
  @font-face {
    font-family: "Montserrat-italic";
    font-style: italic;
    font-weight: 400;
    src: local(""),
      url("../fonts/Montserrat/montserrat-v23-latin-italic.woff2")
        format("woff2"),
      /* Super Modern Browsers */
        url("../fonts/Montserrat/montserrat-v23-latin-italic.woff")
        format("woff"); /* Modern Browsers */
  }

  /* lato-regular - latin */
  @font-face {
    font-family: "Lato-regular";
    font-style: normal;
    font-weight: 400;
    src: local(""),
      url("../fonts/Lato/lato-v22-latin-regular.woff2") format("woff2"),
      /* Super Modern Browsers */
        url("../fonts/Lato/lato-v22-latin-regular.woff") format("woff"); /* Modern Browsers */
  }

  /* lato-italic - latin */
  @font-face {
    font-family: "Lato-italic";
    font-style: italic;
    font-weight: 400;
    src: local(""),
      url("../fonts/Lato/lato-v22-latin-italic.woff2") format("woff2"),
      /* Super Modern Browsers */
        url("../fonts/Lato/lato-v22-latin-italic.woff") format("woff"); /* Modern Browsers */
  }

  /* lato-700 - latin */
  @font-face {
    font-family: "Lato-bold";
    font-style: normal;
    font-weight: 700;
    src: local(""),
      url("../fonts/Lato/lato-v22-latin-700.woff2") format("woff2"),
      /* Super Modern Browsers */ url("../fonts/Lato/lato-v22-latin-700.woff")
        format("woff"); /* Modern Browsers */
  }
`;

export default FontStyle;
