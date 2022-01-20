import Link from 'next/link';
import Image from 'next/image';
import Scroll, { scroller } from 'react-scroll';
const Scroller = Scroll.scroller;

import { faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { NavIcon, Opensea, NeonSign, Etherscan } from '../public/images';

import { nav, logoGroup, linkGroup, socialGroup, socialIcons, a, link, li, connButt } from '../styles/Nav.module.css';
import Layout from './Layout';
import Connect from './Connect';

const Nav = () => {
    const toBrewverse = () => {
        scroller.scrollTo('brewverse', {
            duration: 500,
            smooth: true,
            offset: 100  
        })
    }

    const toAbout = () => {
        scroller.scrollTo('about', {
            duration: 500,
            smooth: true,
            offset: -100
        })
    }

    const toTeam = () => {
        scroller.scrollTo('team', {
            duration: 500,
            smooth: true
        })
    }

    const toTop = () => {
        scroller.scrollTo('top', {
            duration: 500,
            smooth: true
        })
    }



    return (
        <nav className={nav}>
                <div className={logoGroup}>
                    <a onClick={toTop}>
                        <Image src={NeonSign} quality={100} priority={true} height={75} width={350}></Image>
                    </a>
                </div>
                <ul className={linkGroup}>
                    <li className={li}>
                        <span className={link}><a onClick={toBrewverse} href="#">BREWVERSE</a></span>
                    </li>
                    <li className={li}>
                        <span className={link}><a onClick={toAbout} href="#">ABOUT</a></span>
                    </li>
                    <li className={li}>
                        <span className={link}><a onClick={toTeam} href="#">TEAM</a></span>
                    </li>
                </ul>
                <div className={socialGroup}>
                    <a className={a} href='https://twitter.com/KegPlebs'><FontAwesomeIcon icon={faTwitter} className={socialIcons}/></a>
                    <a className={a} href='https://discord.gg/xjfpxWajXH'><FontAwesomeIcon icon={faDiscord} className={socialIcons}/></a>
                    <a className={a} href='#'><Image src={Opensea} quality={100} height={40} width={40}></Image></a>
                    <a className={a} href='#'><Image src={Etherscan} quality={100} height={40} width={40}></Image></a>
                    <a className={a} href='#'><Connect/></a>
                </div>
        </nav>
    )
}

export default Nav