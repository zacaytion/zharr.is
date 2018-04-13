import React from 'react'
import styled from 'react-emotion'
import config from '../../data/config'

const Div = styled.footer`
  position: absolute;
  right: 0;
  bottom: -35px;
  left: 0;
  text-align: center;
`
const Footer = () => (
    <Div>
        <p>{config.copyright}</p>
    </Div>
)

export default Footer
