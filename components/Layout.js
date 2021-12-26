import styles from '../styles/Layout.module.css';
import Nav from '../components/Nav';

const Layout = ({children}) => {
    return (
        <>
            <Nav />
            <div>
                <main className={styles.main}>
                    {children}
                </main>
            </div>
        </>
    )
}

export default Layout;