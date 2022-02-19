import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

import { 
    Budder,
    Goat,
    POG,
    Puffer,
    Raincoat, 
    Space, 
    Nani,
    SmallHat,
    One,
    Two,
    Three,
    Four,
    Five,
    Six,
    Seven,
    Eight,
    Nine,
    Ten,
    Eleven,
    Twelve,
    Thirteen,
    Fourteen,
    Fifteen,
    Sixteen,
    Seventeen,
    Eighteen,
    Nineteen,
    Twenty,
    TwentyOne,
    TwentyTwo,
    TwentyThree,
    TwentyFour,
    TwentyFive,
    TwentySix,
    TwentySeven
} from '../public/images';

import sectionStyles from '../styles/Section.module.css';
import { showcase, first, second, third, imgContainer, sectionHeader, showcaseOverlay, desc, contentContainer } from '../styles/Showcase.module.css';

const myLoader = ({ src, width, quality }) => {
    return `https://dspp4aqyru269.cloudfront.net/${src}`
  }

const Showcase = () => {
    const [screenWidth, setScreenWidth] = useState(20000);
    let size;

    if(screenWidth < 800) size = 150
    else if(screenWidth < 1700) size = 200
    else size = 250

    const ref = useRef();
    
    useEffect(() => {
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
                            <Image src={Two} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Raincoat} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Five} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Seven} quality={100} loading="lazy" width={size} height={size} ></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Eight} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Three} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={One} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Space} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Six} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Nine} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Puffer} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Four} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Two} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Raincoat} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Five} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Seven} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Eight} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Three} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                    </div>
                    <div className={second}>
                        <div className={imgContainer}>
                            <Image src={Ten} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Budder} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Eleven} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Thirteen} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Fourteen} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Twelve} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={POG} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Fifteen} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Sixteen} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Seventeen} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={SmallHat} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Eighteen} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Ten} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Budder} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Eleven} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Thirteen} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Fourteen} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Twelve} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                    </div>
                    <div className={third}>
                        <div className={imgContainer}>
                            <Image src={Goat} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={TwentyOne} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Nani} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={TwentyTwo} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={TwentySix} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={TwentyThree} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={TwentyFour} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={TwentySeven} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Nineteen} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={TwentyFive} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={TwentyTwo} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Twenty} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Goat} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={TwentyOne} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={Nani} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={TwentyTwo} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={TwentySix} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image src={TwentyThree} quality={100} loading="lazy" width={size} height={size}></Image>
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