import React from 'react'
import { css } from 'emotion'
import { noSelect } from '../styles/utils'

// FIXME: Hides all backslashes when max h
const Header = ({ title }) => {
  const trimTitle = title === '/' ? '' : title
  return (
    <span
      className={css`
        ${noSelect};
        font-size: 2.2em;
        grid-area: header;
        overflow: hidden;
        min-width: 0;
        min-height: 0;
        max-width: 96vw;
        max-height: 5vh;
      `}
    >
      /usr{trimTitle} \\\\\\\\\\
    </span>
  )
}

export default Header
