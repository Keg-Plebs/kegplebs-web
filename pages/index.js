import Head from 'next/head'
import Image from 'next/image'

import Nav from '../components/Nav'
import Main from '../components/Main'
import Story from '../components/Story'
import Showcase from '../components/Showcase'
import Brewverse from '../components/Brewverse'
import FAQ from '../components/FAQ'
import Team from '../components/Team'
import Roadmap from '../components/Roadmap'

import Mids from '../components/Mids';
import { container, backgroundImage } from '../styles/Layout.module.css'
import { siteTitle } from '../components/Layout'

export default function Home() {
  return (
    <div className={container}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className={backgroundImage}>

      </div>
      <Main></Main>
      <Brewverse></Brewverse>
      <Mids></Mids>
      <Story></Story>
      <Mids></Mids>
      <Showcase></Showcase>
      <Mids></Mids>
      <FAQ></FAQ>
      <Mids></Mids>
      <Roadmap></Roadmap>
      <Mids></Mids>
      <Team></Team>

    </div>
  )
}
