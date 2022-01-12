import { createGlobalStyle } from 'styled-components';
const Globalstyles = createGlobalStyle`


/*
  1. Use a more-intuitive box-sizing model.
*/
*, *::before, *::after {
  box-sizing: border-box;
}
/*
  2. Remove default margin
*/
* {
  margin: 0;
}
/*
  3. Allow percentage-based heights in the application
*/
html, body {
  height: 100%;
}
/*
  Typographic tweaks!
  4. Add accessible line-height
  5. Improve text rendering
*/
body {
  line-height: 1.5;
  font-family:"CircularStd",serif;
  -webkit-font-smoothing: antialiased;
}
/*
  6. Improve media defaults
*/
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
/*
  7. Remove built-in form typography styles
*/
input, button, textarea, select {
  font: inherit;
}
ul {
    padding: 0;
}
a {
    text-decoration: none;
    cursor: pointer;
}
/*
  8. Avoid text overflows
*/
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
/*
  9. Create a root stacking context
*/
#root, #__next {
  isolation: isolate;

}
#root {
    height: 100%;
}
html {
    --black-color:#000000;
    --link-color:#909090;
    
  --shadow-color: 0deg 0% 0%;
  
  --shadow-elevation-high:
    0.5px 0.5px 0.8px hsl(var(--shadow-color) / 0.1),
    3.2px 2.8px 4.8px -0.4px hsl(var(--shadow-color) / 0.1),
    5.9px 5.2px 8.8px -0.7px hsl(var(--shadow-color) / 0.1),
    9.7px 8.6px 14.6px -1.1px hsl(var(--shadow-color) / 0.1),
    15.5px 13.7px 23.3px -1.4px hsl(var(--shadow-color) / 0.1),
    24.3px 21.5px 36.5px -1.8px hsl(var(--shadow-color) / 0.1),
    36.9px 32.7px 55.5px -2.1px hsl(var(--shadow-color) / 0.1),
    54.4px 48.1px 81.7px -2.5px hsl(var(--shadow-color) / 0.1);
}
`;
export default Globalstyles;
