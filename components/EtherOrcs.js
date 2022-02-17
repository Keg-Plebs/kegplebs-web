import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import {
    sectionContainer,
    mainContent,
    visualContent,
    sectionText,
    sectionImage,
    centerLogo,
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
                <div className={visualContent}>
                    <div className={sectionImage}></div>
                </div>
                <div className={mainContent}>
                    <div className={centerLogo}></div>
                    <div className={sectionText}>
                        {/* <p>When an orc aks for beer...you give it to 'em.</p>
                        <p>Welcoming in our first NFT partner Project, the EtherOrcs. Part of our mission has always been to celebrate the power of unlikely connections and the bonds brewed over a few drinks - but when it comes to NFT/crypto education - we can not go it alone. If you are going to open the doors of Web3 to local communities you have to highlight best in class projects: innovative and creative communities pioneering new standards and elevating the space as a whole. Projects that we can trust and projects our average pleb can trust too.</p> */}
                        <p>EtherOrcs beer drops 3/17 in Miami @TheTankBrewing</p>
                    </div>
                </div>
                
            </div>
    </>
    )
}

export default EtherOrcs