import Image from 'next/image'
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import tsiz from '../public/drooly.jpeg';
import oozic from '../public/oozic.jpeg';
import sj from '../public/flowers.jpeg';
import shdw from '../public/bitchass.jpeg';
import jefftheworm from '../public/jefftheworm.jpeg';

import sectionStyles from '../styles/Section.module.css';
import { 
    team, 
    container, 
    card, 
    img, 
    heading, 
    name, 
    twitter, 
    title 
} from '../styles/Team.module.css';

const Team = () => {
    const size = 350;

    return(
        <div className={`${sectionStyles.main} ${team}`}>
            <h1>THE KEG PLEB SCIENTISTS</h1>
            <div className={container}>
                <div className={card} id="sj">
                    <div className={img}>
                        <Image src={sj} quality={100} width={size} height={size}></Image>
                    </div>
                    <div className={heading}>
                        <h3 className={name}>SJ</h3>
                        <a href='https://twitter.com/Sjams_'><FontAwesomeIcon icon={faTwitter} className={twitter}/></a>
                    </div>
                    <p className={title}>MARKETING / CO-FOUNDER</p>
                </div>
                <div className={card} id="oozic">
                    <div className={img}>
                        <Image src={oozic} quality={100} width={size} height={size}></Image>
                    </div>
                    <div className={heading}>
                        <h3 className={name}>IZAAC</h3>
                        <a href='https://twitter.com/izaactoonks'><FontAwesomeIcon icon={faTwitter} className={twitter}/></a>
                    </div>
                    <p className={title}>ART LEAD / CO-FOUNDER</p>
                </div>
                <div className={card} id="tsiz">
                    <div className={img}>
                        <Image src={tsiz} quality={100} width={size} height={size}></Image>
                    </div>
                    <div className={heading}>
                        <h3 className={name}>TSIZ</h3>
                        <a href='https://twitter.com/tsiz_eth'><FontAwesomeIcon icon={faTwitter} className={twitter}/></a>
                    </div>
                    <p className={title}>ADVISOR</p>
                </div>
            </div>
            <div className={container}>
                <div className={card} id="shdw">
                    <div className={img}>
                        <Image src={shdw} quality={100} width={size} height={size}></Image>
                    </div>
                    <div className={heading}>
                        <h3 className={name}>SHDW</h3>
                        <a href='https://twitter.com/shdw_dev'><FontAwesomeIcon icon={faTwitter} className={twitter}/></a>
                    </div>
                    <p className={title}>DEVELOPER</p>
                </div>
                <div className={card} id="jefftheworm">
                    <div className={img}>
                        <Image src={jefftheworm} quality={100} width={size} height={size}></Image>
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