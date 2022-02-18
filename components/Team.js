import Image from 'next/image'
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    Drooly,
    Oozic,
    Flowers,
    Bitchass,
    Jeff,
    Glow
} from '../public/images';

import { 
    team, 
    container, 
    card, 
    img,
    imgBack,
    imgContainer,
    heading, 
    name, 
    twitter, 
    title,
    sectionHeader
} from '../styles/Team.module.css';
import sectionStyles from '../styles/Section.module.css';
import { useEffect, useState } from 'react';


const Team = () => {
    const [screenWidth, setScreenWidth] = useState(20000);
    const size = screenWidth < 400 ? 275 : 350;

    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth);
        }
    }, []);

    return(
        <div className={`${sectionStyles.main} ${team}`}>
            <h1 className={sectionHeader}>KEG PLEB SCIENTISTS</h1>
            <div className={container}>
                <div className={card} id="sj">
                    <div className={imgContainer}>
                        <div className={img}>
                            <Image src={Flowers} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgBack}>
                            <Image src={Glow} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                    </div>
                    <div className={heading}>
                        <h3 className={name}>SJ</h3>
                        <a href='https://twitter.com/Sjams_'><FontAwesomeIcon icon={faTwitter} className={twitter}/></a>
                    </div>
                    <p className={title}>PARTNERSHIPS AND COMMUNITY DIRECTOR</p>
                </div>
                <div className={card} id="oozic">
                    <div className={imgContainer}>
                        <div className={img}>
                            <Image src={Oozic} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgBack}>
                            <Image src={Glow} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                    </div>
                    <div className={heading}>
                        <h3 className={name}>IZAAC</h3>
                        <a href='https://twitter.com/izaactoonks'><FontAwesomeIcon icon={faTwitter} className={twitter}/></a>
                    </div>
                    <p className={title}>ART LEAD</p>
                </div>
                <div className={card} id="tsiz">
                    <div className={imgContainer}>
                        <div className={img}>
                            <Image src={Drooly} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgBack}>
                            <Image src={Glow} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                    </div>
                    
                    <div className={heading}>
                        <h3 className={name}>TSIZ</h3>
                        <a href='https://twitter.com/secondhandgains'><FontAwesomeIcon icon={faTwitter} className={twitter}/></a>
                    </div>
                    <p className={title}>ADVISOR</p>
                </div>
                <div className={card} id="shdw">
                    <div className={imgContainer}>
                        <div className={img}>
                            <Image src={Bitchass} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgBack}>
                            <Image src={Glow} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                    </div>
                    <div className={heading}>
                        <h3 className={name}>SHDW</h3>
                        <a href='https://twitter.com/shdw_dev'><FontAwesomeIcon icon={faTwitter} className={twitter}/></a>
                    </div>
                    <p className={title}>DEVELOPER</p>
                </div>
                <div className={card} id="jefftheworm">
                    <div className={imgContainer}>
                        <div className={img}>
                            <Image src={Jeff} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgBack}>
                            <Image src={Glow} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                    </div>
                    
                    <div className={heading}>
                        <h3 className={name}>JEFFTHEWORM</h3>
                        <a href='https://twitter.com/JefftheWorm'><FontAwesomeIcon icon={faTwitter} className={twitter}/></a>
                    </div>
                    <p className={title}>DEVELOPER</p>
                </div>
            </div>
        </div>
    )
}

export default Team