import { useEffect, useState } from 'react';
import Image from 'next/image';
import { scroller } from 'react-scroll';

import { faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Opensea, Etherscan, NavLogo, Icon } from '../public/images';
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
    userAddi
} from '../styles/Nav.module.css';

import Connect from './Connect';

const Nav = props => {
    const [active, setActive] = useState(false);
    const [screenWidth, setScreenWidth] = useState(20000); 
    const [userIcon, setUserIcon] = useState('');
    const [userAddress, setUserAddress] = useState('');
    const [hovered, setHovered] = useState('false');

    useEffect(() => {
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

    const handleIconDisplay = (address, img) => {
        if(img.length > 0) {
            setUserIcon(Icon);
        } else {
            setUserIcon('');
        }
        setUserAddress(address);
    }

    return (
        <nav className={nav}>
            <div className={logoGroup}>
                <a onClick={toTop}>
                    <Image src={NavLogo} quality={100} priority={true} height={225} width={400}></Image>
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
            </div>
            {(
                (active || screenWidth > 1700) && (
                <>
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
                        <div className={icons}>
                            <a className={a} href='https://twitter.com/KegPlebs'><FontAwesomeIcon icon={faTwitter} className={socialIcons}/></a>
                            <a className={a} href='https://discord.gg/xjfpxWajXH'><FontAwesomeIcon icon={faDiscord} className={socialIcons}/></a>
                            <a className={a} href='#'><Image src={Opensea} quality={100} height={40} width={40}></Image></a>
                            <a className={a} href='#'><Image src={Etherscan} quality={100} height={40} width={40}></Image></a>
                        </div>
                        <a className={a} href='#'><Connect onConnected={handleIconDisplay}/></a>
                    </div>
                </>)
            )}
            
            <button className={menu} onClick={handleClick}>
                <FontAwesomeIcon icon={faBars} id='hamburg' className={socialIcons}/>
            </button>
        </nav>
    )
}

export default Nav