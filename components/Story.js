import sectionStyles from '../styles/Section.module.css';
import styles from '../styles/Story.module.css';

const Story = () => {
    return(
        <div className={`${sectionStyles.main} ${styles.story}`}>
            <h1>Story time :)</h1>
        </div>
    )
}

export default Story