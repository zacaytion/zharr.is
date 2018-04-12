import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'react-emotion'
import config from '../../data/config'
// import globals from '../styles/global'
import Z from '../components/Z'
import Header from '../components/Header'
import Navigation from '../components/Nav'
import Tilde from '../styles/tilde'

const Container = styled.div`
  max-width: 1200px;
  max-height: 98vh;
  overflow-x: hidden;
  padding: 10px 10px; 
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3% 97%;
  grid-template-rows: 15% 10% auto;
  grid-row-gap: 10px;
  grid-column-gap: 20px;
  grid-template-areas:
    'logo navigation'
    '. header'
    'tilde content';
`
const Content = styled.div`
  grid-area: content;
  padding-right: 20px;
  padding-left: 5px;
  max-height: 71vh;
  overflow-y: scroll;
  overflow-x: hidden;
  overflow-wrap: break-word;
`

 
const TemplateWrapper = ({ location, children }) => (
  <Container>
    <Helmet
      title={config.siteDescription}
      meta={[{ name: 'description', content: config.siteDescription }]}
    />
    <Grid>
      <Z />
      <Navigation path={location.pathname} />
      <Header title={location.pathname} />
      <Tilde />
      <Content>{children()}</Content>
    </Grid>
  </Container>
)

TemplateWrapper.propTypes = {
  location: PropTypes.object,
  children: PropTypes.func,
}

export default TemplateWrapper
