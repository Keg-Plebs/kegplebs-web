
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    sectionContainer,
    sectionHeader,
    sectionImage,
    sectionText,
    physical,
    arrow
} from '../styles/Tank.module.css';


const Tank = () => {

    return (
        <>
            <div className={sectionContainer}>
                <div className={sectionHeader}></div>
                <div className={sectionText}>
                    <h1>Introducing Keg Plebs X The Tank Brewing</h1>
                    <br/>
                    <p>From the very beginning we set out to capture the unique and amazing ability of both craft breweries and NFT projects, to bring people of all walks of life together to form a passionate, inclusive and tight-knit community. In fact, both are grass roots operations and as communities go - the individuals who make the work possible - are also the key to success. The best communities breed super power strength, and with this partnership we have formed, we will do just that. We are full send.</p>
                    <br/>
                    <p>The Tank Brewing is one of the fastest-growing breweries and distributors in the United States.</p>
                    <br/>
                    <p>Located in one of the biggest crypto/NFT hubs in the world, Miami, FL.</p>
                </div>
                <div className={sectionImage}></div>
            </div>
            <div className={physical}>
                    <h2><FontAwesomeIcon className={arrow} icon={faArrowUp}/>PHYSICAL</h2>
            </div>
        </>
    )
}

export default Tank