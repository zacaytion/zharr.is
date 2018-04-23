import React from 'react'
import styled from 'react-emotion'
import Link from '../components/Link'

const Div = styled.div`
  padding: 1em 6em 0;
`
const Now = () => (
  <Div>
    <h2>What Am I Doing <em>Now</em>?</h2> 
    <p>
      <strong>I&apos;m currently looking for full-time or contact work</strong>.
      <br /> I&apos;d prefer to work in NYC or remote, but I&apos;m open to other locations.
      <br /> Please <a href="mailto:z@zharr.is?Subject=Work" target="_top">email</a> me if you&apos;re hiring or have any leads.
    </p>
    <p>
     After 18 months of nomadic living while launching a startup, I&apos;ve thrown in in the towel and
      moved in with my parents in Florida while I figure out my next steps and reduce my expenses.
      I am enjoying spending more time with my family and I welcome the opportunity to catch up on my <Link path='/reading'>reading</Link>.
    </p>
    <p>I am volunteering with the coding club at the elementary school where my mother teaches.
      Right now they&apos;re learning programming concepts via <a href='https://www.lego.com/en-us/mindstorms' rel='noopener noreferrer' target='_blank'>LEGO Mindstorms</a> robots.
    </p>
    <p>
        One of the nice aspects of living at home is that I have copious free time.
      I&apos;ve been making use of the time by diving into CS fundamentals as well as learning more about InfoSec.
      Currently I am enrolled in two coursera specializations, one on <a href='https://www.coursera.org/specializations/cyber-security' rel='noopener noreferrer' target='_blank'>Cybersecurity</a> and another on <a href='https://www.coursera.org/specializations/algorithms' rel='noopener noreferrer' target='_blank'>Algorithms</a>.
    </p>
    <p>
     I am working on building a daily writing habit, with the intention of blogging weekly.
      I hope to have posts up soon about programming, infosec and my experience with entrepreneurship.
    </p>
    <p><em>This was updated on April 19th, 2018</em>
      
      This page is inspired by Derek Sivers. <br />Learn more at <a href='https://nownownow.com/about' rel='noopener noreferrer' target='_blank'>nownownow.com</a>
    </p>
  </Div>
)

export default Now
