import sectionStyles from '../styles/Section.module.css'
import { main, logoContainer, logo, hook, background, slide, slideContent1, slideContent2} from '../styles/Main.module.css';
import Image from 'next/image';
import { NavLogo, NeonSign } from '../public/images'

const Main = () => {
    return(
        <>
            <div className={`${sectionStyles.main} ${main}`}>
                <div className={background}>
                    {/* <div className={logoContainer}>
                        <Image src={NavLogo} className={logo} quality={100} priority={true}></Image>
                    </div> */}
                    
                </div>
            </div>
        </>
    )
}

export default Main