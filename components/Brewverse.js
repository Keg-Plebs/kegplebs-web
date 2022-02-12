import { Suspense, useState, useRef, useEffect, useLayoutEffect, useContext } from 'react'
import { Canvas } from '@react-three/fiber'

import sectionStyles from '../styles/Section.module.css';
import {
    brewverse,
    canvas_container,
    sectionHeader,
    imageContainer,
    cloudLeft,
    cloudRight,
    sceneChange,
    curtain
} from '../styles/Brewverse.module.css';

import Verse from './brewverse/Verse'

import Bar from './Bar';
import Team from './Team'

import ProviderContext from './ProviderContext';

import { DISCORD_LINK, SCENES } from '../lib/constants'

// https://github.com/pmndrs/react-three-fiber#what-does-it-look-like
// https://drei.pmnd.rs/?path=/story/controls-mapcontrols--map-controls-scene-st
const Brewverse = () => {

    const [scene, switchScene] = useState(SCENES.VERSE);

    const { provider, setProvider } = useContext(ProviderContext);

    let component;
    let myClass;

    // Changes the scene component in the Canvas
    switch (scene) {
        case SCENES.DISCORD:
            window.location = DISCORD_LINK  // Goes to the Discord
            component = <></>
            break;
        case SCENES.VERSE:
            myClass = ``;
            component =
                <Verse callback={(newScene) => switchScene(newScene)} />
            break;
        case SCENES.BREWERY:
            myClass = `${sceneChange}`;
            component =
                <></>
            break;
        default:
            component = <></>
    }

    return (
        <div className={`${sectionStyles.main} /* ${brewverse}`}>
            <div className={sectionHeader}></div>
            <div className={imageContainer}>
                <div className={`${cloudLeft}`} />
                <div className={`${cloudRight}`} />
            </div>

            <div className={canvas_container}>
                <div
                    id={curtain}
                    className={myClass}
                >
                    {
                        scene === SCENES.BREWERY ? <Team></Team> :
                            <Canvas>
                                <Suspense fallback={null} r3f>
                                    {component}
                                </Suspense>
                            </Canvas>
                    }
                </div>

            </div>
        </div>
    )
}

export default Brewverse