import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

import Raincoat from '../public/raincoat.PNG'
import Goggs from '../public/goggs.PNG'
import Flowers from '../public/flowers.jpeg'
import Drooly from '../public/drooly.jpeg'
import Cowb from '../public/cowb.PNG'
import Hipp from '../public/hipp.PNG'
import Vort from '../public/vort.jpg'
import Space from '../public/space.JPG'
import Hoodee from '../public/hoodee.JPG'
import Bitchass from '../public/bitchass.jpeg'

import sectionStyles from '../styles/Section.module.css';
import { showcase, first, second, imgContainer } from '../styles/Showcase.module.css';

const useOnScreen = (ref) => {

    const [isIntersecting, setIntersecting] = useState(false)
  
    let observer = null; 
  
    useEffect(() => {
        observer = new IntersectionObserver(
            ([entry]) => {
                setIntersecting(entry.isIntersecting)
            }
        )
        observer.observe(ref.current)
        // Remove the observer as soon as the component is unmounted
        return () => { observer.disconnect() }
    }, [])
  
    return isIntersecting
}

const Showcase = () => {
    const size = 275;

    const ref = useRef();
    const firstSlide = useRef();
    const secondSlide = useRef();

    const isVisible = useOnScreen(ref);
    
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

            console.log(isVisible)
            firstSlide.current.style.transform = `translateX(-${firstScroll}px)`;
            secondSlide.current.style.transform = `translateX(${secondScroll}px)`


            if(isVisible) {
                // would only like to move the two if we're viewing this comp
            }
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