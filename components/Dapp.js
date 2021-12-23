import sectionStyles from '../styles/Section.module.css';
import styles from '../styles/Dapp.module.css';

const Dapp = () => {
    return(
        <div className={`${sectionStyles.main} ${styles.dapp}`}>
            <h1>This is where you'll be able to mint!</h1>
        </div>
    )
}

export default Dapp