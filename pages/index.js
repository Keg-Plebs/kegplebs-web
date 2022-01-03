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
import styles from '../styles/Layout.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Brewverse></Brewverse>
      <Main></Main>
      <Story></Story>
      <Showcase></Showcase>
      <FAQ></FAQ>
      <Roadmap></Roadmap>
      <Team></Team>

    </div>
  )
}
