import sectionStyles from '../styles/Section.module.css'
import styles from '../styles/Main.module.css';

const Main = () => {
    return(
        <div className={`${sectionStyles.main} ${styles.main}`}>
            <h1>Welcome To Keg Plebs!</h1>
        </div>
    )
}

export default Main