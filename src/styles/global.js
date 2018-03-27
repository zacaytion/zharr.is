import { injectGlobal } from 'emotion'

injectGlobal`
 * {
    box-sizing: border-box;
    -webkit-overflow-scrolling: touch;
  }
  body {
    font-family: "Space Mono,
    "sans-serif";
  }
  
  *::-webkit-scrollbar {
    width: 6px;
  }
  *::-webkit-scrollbar-track {
    background: #eee;
  }
  *::-webkit-scrollbar-thumb {
    background-color: #ccc;
  }
  [data-whatintent="mouse"] *:focus {
    outline: none;
  }
`
