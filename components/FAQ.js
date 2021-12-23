import sectionStyles from '../styles/Section.module.css';
import styles from '../styles/FAQ.module.css';

const FAQ = () => {
    return(
        <div className={`${sectionStyles.main} ${styles.faq}`}>
            <h1>Questions? Read these faq's</h1>
        </div>
    )
}

export default FAQ