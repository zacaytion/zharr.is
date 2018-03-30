import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'react-emotion'
import config from '../../data/config'
// import globals from '../styles/global'
import Border from '../components/Border'
import Header from '../components/Header'
import Navigation from '../components/Nav'
import Tilde from '../styles/tilde'

const Container = styled.div`
  margin-top: 20px;
  margin-left: 20px;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 20px auto;
  grid-template-rows: 50px 50px auto;
  grid-gap: 10px;
`
const TemplateWrapper = ({ location, children }) => (
  <Container>
    <Helmet
      title={config.siteDescription}
      meta={[{ name: 'description', content: config.siteDescription }]}
    />
    <Border />
    <Navigation />
    <div />
    <Header title={location.pathname} />
    <Tilde />
    <div>{children()}</div>
  </Container>
)

TemplateWrapper.propTypes = {
  location: PropTypes.object,
  children: PropTypes.func,
}

export default TemplateWrapper
