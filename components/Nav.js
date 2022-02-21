import { useEffect, useState } from 'react';
import Image from 'next/image';
import { scroller } from 'react-scroll';

import { faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Passport from '../public/pdfs/Pleb_Passport_2.pdf';

import { Fade, Fade as Hamburger } from 'hamburger-react'

import { Opensea, Etherscan, Icon } from '../public/images';
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
    userInfo, 
    userIconContainer,
    userAddi,
    navLogo
} from '../styles/Nav.module.css';

import Connect from './Connect';

const Nav = ({enabled}) => {
    const [active, setActive] = useState(false);
    const [screenWidth, setScreenWidth] = useState(20000); 
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
        console.log('handle click clicked')
        setActive(!active);
    }

    const toBrewverse = () => {
        scroller.scrollTo('brewverse', {
            duration: 500,
            smooth: true,
            offset: -50  
        })
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

    const handleIconDisplay = (address, img) => {
        if(img.length > 0) {
            setUserIcon(Icon);
        } else {
            setUserIcon('');
        }
        setUserAddress(address);
    }

    return (
        <nav 
            className={nav}
            style={{
                pointerEvents: enabled ? 'auto' : 'none'
            }}
        >
            <div className={logoGroup}>
                <a onClick={toTop}>
                    <div className={navLogo}></div>
                    {/* <Image src={NavLogo} quality={100} priority={true} height={190} width={337}></Image> */}
                </a>
                {
                    userAddress.length > 0 ? (
                    <div className={userInfo}>
                        <div className={userIconContainer}>
                            <Image src={userIcon} quality={100} height={50} width={50}></Image>
                        </div>
                        <div className={userAddi}>{ 
                            String(userAddress).substring(0, 6) +
						 	"..." +
						 	String(userAddress).substring(38) }</div>
                    </div>) : (<></>)
                }
                {
                    (screenWidth < screen) && (enabled) ? 
                    <button className={menu} onClick={handleClick}>
                        <Fade direction='left'/>
                    </button> :
                    <></>
                }
            </div>
            {
                (active || screenWidth > screen) ? (
                <>
                    <ul className={linkGroup}
                        style={{
                            visibility: enabled ? 'visible' : 'hidden'
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
                            visibility: enabled ? 'visible' : 'hidden'
                        }}
                    >
                        <div className={icons}>
                            <a className={a} href='https://twitter.com/KegPlebs'><FontAwesomeIcon icon={faTwitter} className={socialIcons}/></a>
                            <a className={a} href='https://discord.gg/zEWcPMS7Uf'><FontAwesomeIcon icon={faDiscord} className={socialIcons}/></a>
                            <a className={a} href='#'><Image src={Opensea} quality={100} height={30} width={30}></Image></a>
                            <a className={a} href='#'><Image src={Etherscan} quality={100} height={30} width={30}></Image></a>
                        </div>
                        <Connect onConnected={handleIconDisplay}/>
                    </div>
                </>) :
                <></>
            }
        </nav>
    )
}

export default Nav