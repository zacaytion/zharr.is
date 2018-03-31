import React from 'react'
import { css } from 'emotion'
import { noSelect } from './utils'

// TODO: Create a vim style blackslash with SVG

// data:image/svg+xml;charset=utf8,%3Csvg id='stripe-svg' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 10'%3E%3Cpath d='M-1,1 l2,-2 M0,10 l10,-10 M9,11 l2,-2' stroke='%23fff' stroke-width='1' /%3E%3C/svg%3E

const Backslash = ({ title }) => (
  <p
    className={css`
      ${noSelect};
      font-size: 20px;
    `}
  >
    /usr{title}\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  </p>
)

export default Backslash
