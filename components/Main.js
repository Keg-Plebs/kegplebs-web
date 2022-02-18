import sectionStyles from '../styles/Section.module.css'
import { main, background} from '../styles/Main.module.css';

const Main = () => {
    return(
        <>
            <div className={`${sectionStyles.main} ${main}`}>
                <div className={background}>
                </div>
            </div>
        </>
    )
}

export default Main