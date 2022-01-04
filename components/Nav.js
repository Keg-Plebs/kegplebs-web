import Link from 'next/link';
import Image from 'next/image';
import { faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { NavIcon, Opensea, NeonSign, Etherscan } from '../public/images';

import { nav, logoGroup, linkGroup, socialGroup, socialIcons, a, link, li } from '../styles/Nav.module.css';
import Layout from './Layout';

const Nav = () => {
    return (
        <nav className={nav}>
                <div className={logoGroup}>
                    <Image src={NeonSign} quality={100} priority={true} height={75} width={350}></Image>
                </div>
                <ul className={linkGroup}>
                    <li className={li}>
                        <span className={link}><Link href="/">BREWVERSE</Link></span>
                    </li>
                    <li className={li}>
                        <span className={link}><Link href="/">ABOUT</Link></span>
                    </li>
                    <li className={li}>
                        <span className={link}><Link href="/">TEAM</Link></span>
                    </li>
                </ul>
                <div className={socialGroup}>
                    <a className={a} href='https://twitter.com/KegPlebs'><FontAwesomeIcon icon={faTwitter} className={socialIcons}/></a>
                    <a className={a} href='https://discord.gg/xjfpxWajXH'><FontAwesomeIcon icon={faDiscord} className={socialIcons}/></a>
                    <a className={a} href='#'><Image src={Opensea} quality={100} height={40} width={40}></Image></a>
                    <a className={a} href='#'><Image src={Etherscan} quality={100} height={40} width={40}></Image></a>
                </div>
        </nav>
    )
}

export default Nav