import sectionStyles from '../styles/Section.module.css';
import { faq, sectionHeader } from '../styles/FAQ.module.css';

const FAQ = () => {
    return(
        <div className={`${sectionStyles.main} ${faq}`}>
            <h1 className={sectionHeader}>FAQ</h1>
        </div>
    )
}

export default FAQ