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

import Mids from '../components/Mids';
import { container, backgroundImage, navElement } from '../styles/Layout.module.css'
import { siteTitle } from '../components/Layout'

const Home = () => {

  return (
    <>
      <Nav />
      <div className={container}>
        <Head>
          <title>{siteTitle}</title>
        </Head>
          
        <div className={backgroundImage}></div>
        <Element id='top' name='top' className={navElement}>
          <Main></Main>
        </Element>
        <Element id='brewverse' name='brewverse' className={navElement}>
          <Brewverse></Brewverse>
        </Element>
        <Mids></Mids>
        <Element id='about' name='about' className={navElement}>
          <Story></Story>
        </Element>
        <Mids></Mids>
        <Showcase></Showcase>
        <Mids></Mids>
        <FAQ></FAQ>
        <Mids></Mids>
        <Roadmap></Roadmap>
        <Element id='team' name='team' className={navElement}>
          <Team></Team>
        </Element>
      </div>
    </>
  )
}

export default Home;
