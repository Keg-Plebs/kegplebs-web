import { useRef, useEffect } from 'react';
import Image from 'next/image';

import { 
    Bitchass, 
    Raincoat, 
    Goggs, 
    Flowers, 
    Drooly, 
    Cowb, 
    Hipp, 
    Vort, 
    Space, 
    Hoodee 
} from '../public/images';

import sectionStyles from '../styles/Section.module.css';
import { showcase, first, second, imgContainer } from '../styles/Showcase.module.css';

const Showcase = () => {
    const size = 275;

    const ref = useRef();
    const firstSlide = useRef();
    const secondSlide = useRef();
    
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

            firstSlide.current.style.transform = `translateX(-${firstScroll}px)`;
            secondSlide.current.style.transform = `translateX(${secondScroll}px)`
        };

    }, []);

   
    return(
            <div ref={ref} className={`${sectionStyles.main} ${showcase}`}>
                <h1>Sick display of plebs</h1>
                <div ref={firstSlide} className={first}>
                    <div className={imgContainer}>
                        <Image src={Goggs}quality={100} width={size} height={size}></Image>
                    </div>
                    <div className={imgContainer}>
                        <Image src={Raincoat}quality={100} width={size} height={size}></Image>
                    </div>
                    <div className={imgContainer}>
                        <Image src={Flowers}quality={100} width={size} height={size}></Image>
                    </div>
                    <div className={imgContainer}>
                        <Image src={Drooly}quality={100} width={size} height={size}></Image>
                    </div>
                    <div className={imgContainer}>
                        <Image src={Cowb}quality={100} width={size} height={size}></Image>
                    </div>
                    <div className={imgContainer}>
                        <Image src={Hipp}quality={100} width={size} height={size}></Image>
                    </div>
                    <div className={imgContainer}>
                        <Image src={Vort}quality={100} width={size} height={size}></Image>
                    </div>
                    <div className={imgContainer}>
                        <Image src={Space}quality={100} width={size} height={size}></Image>
                    </div>
                    <div className={imgContainer}>
                        <Image src={Hoodee}quality={100} width={size} height={size}></Image>
                    </div>
                    <div className={imgContainer}>
                        <Image src={Vort}quality={100} width={size} height={size}></Image>
                    </div>
                    <div className={imgContainer}>
                        <Image src={Bitchass}quality={100} width={size} height={size}></Image>
                    </div>
                </div>
                <div ref={secondSlide} className={second}>
                <div className={imgContainer}>
                        <Image src={Goggs}quality={100} width={size} height={size}></Image>
                    </div>
                    <div className={imgContainer}>
                        <Image src={Raincoat}quality={100} width={size} height={size}></Image>
                    </div>
                    <div className={imgContainer}>
                        <Image src={Flowers}quality={100} width={size} height={size}></Image>
                    </div>
                    <div className={imgContainer}>
                        <Image src={Drooly}quality={100} width={size} height={size}></Image>
                    </div>
                    <div className={imgContainer}>
                        <Image src={Cowb}quality={100} width={size} height={size}></Image>
                    </div>
                    <div className={imgContainer}>
                        <Image src={Hipp}quality={100} width={size} height={size}></Image>
                    </div>
                    <div className={imgContainer}>
                        <Image src={Vort}quality={100} width={size} height={size}></Image>
                    </div>
                    <div className={imgContainer}>
                        <Image src={Space}quality={100} width={size} height={size}></Image>
                    </div>
                    <div className={imgContainer}>
                        <Image src={Hoodee}quality={100} width={size} height={size}></Image>
                    </div>
                    <div className={imgContainer}>
                        <Image src={Vort}quality={100} width={size} height={size}></Image>
                    </div>
                    <div className={imgContainer}>
                        <Image src={Bitchass}quality={100} width={size} height={size}></Image>
                    </div>
                </div>
            </div>
    )
}






export default Showcase