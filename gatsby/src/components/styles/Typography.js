import { createGlobalStyle } from 'styled-components';

import cenwoff from '../../assets/fonts/CenturySchoolbookBT-Monospace.woff';
import cengwoff2 from '../../assets/fonts/CenturySchoolbookBT-Monospace.woff2';

export const Typography = createGlobalStyle`
@font-face {
    font-family: 'CentSchbook Mono BT';
    src: url('${cengwoff2}') format('woff2'),
        url('${cenwoff}') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}
:root {
    --regular: 'CentSchbook Mono BT', monospace;
}
a {
    color: var(--black);
}
h1 {
    font-size: var(--jumbo);
    font-family: var(--xl-black);
}
h2 {
    font-size: var(--headline-2);
}
h3 {
    font-size: var(--headline-3);
}
h4 {
    font-size: var(--headline-4);
}
h5 {
    font-size: var(--headline-5);
}
h6 {
    font-size: var(--headline-6);
}
p, a, li, .paragraph {
  font-size: var(--paragraph);
  line-height: 132%;
}
.small {
  font-size: var(--small);
}
.detail {
  font-size: var(--detail);
  letter-spacing: .8px;
}
h1, h2, h3, h4, h5, h6 {
  line-height: 100%;
}
h1, h2, h3, h4, h5, h6, p.detail, p.caps {
  text-transform: uppercase !important;
  font-weight: normal;
}
.regular {
  font-family: var(--regular);
}
.light {
  font-family: var(--light);
}
.medium {
  font-family: var(--medium);
}
.bold {
  font-family: var(--bold);
}
.black {
  font-family: var(--black);
}
`