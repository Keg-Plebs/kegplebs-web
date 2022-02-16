import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import {
    sectionContainer,
    sectionHeader,
    sectionText,
    sectionImage,
    digital,
    arrow
} from '../styles/EtherOrcs.module.css';
 
const EtherOrcs = () => {
    return(
        <>
            <div className={digital}>
                    <h2>DIGITAL<FontAwesomeIcon className={arrow} icon={faArrowDown}/></h2>
            </div>
            <div className={sectionContainer}>
                <div className={sectionImage}></div>
                <div className={sectionText}>
                    <h1>Keg Plebs X EtherOrcs</h1>
                    <br/>
                    <p>When an orc aks for beer...you give it to 'em.</p>
                    <br/>
                    <p>Welcoming in our first NFT partner Project, the EtherOrcs. Part of our mission has always been to celebrate the power of unlikely connections and the bonds brewed over a few drinks - but when it comes to NFT/crypto education - we can not go it alone. If you are going to open the doors of Web3 to local communities you have to highlight best in class projects: innovative and creative communities pioneering new standards and elevating the space as a whole. Projects that we can trust and projects our average pleb can trust too.</p>
                    <br/>
                    <p>EtherOrcs beer drops 3/17 in Miami @TheTankBrewing</p>
                </div>
            </div>
    </>
    )
}

export default EtherOrcs