import styles from '../styles/Layout.module.css';
import Head from 'next/head';

export const siteTitle = 'Keg Plebs'

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta
                    name="description"
                    content="Building the Brewverse one beer at a time!"
                />
                <meta name="og:title" content={siteTitle} />
                <link rel="icon" href="/sunIcon.webp" />
            </Head>
            <div>
                <main className={styles.main}>
                    {children}
                </main>
            </div>
        </>
    )
}

export default Layout;