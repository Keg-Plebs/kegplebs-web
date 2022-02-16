
import { collabsContainer, sectionHeader } from '../styles/Collabs.module.css';
import Tank from './Tank';
import EtherOrcs from './EtherOrcs';

const Collabs = () => {

    return (
        <>
            <div className={collabsContainer}>
                <div className={sectionHeader}></div>
                <Tank></Tank>
                <EtherOrcs></EtherOrcs>
            </div>
        </>
    )
}

export default Collabs