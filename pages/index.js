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
import { useState } from 'react';

const Home = () => {
  const [ navbarEnabled, setNavbarEnabled ] = useState(true);

  return (
    <>
      <Nav enabled={navbarEnabled}/>
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
            <Brewverse  enableNavbar={(bool) => setNavbarEnabled(bool)}></Brewverse>
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

export async function getServerSideProps({ req, res }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )

  return {
    props: {},
  }
}

export default Home;