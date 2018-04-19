import React from 'react'
import styled from 'react-emotion'
import Footer from '../components/Footer'

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-areas:
    "bio contact";
  justify-items: start;
`
const Bio = styled.div`
  grid-area: bio;
  display: grid;
  padding-right: 3em;
  grid-template-rows: 3em auto;
`
const Contact = styled.div`
  grid-area: contact;
  display: grid;
  justify-self: center;
  grid-template-rows: repeat(6, 4em);
  width: 100%;
  text-align: center;
  align-items: center;
`

const About = styled.h3`
  text-align: center;
  align-self: center; 
  justify-self: center;
`

const ContactItem = styled.div`
`
const Whoami = () => (
  <Grid>
    <Bio>
      <About>About</About>
      <p>Zachary Harris is a programmer, former-entrepreneur & licenced armchair philosopher. He is particularly enthusiastic about co-operative organizations, multi-generational cross-cultural dance music, immersive media, & applied ethics.</p>

      <p>He developed an interest in programming after taking a class in <a href="https://en.wikipedia.org/wiki/First-order_logic" target="_blank" rel="noreferrer noopener">First-order Logic</a>, while studying <a href="https://existentialcomics.com/comic/89" target="_blank" rel="noreferrer noopener">analytic</a> Philosophy at Florida State University. Upon graduation, Zachary moved to Chicago to pursue a career in the music industry. However his dissatisfaction with the commercialization of music and the lack of intellectual stimulation led Zachary to seek out the challenge of software development.</p>

      <p>After working for a creative studio, building websites for musicians and bands, he spent a year developing mobile applications for startups and small business at <a href="https://www.snapmobile.io/" target="_blank" rel="noreferrer noopener" >Snap Mobile</a>.</p>

      <p>The experience of building apps for start ups gave Zachary the confidence to move to Los Angeles in 2016 — where he co-founded <a href="https://galtea.design" target="_blank" rel="noreferrer noopener">Galatea Design</a>, a writing and project management tool for immersive storytelling. In typical entrepreneurial fashion, Zachary made his way to Silicon Valley as part of a start up <a href="https://www.boost.vc/" target="_blank" rel="noreferrer noopener">accelerator</a> focused on Virtual Reality and Crypto Currencies. Upon discovering that the HBO series &quot;Silicon Valley&quot; is in-fact NOT a satire, he retired his hoodie and left the Bay Area before consuming <a href="https://www.nytimes.com/2017/12/29/dining/raw-water-unfiltered.html" target="_blank" rel="noreferrer noopener" >raw water</a> had become a trend.</p>

      <p>Currently, Zachary’s is searching for jobs while learning about information security. If you’re interested in hiring Zachary or just want chat, please reach out.</p>
    </Bio>
    <Contact>
      <h3>Contact</h3>
      <h4><a href="mailto:z@zharr.is?Subject=Hello" target="_top">z@zharr.is</a></h4>
      <h4><a href="https://twitter.com/zacaytion" target="_blank" rel="noopener noreferrer">Twitter</a></h4>
      <h4><a href="https://github.com/zacaytion" target="_blank" rel="noopener noreferrer">Github</a></h4>
      <h4><a href="https://www.linkedin.com/in/z-a-h" target="_blank" rel="noopener noreferrer">Linkedin</a></h4>
      <h4><a href="https://keybase.io/zah" target="_blank" rel="noopener noreferrer">Keybase</a></h4>
    </Contact>
    <Footer />
  </Grid>
)

export default Whoami
