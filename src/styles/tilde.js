import React from 'react'
import { css } from 'emotion'
import { noSelect } from './utils'

// TODO: Create a Tilde with SVG
const Tilde = () => (
  <p
    className={css`
      ${noSelect};
      font-size: 22px;
      grid-area: tilde;
    `}
  >
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  </p>
)

export default Tilde
