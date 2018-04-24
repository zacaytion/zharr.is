import { injectGlobal } from 'emotion'

injectGlobal`
 * {
    box-sizing: border-box;
    -webkit-overflow-scrolling: touch;
  }
  {
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
  a {
    color: #ff2c6d;
  }
`
