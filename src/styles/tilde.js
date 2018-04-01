import React from 'react'
import { css } from 'emotion'
import { noSelect } from './utils'

// TODO: Create a Tilde with SVG
const Tilde = () => (
  <span
    className={css`
      ${noSelect};
      font-size: 3em;
      grid-area: tilde;
      overflow: hidden;
      min-height: 0;
      min-width: 0;
      max-height: 80vh;
    `}
  >
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  </span>
)

export default Tilde
