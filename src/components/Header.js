import React from 'react'
import Backslash from '../styles/backslash'

const Header = ({ title }) => (
  <div>
    <p>/usr{title}</p>
    <Backslash />
  </div>
)

export default Header
