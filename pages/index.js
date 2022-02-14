import { useState } from 'react';

import Head from 'next/head'
import Scroll from 'react-scroll'
const Element = Scroll.Element;

import Nav from '../components/Nav'
import Main from '../components/Main'
import Showcase from '../components/Showcase'
import Brewverse from '../components/Brewverse'
import FAQ from '../components/FAQ'
import Team from '../components/Team'
import Roadmap from '../components/Roadmap'
import Collabs from '../components/Collabs'
import Footer from '../components/Footer'

import { container, backgroundImage, navElement } from '../styles/Layout.module.css'
import { siteTitle } from '../components/Layout'

const Home = () => {
  const [brewverseEntered, setBrewverseEntered] = useState(false)

  const handleEnterBrewverse = bool => {
    // setBrewverseEntered(bool);
  }

  return (
    <>
      {
        brewverseEntered ? <></> : <Nav />
      }
      <div className={container}>
        <Head>
          <title>{siteTitle}</title>
        </Head>
          
        <div className={backgroundImage}>
          <Element id='top' name='top' className={navElement}>
            <Main></Main>
          </Element>
          <Showcase></Showcase>
          <Element id='brewverse' name='brewverse' className={navElement}>
            <Brewverse enterBrewverse={handleEnterBrewverse}></Brewverse>
          </Element>
          <Collabs></Collabs>
          <Element id='about' name='about' className={navElement}>
            <Roadmap></Roadmap>
          </Element>
          <FAQ></FAQ>
          <Element id='team' name='team' className={navElement}>
            <Team></Team>
          </Element>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Home;