
import Image from 'next/image';

import { transparentOverlay, footerInformation, footerContainer, icons, socialIcons, a, logo } from '../styles/Footer.module.css';
import { faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Opensea, Etherscan } from '../public/images';


const Footer = () => {
    return(
        <>
            <div className={footerContainer}>
                
                <div className={transparentOverlay}>
                    <div className={footerInformation}>
                        <div className={icons}>
                            <a className={a} href='https://twitter.com/KegPlebs'><FontAwesomeIcon icon={faTwitter} className={socialIcons}/></a>
                            <a className={a} href='https://discord.gg/xjfpxWajXH'><FontAwesomeIcon icon={faDiscord} className={socialIcons}/></a>
                            <a className={a} href='#'><Image src={Opensea} quality={100} height={40} width={40}></Image></a>
                            <a className={a} href='#'><Image src={Etherscan} quality={100} height={40} width={40}></Image></a>
                        </div>
                        <p>© Keg Plebs 2021</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer