import React from 'react'
import { css } from 'emotion'
import { noSelect } from './utils'

// TODO: Create a Tilde with SVG
const Tilde = () => (
  <span
    className={css`
      ${noSelect};
      font-size: 1.5rem;
      grid-area: tilde;
      overflow: hidden;
      min-height: 0;
      min-width: 0;
      max-height: 86vh;
      padding-left: 4px;
    `}
  >
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  </span>
)

export default Tilde
