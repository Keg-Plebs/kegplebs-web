import {
    sectionContainer,
    mainContent,
    visualContent,
    sectionText,
    sectionImage,
    centerLogo,
} from '../styles/MonsterBuds.module.css';
 
const MonsterBuds = () => {
    return(
        <>
            <div className={sectionContainer}>
                <div className={visualContent}>
                    <div className={sectionImage}></div>
                </div>
                <div className={mainContent}>
                    <div className={centerLogo}></div>
                    <div className={sectionText}>
                        <p>With support and collaboration with partners like MonsterBuds, we intend to break down the walls between digital and physical mediums, building long term and impactful industry relationships that put NFTs in the eye of the consumers globally.</p>
                    </div>
                </div>
                
            </div>
    </>
    )
}

export default MonsterBuds