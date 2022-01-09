import Link from 'next/link';
import Image from 'next/image';
import Icon from '../public/mugshots/icon.jpeg'
import navStyles from '../styles/Nav.module.css';
import Layout from './Layout';
import Connect from './Connect';

const Nav = () => {
    return (
        <nav className={navStyles.nav}>
            <ul>
                <li>
                    <Link href="/">HOME</Link>
                </li>
                <li>
                    <Link href="/">MINT</Link>
                </li>
                <li>
                    <Link href="/">ORIGINS</Link>
                </li>
                <li>
                    <Link href="/">KEG PLEBS</Link>
                </li>
                <li>
                    <Link href="/">BREWVERSE</Link>
                </li>
                <li>
                    <Link href="/">FAQ</Link>
                </li>
                <li>
                    <Link href="/">TEAM</Link>
                </li>
                <li>
                    <Link href="/">ROADMAP</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav