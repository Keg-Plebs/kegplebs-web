
import { useEffect } from 'react';
import {
    background,
    door,
    bartender
} from '../styles/Bar.module.css';

const Bar = () => {

    useEffect( () => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'visible';
        }
    }, []);

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