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
  max-width: 100vw;
  max-height: 110vh;
`

const Grid = styled.div`
  margin-top: 20px;
  margin-left: 20px;
  min-height: 0;
  min-width: 0;
  display: grid;
  grid-template-columns: 5% auto;
  grid-template-rows: 20% 10% auto;
  grid-row-gap: 10px;
  grid-column-gap: 20px;
  grid-template-areas:
    'logo navigation'
    '. header'
    'tilde content';
`
const Content = styled.div`
  grid-area: content;
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
