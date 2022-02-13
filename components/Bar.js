
import {
    background,
    door,
    bartender
} from '../styles/Bar.module.css';

const Bar = () => {


    return(
        <>
            <div className={background}>
                <div className={door}></div>
                <div className={bartender}></div> 
            </div>
        </>
    )
}

export default Bar