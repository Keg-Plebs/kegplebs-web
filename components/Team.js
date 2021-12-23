import sectionStyles from '../styles/Section.module.css';
import styles from '../styles/Team.module.css';

const Team = () => {
    return(
        <div className={`${sectionStyles.main} ${styles.team}`}>
            <h1>The gorgeous faces behind the Keg Plebs</h1>
        </div>
    )
}

export default Team