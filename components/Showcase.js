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
                            <Image alt="" src={Two} quality={100} loading="lazy"width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image alt="" src={Raincoat} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image alt="" src={Five} quality={100} loading="lazy"width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image alt="" src={Seven} quality={100} loading="lazy" width={size} height={size} ></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image alt="" src={Eight} quality={100} loading="lazy"width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image alt="" src={Three} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image alt="" src={One} quality={100} loading="lazy"width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image alt="" src={Space} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image alt="" src={Six} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image alt="" src={Nine} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image alt="" src={Puffer} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image alt="" src={Four} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image alt="" src={Two} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image alt="" src={Raincoat} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image alt="" src={Five} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image alt="" src={Seven} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image alt="" src={Eight} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image alt="" src={Three} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                    </div>
                    <div className={second}>
                        <div className={imgContainer}>
                            <Image alt="" src={Ten} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image alt="" src={Budder} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image alt="" src={Eleven} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image alt="" src={Thirteen} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image alt="" src={Fourteen} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image alt="" src={Twelve} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image alt="" src={POG} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image alt="" src={Fifteen} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image alt="" src={Sixteen} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image alt="" src={Seventeen} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image alt="" src={SmallHat} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image alt="" src={Eighteen} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image alt="" src={Ten} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image alt="" src={Budder} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image alt="" src={Eleven} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image alt="" src={Thirteen} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image alt="" src={Fourteen} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image alt="" src={Twelve} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                    </div>
                    <div className={third}>
                        <div className={imgContainer}>
                            <Image alt="" src={Goat} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image alt="" src={TwentyOne} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image alt="" src={Nani} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image alt="" src={TwentyTwo} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image alt="" src={TwentySix} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image alt="" src={TwentyThree} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image alt="" src={TwentyFour} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image alt="" src={TwentySeven} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image alt="" src={Nineteen} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image alt=""src={TwentyFive} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image alt="" src={TwentyTwo} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image alt="" src={Twenty} quality={100} loading="lazy"width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image alt="" src={Goat} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image alt="" src={TwentyOne} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image alt="" src={Nani} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image alt="" src={TwentyTwo} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image alt="" src={TwentySix} quality={100} loading="lazy" width={size} height={size}></Image>
                        </div>
                        <div className={imgContainer}>
                            <Image alt="" src={TwentyThree} quality={100} loading="lazy" width={size} height={size}></Image>
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