import { createGlobalStyle } from 'styled-components';

const blue = '#0070f3';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital@1&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Alata&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  body {
    background: #fff;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font-family: "Poppins", sans-serif;
  }
  button {
    cursor: pointer;
  }
`;
