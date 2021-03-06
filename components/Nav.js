import { useEffect, useState } from 'react';
import Image from 'next/image';
import { scroller } from 'react-scroll';

import { faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Passport from '../public/pdfs/Pleb_Passport_2.pdf';

import { Fade, Fade as Hamburger } from 'hamburger-react'

import { Opensea, Etherscan } from '../public/images';
import { 
    nav, 
    logoGroup, 
    linkGroup, 
    socialGroup, 
    socialIcons, 
    icons, 
    a, 
    link, 
    li, 
    menu,
    smallScreenRightSide,
    navLogo
} from '../styles/Nav.module.css';

import Connect from './Connect';

const Nav = ({enabled: navEnabled, enableBar}) => {
    const [active, setActive] = useState(false);
    const [screenWidth, setScreenWidth] = useState(0); 
    const [userIcon, setUserIcon] = useState('');
    const [userAddress, setUserAddress] = useState('');
    const [hovered, setHovered] = useState('false');

    const screen = 1700;

    useEffect(() => {
        setScreenWidth(window.innerWidth);

        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', changeWidth)
        return () => {
            window.removeEventListener('resize', changeWidth);
        }
    }, []);

    const handleClick = () => {
        setActive(!active);
    }

    const toBrewverse = () => {
        // scroller.scrollTo('brewverse', {
        //     duration: 500,
        //     smooth: true,
        //     offset: -50  
        // })
        enableBar(true)
        setActive(!active);
    }

    const toAbout = () => {
        scroller.scrollTo('about', {
            duration: 500,
            smooth: true,
            offset: 120
        })
    }

    const toTeam = () => {
        scroller.scrollTo('team', {
            duration: 500,
            smooth: true,
            offset: -100
        })
    }

    const toTop = () => {
        scroller.scrollTo('top', {
            duration: 500,
            smooth: true,
            offset: -100
        })
    }

    const handleConnect = (address) => {
        setUserAddress(address);
    }

    return (
        <nav 
            className={nav}
        >
            <div className={logoGroup}>
                <a onClick={toTop}>
                    <div className={navLogo}></div>
                </a>
                {
                    (screenWidth < screen) && (navEnabled) ? 
                    (
                        <button className={`${menu} ${smallScreenRightSide}`} onClick={handleClick}>
                            <Fade direction='left'/>
                        </button>
                    ): 
                    (
                        (!navEnabled && screenWidth < screen) ? 
                        <div className={smallScreenRightSide}>
                            <Connect onConnected={handleConnect}/>
                        </div> 
                        :
                        <></>
                    ) 
                }
            </div>
            {
                (active || screenWidth > screen) ? 
                    <>
                        <ul className={linkGroup}
                            style={{
                                visibility: navEnabled ? 'visible' : 'hidden'
                            }}
                        >
                            <li className={li}>
                                <span className={link}><a onClick={toBrewverse} href="#">MINT</a></span>
                            </li>
                            <li className={li}>
                                <span className={link}><a onClick={toAbout} href="#">ABOUT</a></span>
                            </li>
                            <li className={li}>
                                <span className={link}><a onClick={toTeam} href="#">TEAM</a></span>
                            </li>
                            <li className={li}>
                                <span className={link}><a href='/pdfs/Pleb_Passport_2.pdf'>PLEBPASS</a></span>
                            </li>
                            <li className={li}>
                                <span className={link}><a href='/pdfs/The_CollaBREWERY_Ecosystem.pdf'>ECOSYSTEM</a></span>
                            </li>
                        </ul>

                        <div className={socialGroup}
                            style={{
                                visibility: navEnabled ? 'visible' : 'hidden'
                            }}
                        >
                            <div className={icons}>
                                <a className={a} href='https://twitter.com/KegPlebs'><FontAwesomeIcon icon={faTwitter} className={socialIcons}/></a>
                                <a className={a} href='https://discord.gg/zEWcPMS7Uf'><FontAwesomeIcon icon={faDiscord} className={socialIcons}/></a>
                                <a className={a} href='https://opensea.io/collection/kegplebs'><Image src={Opensea} quality={100} height={30} width={30}></Image></a>
                                <a className={a} href='https://etherscan.io/address/0x74ba9caaa5847e142263d5F7645fFeD92e5087E5'><Image src={Etherscan} quality={100} height={30} width={30}></Image></a>
                            </div>
                        </div>
                    </> :
                <></>
            }
            {   
                (!navEnabled && screenWidth > screen) ? 
                <div className={smallScreenRightSide}>
                    <Connect onConnected={handleConnect}/>
                </div> 
                :
                <></>
            }
        </nav>
    )
}

export default Nav