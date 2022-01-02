import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'

import sectionStyles from '../styles/Section.module.css';
import styles from '../styles/Brewverse.module.css';

import Interior from './brewverse/Interior'
import Verse from './brewverse/Verse'

import { DISCORD_LINK, SCENES } from '../lib/constants'

// https://github.com/pmndrs/react-three-fiber#what-does-it-look-like
// https://drei.pmnd.rs/?path=/story/controls-mapcontrols--map-controls-scene-st
const Brewverse = () => {

    const [scene, switchScene] = useState(SCENES.VERSE)

    let component;

    switch (scene) {
        case SCENES.DISCORD:
            window.location = DISCORD_LINK
            component = <></>
            break;
        case SCENES.VERSE:
            component =
                <Verse callback={(newScene) => switchScene(newScene)} />
            break;
        case SCENES.BREWERY:
            component =
                <Interior
                    callback={
                        () => switchScene(SCENES.VERSE)
                    } />

            break;
        default:
            component = <></>
    }

    return (
        <div className={`${sectionStyles.main} ${styles.brewverse}`}>
            <h1>Brewverse is COMING</h1>
            <div id={styles.canvas_container}>
                <Canvas>
                    <ambientLight color={0xffffff} intensity={0.5} />
                    <Suspense fallback={null} r3f>
                        {component}
                    </Suspense>
                </Canvas>
            </div>
        </div>
    )
}

export default Brewverse