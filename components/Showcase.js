import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

import { 
    Baseball,
    Bitchass, 
    Budder,
    Cam,
    Cowb,
    Doodle, 
    Drooly, 
    Fancy,
    Flowers, 
    Glow,
    Goat,
    Goggs, 
    Hipp, 
    Hoodee,
    Hoodup,
    Jeff,
    Paris,
    POG,
    Poodle,
    Puffer,
    Raincoat, 
    Space, 
    Vort, 
    Iceman,
    Nani,
    SmallHat,
    Tiger
} from '../public/images';

import sectionStyles from '../styles/Section.module.css';
import { showcase, first, second, third, imgContainer, sectionHeader, showcaseOverlay, desc, contentContainer } from '../styles/Showcase.module.css';

const Showcase = () => {
    const [screenWidth, setScreenWidth] = useState(20000);
    const size = screenWidth < 400 ? 150 : 275;

    const ref = useRef();
    const firstSlide = useRef();
    const secondSlide = useRef();
    const thirdSlide = useRef();
    
    useEffect(() => {
        const width = ref.current.offsetWidth;
        window.onscroll = () => {

            let h = document.documentElement, 
                b = document.body,
                st = 'scrollTop',
                sh = 'scrollHeight',
                scrollPercentage = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight);


            const os = scrollPercentage * width;
            const firstScroll = os;
            const secondScroll = os + -.4 * width;
            const thirdScroll = os;

            // firstSlide.current.style.transform = `translateX(-${firstScroll * .8}px)`;
            // secondSlide.current.style.transform = `translateX(${secondScroll}px)`;
            // thirdSlide.current.style.transform = `translateX(-${thirdScroll * 2}px)`;
        };

        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth);
        }

    }, []);

   
    return(
            <div ref={ref} className={`${sectionStyles.main} ${showcase}`}>
                <div className={contentContainer}>
                    <div className={first}>
                        <div className={imgContainer}>
                            <Image src={Goggs} quality={100} priority={true} width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Raincoat} quality={100} priority={true} width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Flowers} quality={100} priority={true} width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Glow} quality={100} priority={true} width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Cowb} quality={100} priority={true} width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Hipp} quality={100} priority={true} width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Vort} quality={100} priority={true} width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Space} quality={100} priority={true} width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Hoodee} quality={100} priority={true} width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Paris} quality={100} priority={true} width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Puffer} quality={100} priority={true} width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Cam} quality={100} priority={true} width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Goggs} quality={100} priority={true} width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Raincoat} quality={100} priority={true} width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Flowers} quality={100} priority={true} width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Glow} quality={100} priority={true} width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Cowb} quality={100} priority={true} width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Hipp} quality={100} priority={true} width={size} height={size}></Image>
                        </div>
                    </div>
                    <div className={second}>
                        <div className={imgContainer}>
                            <Image src={Baseball} quality={100} priority={true} width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Budder} quality={100} priority={true} width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Doodle} quality={100} priority={true} width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Drooly} quality={100} priority={true} width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Fancy} quality={100} priority={true} width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Hoodup} quality={100} priority={true} width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={POG} quality={100} priority={true} width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Hoodee} quality={100} priority={true} width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Poodle} quality={100} priority={true} width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Jeff} quality={100} priority={true} width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={SmallHat} quality={100} priority={true} width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Goggs} quality={100} priority={true} width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Baseball} quality={100} priority={true} width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Budder} quality={100} priority={true} width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Doodle} quality={100} priority={true} width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Drooly} quality={100} priority={true} width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Fancy} quality={100} priority={true} width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Hoodup} quality={100} priority={true} width={size} height={size}></Image>
                        </div>
                    </div>
                    <div className={third}>
                        <div className={imgContainer}>
                            <Image src={Goat} quality={100} priority={true} width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Iceman} quality={100} priority={true} width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Nani} quality={100} priority={true} width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Bitchass} quality={100} priority={true} width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Tiger} quality={100} priority={true} width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Hipp} quality={100} priority={true} width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Vort} quality={100} priority={true} width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Space} quality={100} priority={true} width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Hoodee} quality={100} priority={true} width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Jeff} quality={100} priority={true} width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Bitchass} quality={100} priority={true} width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Hoodup} quality={100} priority={true} width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Goat} quality={100} priority={true} width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Iceman} quality={100} priority={true} width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Nani} quality={100} priority={true} width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Bitchass} quality={100} priority={true} width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Tiger} quality={100} priority={true} width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Hipp} quality={100} priority={true} width={size} height={size}></Image>
                        </div>
                    </div>
                    <div className={showcaseOverlay}>
                        <div className={sectionHeader}></div>
                        <p className={desc}>
                        Born out of a bad batch of fermented hops, Keg Plebs crawled out of the brew vats and into a local brew shop (of which will remain anonymous...for obvious reasons). In an attempt to blend in, the Keg Plebs took cues from the only people they knew, the local yocals. Don't hate them for their adopted style, interests, or bad habits, what they lack in looks they make up for in personality. Fueled by a variety of apré brews, adrenalin and breakfast burritos, the great Keg Pleb migration has begun. Breweries are now accepting applications for resident keg plebs to man the bar, clean the floors and full send-it as needed.
                        </p>
                    </div>
                </div>
            </div>
    )
}


export default Showcase