
import { collabsContainer, sectionHeader } from '../styles/Collabs.module.css';
import Tank from './Tank';
import EtherOrcs from './EtherOrcs';
import MonsterBuds from './MonsterBuds';

const Collabs = () => {

    return (
        <>
            <div className={collabsContainer}>
                <div className={sectionHeader}></div>
                <Tank></Tank>
                <EtherOrcs></EtherOrcs>
                <MonsterBuds></MonsterBuds>
            </div>
        </>
    )
}

export default Collabs