import { injectGlobal } from 'styled-components';


injectGlobal`
html {
  box-sizing: border-box;
  background: #ffc600;
  font-family: 'helvetica neue';
  font-size: 20px;
  font-weight: 200;
}
*, *:before, *:after {
  box-sizing: inherit;
}
a {
  color:black;
  background: rgba(0,0,0,0.1);
  text-decoration: none;
}
`
