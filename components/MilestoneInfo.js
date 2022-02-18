import { useEffect, useState } from "react"

import { 
    milestoneInfo
} from '../styles/Roadmap.module.css';

const MilestoneInfo = ({data}) => {
    const [screenWidth, setScreenWidth] = useState(20000);


    useEffect(() => {
        setScreenWidth(window.innerWidth);
        document.body.style.overflowY = screenWidth < 800 ? 'hidden' : 'visible';

        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', changeWidth)

        return () => {
            document.body.style.overflow = 'visible';
            window.removeEventListener('resize', changeWidth);
        }
    }, []);

    console.log(screenWidth);

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