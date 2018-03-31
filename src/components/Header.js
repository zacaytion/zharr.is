import React from 'react'
import { css } from 'emotion'
import { noSelect } from '../styles/utils'

const Header = ({ title }) => (
  <span
    className={css`
      ${noSelect};
      font-size: 20px;
      grid-area: header;
    `}
  >
    /usr{title} \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  </span>
)

export default Header
