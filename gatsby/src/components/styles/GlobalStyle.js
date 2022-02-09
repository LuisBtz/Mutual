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
    * {
      box-sizing: border-box;
    }
    body {
        background-color: var(--white);
        font-family: var(--regular);
        font-size: 13px;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        margin: 0;
        padding: 0;
        transition: all .125s ease;
        width: 100vw;
        overflow-x: hidden;
        position: relative;
        -webkit-font-smoothing: antialiased;
    }
body.dark {
  background-color: black;
  color: white;
}

body.dark header a {
  filter: invert(1);
}

body.dark svg {
  fill: white;
}

body, html {
  height: 100%;
}

h1, h2, h3, h4 {
  font-family: "Josefin Slab", serif;
}

h1 {
  font-style: italic;
  font-weight: bold;
  font-size: 40px;
}

h2 {
  font-size: 20px;
}

a, a:visited {
  text-decoration: none;
  color: #2e639e;
}


.touchonly {
  display: none;
}

html.touch .touchonly {
  display: block;
}

.noselect, .noselect * {
  user-select: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
}

.doselect, .doselect *:not(.noselect) {
  user-select: text;
  -webkit-user-select: text;
  -khtml-user-select: text;
  -moz-user-select: text;
  -o-user-select: text;
}

.clearfix:after {
  content: ".";
  display: block;
  clear: both;
  visibility: hidden;
  line-height: 0;
  height: 0;
}

.clearfix {
  display: inline-block;
}

html[xmlns] .clearfix {
  display: block;
}

* html .clearfix {
  height: 1%;
}

/*
	Containers
*/

#content-wrapper, #example-wrapper {
  height: 100%;
}

/* #pinContainer {
  width: 100%;
  height: 100%;
  /* overflow: hidden;
}*/


h2 {
  font-weight: normal;
  position: absolute;
  left: 1rem;
}

header a {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: block;
  width: 140px;
  max-width: 100%;
  padding: 0 16px;
}

button {
  -webkit-appearance: none;
  background-color: transparent;
  box-shadow: none;
  border: 0;
  padding: 0;
  margin: 0;
  width: 21px;
  height: 21px;
  cursor: pointer;
}

button svg {
  width: 100%;
  height: 100%;
}

/* a {
  text-decoration: none;
  font-family: serif;
  color: black;
  font-size: 13px;
} */

@media screen and (max-width: 767px) {
  header a {
    width: 150px;
  }
  button {
    width: 24px;
    height: 24px;
  }
}

`