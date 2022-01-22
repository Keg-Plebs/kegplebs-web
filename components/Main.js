import sectionStyles from '../styles/Section.module.css'
import { main, logoContainer, logo, hook} from '../styles/Main.module.css';
import Image from 'next/image';
import { NavLogo, NeonSign } from '../public/images'

const Main = () => {
    return(
        <>
            <div className={`${sectionStyles.main} ${main}`}>
                <div className={logoContainer}>
                    <Image src={NavLogo} className={logo} quality={100} priority={true}></Image>
                </div>
                <h1 className={hook}>Welcome to the Keg Plebs Brewery! Grab a brewski, find a seat and enjoy yourself! All of our plebs will take care of you, and that's a promise. Oh! You don't know who the Keg Plebs are? <br/>Well, let us introduce you -</h1>
            </div>
        </>
    )
}

export default Main