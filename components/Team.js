import Image from 'next/image'
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import tsiz from '../public/drooly.jpeg';
import oozic from '../public/oozic.jpeg';
import sj from '../public/flowers.jpeg';
import shdw from '../public/bitchass.jpeg';
import jefftheworm from '../public/jefftheworm.jpeg';

import sectionStyles from '../styles/Section.module.css';
import styles from '../styles/Team.module.css';

const Team = () => {
    
    const size = 350;


    return(
        <div className={`${sectionStyles.main} ${styles.team}`}>
            <h1>THE KEG PLEB SCIENTISTS</h1>
            <div className={styles.container}>
                <div className={styles.card} id="sj">
                    <div className={styles.img}>
                        <Image src={sj} quality={100} width={size} height={size}></Image>
                    </div>
                    <div className={styles.heading}>
                        <h3 className={styles.name}>SJ</h3>
                        <a href='https://twitter.com/Sjams_'><FontAwesomeIcon icon={faTwitter} className={styles.twitter}/></a>
                    </div>
                    <p className={styles.title}>MARKETING / CO-FOUNDER</p>
                </div>
                <div className={styles.card} id="oozic">
                    <div className={styles.img}>
                        <Image src={oozic} quality={100} width={size} height={size}></Image>
                    </div>
                    <div className={styles.heading}>
                        <h3 className={styles.name}>IZAAC</h3>
                        <a href='https://twitter.com/izaactoonks'><FontAwesomeIcon icon={faTwitter} className={styles.twitter}/></a>
                    </div>
                    <p className={styles.title}>ART LEAD / CO-FOUNDER</p>
                </div>
                <div className={styles.card} id="tsiz">
                    <div className={styles.img}>
                        <Image src={tsiz} quality={100} width={size} height={size}></Image>
                    </div>
                    <div className={styles.heading}>
                        <h3 className={styles.name}>TSIZ</h3>
                        <a href='https://twitter.com/tsiz_eth'><FontAwesomeIcon icon={faTwitter} className={styles.twitter}/></a>
                    </div>
                    <p className={styles.title}>ADVISOR</p>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.card} id="shdw">
                    <div className={styles.img}>
                        <Image src={shdw} quality={100} width={size} height={size}></Image>
                    </div>
                    <div className={styles.heading}>
                        <h3 className={styles.name}>SHDW</h3>
                        <a href='https://twitter.com/shdw_dev'><FontAwesomeIcon icon={faTwitter} className={styles.twitter}/></a>
                    </div>
                    <p className={styles.title}>DEVELOPER</p>
                </div>
                <div className={styles.card} id="jefftheworm">
                    <div className={styles.img}>
                        <Image src={jefftheworm} quality={100} width={size} height={size}></Image>
                    </div>
                    <div className={styles.heading}>
                        <h3 className={styles.name}>JEFFTHEWORM</h3>
                        <a href='https://twitter.com/JefftheWorm'><FontAwesomeIcon icon={faTwitter} className={styles.twitter}/></a>
                    </div>
                    <p className={styles.title}>DEVELOPER</p>
                </div>
            </div>
        </div>
    )
}

export default Team