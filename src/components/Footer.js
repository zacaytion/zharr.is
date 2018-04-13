import React from 'react'
import styled from 'react-emotion'
import config from '../../content/config'

const Div = styled.footer`
  margin-top: 2.5rem;
  text-align: center;
    p {
      margin-bottom: 0 !important;
    }
`
const Footer = () => (
    <Div>
        <p>{config.copyright}</p>
    </Div>
)

export default Footer
