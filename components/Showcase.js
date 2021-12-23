import sectionStyles from '../styles/Section.module.css';
import styles from '../styles/Showcase.module.css';

const Showcase = () => {
    return(
        <div className={`${sectionStyles.main} ${styles.showcase}`}>
            <h1>Sick display of plebs</h1>
        </div>
    )
}

export default Showcase