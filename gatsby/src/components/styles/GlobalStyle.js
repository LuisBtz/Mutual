import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    html {
      scroll-behavior: smooth;
    }
    
    :root {
      --black: #000000;
      --white: #FFFFFF;
      overflow-wrap: break-word;
      --jumbo-xl: 86.29px;
      --jumbo: 4.768rem;
      --headline-1: 3.815rem;
      --headline-2: 3.052rem;
      --headline-3: 2.441rem;
      --headline-4: 1.953rem;
      --headline-5: 1.563rem;
      --headline-6: 1.25rem;
      --paragraph: 1rem;
      --small: 0.8rem;
      --detail: 0.64rem;
      --detail-xs: 0.512rem;
      --gutter: 1rem;
    }
    body {
        background-color: var(--white);
        font-family: var(--regular);
        font-size: 16px;
        -webkit-font-smoothing: antialiased;
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
        font-feature-settings: 'salt' on;
    }
    main {
      background: var(--white) !important;
    }
    * {
      box-sizing: border-box;
    }
    /* Hide scrollbar for Chrome, Safari and Opera */
    ::-webkit-scrollbar {
      display: none;
    }
    ::selection {
      background: black;
      color: white;
    }
    button {
      -webkit-appearance: none;
      background: transparent;
      box-shadow: none;
      border: none;
      cursor: pointer;
    }
    button:focus {
      outline: 0;
    }
`