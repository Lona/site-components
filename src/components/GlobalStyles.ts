import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
html {
  box-sizing: border-box;
  font-family: sans-serif;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  text-size-adjust: 100%;
  text-rendering: optimizeLegibility;
  -webkit-tap-highlight-color: transparent;
  height: 100%;
  font-family: -apple-system, BlinkMacSystemFont, San Francisco, Roboto,
    Segoe UI, Helvetica Neue, sans-serif;
  background-color: #ffffff;
  overflow-y: auto;
}

*,
*::after,
*::before {
  box-sizing: inherit;
}

html,
button,
input,
optgroup,
select,
textarea {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0;
  line-height: 1;
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  min-height: 100vh;
}

/* --- Typography */
h1,
h2,
h3,
h4,
h5,
h6,
li,
ol,
p,
ul {
  margin: 0;
  padding: 0;
  font-weight: 400;
  font-style: normal;
}

strong {
  font-weight: bold;
}

small {
  font-size: 80%;
}

sub,
sup {
  position: relative;
  vertical-align: baseline;
  font-size: 75%;
  line-height: 0;
}

sup {
  top: -0.5em;
}

sub {
  bottom: -0.25em;
}

blockquote {
  margin: 0;
}

/* --- Lists */
ol,
ul {
  list-style: none;
}

nav & ol,
nav & ul {
  list-style: none;
  list-style-image: none;
}

/* --- Avoid 300ms click delay on touch devices that support 'touch-action' */
a,
area,
button,
input,
label,
select,
summary,
textarea,
[role='button'] {
  touch-action: manipulation;
}

/* Embedded Content */
img {
  max-width: 100%;
  height: auto;
  border: 0;
}

img,
svg {
  display: block;
}

/*
svg:not(:root) {
  overflow: hidden;
}
*/

/* Grouping Content */
figure {
  margin: 0;
}

hr {
  box-sizing: content-box;
  height: 0;
}

pre {
  overflow: auto;
  margin-top: 0;
  margin-bottom: 0;
}

code,
pre {
  font-family: monospace;
}

/* Forms */
button,
input,
optgroup,
select,
textarea {
  margin: 0;
  padding: 0;
  font: inherit;
  color: inherit;
}

button {
  overflow: visible;
}

button,
select {
  text-transform: none;
}

button,
[role='button'],
input[type='button'],
input[type='reset'],
input[type='submit'] {
  appearance: button;
  cursor: pointer;
}

input[disabled],
button[disabled] {
  cursor: default;
}

input::-moz-focus-inner,
button::-moz-focus-inner {
  padding: 0;
  border: 0;
}

input {
  line-height: normal;
}

input[type='radio'],
input[type='checkbox'] {
  box-sizing: border-box;
  padding: 0;
}

input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  height: auto;
  margin: 0;
  appearance: none;
}

input[type='search'] {
  appearance: textfield;
  /* box-sizing: content-box; */
}

input[type='search']::-webkit-search-decoration,
input[type='search']::-webkit-search-cancel-button {
  appearance: none;
}

fieldset {
  margin: 0;
  padding: 0;
  border: none;
}

legend {
  padding: 0;
  border: 0;
}

textarea {
  overflow: auto;
}

optgroup {
  font-weight: bold;
}

select {
  appearance: none;
  cursor: pointer;
}

button,
input,
select,
textarea {
  border: none;
  border-radius: 0;
  outline: none;
  background: none;
}

[tabindex='-1']:focus {
  /* prevent focus outline on elements that cant be accessed via keyboard */
  /* remove red border for invalid entries */
  outline: none !important;
}

select:focus {
  outline: 0;
}

input,
input:focus,
input:invalid,
button:focus {
  box-shadow: none;
}

::placeholder {
  box-shadow: none;
  opacity: 1;
}

/* Tables */
table {
  border-collapse: collapse;
  border-spacing: 0;
}

td,
th {
  padding: 0;
}
`
