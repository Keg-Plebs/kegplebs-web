import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    sectionContainer,
    sectionHeader,
    sectionImage,
    sectionText,
    mainContent,
    visualContent,
    sectionSocialIcons,
    socialIcons,
    physical,
    arrow
} from '../styles/Tank.module.css';


const Tank = () => {

    return (
        <>
            <div className={sectionContainer}>
                <div className={mainContent}>
                    
                    <div className={sectionHeader}></div>
                    <div className={sectionText}>
                        <p>The Tank Brewing Co. is about one thing and one thing only: exceptional craft beer. Our story is one of a homegrown passion for brewing honest, expertly crafted artisanal beer using only the finest ingredients from mash to tap. We call it ‘liquid innovation.’ Every drop is crafted with unparalleled passion for creating beer of only the highest quality.</p>
                  
                        <p>From the purity of the water to the extensive care taken in curating ingredients to every step of the brewing process, every detail is adhered to with the pure love of beer in mind – and it can be tasted in every sip. Bold. Unpretentious. Proudly brewed in the heart of Miami, one of the biggest crypto/NFT hubs in the world.</p>

                        <div className={sectionSocialIcons}>
                            <a href='https://twitter.com/TheTankBrewing'><FontAwesomeIcon icon={faTwitter} className={socialIcons}/></a>
                            {/* <a href='https://thetankbrewing.com/'><Image src={TankIcon} quality={100} height={30} width={30}></Image></a> */}
                            <a href='https://twitter.com/TheTankBrewing'><FontAwesomeIcon icon={faInstagram} className={socialIcons}/></a>
                        </div>
                    </div>
                </div>
                <div className={visualContent}>
                    <div className={sectionImage}></div>
                </div>
            </div>
            <div className={physical}>
                    <h2><FontAwesomeIcon className={arrow} icon={faArrowUp}/>PHYSICAL</h2>
            </div>
        </>
    )
}

export default Tank