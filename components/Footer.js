import Image from 'next/image';

import { 
    footerInformation, 
    footerContainer, 
    icons, 
    socialIcons
} from '../styles/Footer.module.css';
import { faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Opensea, Etherscan } from '../public/images';


const Footer = () => {
    return(
        <>
            <div className={footerContainer}>
                    <div className={footerInformation}>
                        <div className={icons}>
                            <a href='https://twitter.com/KegPlebs'><FontAwesomeIcon icon={faTwitter} className={socialIcons}/></a>
                            <a href='https://discord.gg/zEWcPMS7Uf'><FontAwesomeIcon icon={faDiscord} className={socialIcons}/></a>
                            <a href='#'><Image src={Opensea} quality={100} height={30} width={30}></Image></a>
                            <a href='#'><Image src={Etherscan} quality={100} height={30} width={30}></Image></a>
                        </div>
                        <p>© Keg Plebs 2021</p>
                    </div>
                    <a href="https://raritysniper.com/"></a>
            </div>
        </>
    )
}

export default Footer