import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react';
//import Logo from './logo';
import styles_navBar from '../styles/navBar.module.css'
import styles_home from '../styles/home.module.css'

export const navLinks = [
    // {
    //     name: "Home",
    //     path: "/",
    // },
    {
        name: "About",
        path: "#",
    },
    {
        name: "Roadmap",
        path: "#",
    },
    {
        name: "BrewVerse",
        path: "#",
    }
];

// https://stackoverflow.com/questions/68025173/how-to-change-image-on-hover-with-nextjs-and-tailwindcss
// https://www.youtube.com/watch?v=prbOI7G0RvY&t=630s
const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false)
    const openMenu = () => setIsOpen(!isOpen)

    return (
        //<header className={styles_home.header}>
            <nav className={styles_navBar.navBar}>
                <ul
                    className={isOpen === false ?
                        styles_navBar.navMenu : styles_navBar.navMenu + ' ' + styles_navBar.active}
                >
                    {/* <Image
                        src="/kegplebs.jpg"
                        width={400}
                        height={60}
                    /> */}
                    {/* <div className={styles_navBar.navItem}>
                        <Logo></Logo>
                    </div> */}
                    {navLinks.map((link, index) => {
                        return (
                            <li 
                                key={index}
                                className={styles_navBar.navItem}
                            >
                                <Link href={link.path}>
                                    {/* <li key={index}>{link.name}</li> */}
                                    <a
                                        className={isOpen === false ?
                                            styles_navBar.navLink : styles_navBar.navLink + ' ' + styles_navBar.active}
                                        onClick={openMenu}
                                    >
                                        {link.name}
                                    </a>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
                <button
                    className={isOpen === false ?
                        styles_navBar.hamburger : styles_navBar.hamburger + ' ' + styles_navBar.active}
                    onClick={openMenu}
                >
                    <span className={styles_navBar.bar}></span>
                    <span className={styles_navBar.bar}></span>
                    <span className={styles_navBar.bar}></span>
                </button>
            </nav>
        //</header>
    );
}

export default NavBar