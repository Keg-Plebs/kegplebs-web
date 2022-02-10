import Head from 'next/head'
import Image from 'next/image'
import Scroll from 'react-scroll'
const Element = Scroll.Element;
const Scroller = Scroll.scroller;

import Nav from '../components/Nav'
import Main from '../components/Main'
import Story from '../components/Story'
import Showcase from '../components/Showcase'
import Brewverse from '../components/Brewverse'
import FAQ from '../components/FAQ'
import Team from '../components/Team'
import Roadmap from '../components/Roadmap'
import Collabs from '../components/Collabs'
import Footer from '../components/Footer'

import Mids from '../components/Mids';
import { container, backgroundImage, navElement, footer } from '../styles/Layout.module.css'
import { siteTitle } from '../components/Layout'

const Home = () => {

  return (
    <>
      <Nav />
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
            <Brewverse></Brewverse>
          </Element>
          <Mids></Mids>
            {/* <Story></Story> */}
          <Collabs></Collabs>
          <Mids></Mids>
          <Element id='about' name='about' className={navElement}>
            <Roadmap></Roadmap>
          </Element>
          <FAQ></FAQ>
          <Element id='team' name='team' className={navElement}>
            <Team></Team>
          </Element>
        </div>
        <div className={footer}>
          <Footer></Footer>
        </div>
      </div>
    </>
  )
}

export default Home;