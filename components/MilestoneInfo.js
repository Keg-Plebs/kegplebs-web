import { useEffect, useState } from 'react';

import { 
    milestoneInfo
} from '../styles/Roadmap.module.css';

const MilestoneInfo = ({data}) => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    
    const mobile = screenWidth < 800;

    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', changeWidth)

        document.body.style.overflow = mobile ? 'hidden' : 'visible';
        document.body.style.position = mobile ? 'relative' : '';

        return () => {
            document.body.style.overflow = 'visible';
            window.removeEventListener('resize', changeWidth);
        }
    }, []);

    return(
        <div 
            className={milestoneInfo}
            style={{ display: "flex"}}
        >
            {   
                Object.values(data.desc).map((child, key) => {
                    return <p key={key}>{child}</p> 
                })
            }
        </div> 
    )
}

export default MilestoneInfo