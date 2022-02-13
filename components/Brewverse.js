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
    curtain,
    moveCloudsLeft,
    moveCloudsRight,
    cloudLeftInfinite,
    cloudRightInfinite
} from '../styles/Brewverse.module.css';

import Verse from './brewverse/Verse'

import Bar from './Bar';
import Team from './Team'

import ProviderContext from './ProviderContext';

import { DISCORD_LINK, SCENES } from '../lib/constants'

// https://github.com/pmndrs/react-three-fiber#what-does-it-look-like
// https://drei.pmnd.rs/?path=/story/controls-mapcontrols--map-controls-scene-st
const Brewverse = props => {

    const [scene, switchScene] = useState(SCENES.VERSE);

    const { provider, setProvider } = useContext(ProviderContext);

    let component;
    let myClass;
    const leftCloudClass = scene === SCENES.BREWERY ? `${moveCloudsLeft}` : `${cloudLeftInfinite}`;
    let rightCloudClass = scene === SCENES.BREWERY ? `${moveCloudsRight}` : `${cloudRightInfinite}`;

    // Changes the scene component in the Canvas
    switch (scene) {
        case SCENES.DISCORD:
            window.location = DISCORD_LINK  // Goes to the Discord
            component = <></>
            break;
        case SCENES.VERSE:
            myClass = ``;
            props.enterBrewverse(false)
            component =
                <Verse callback={(newScene) => switchScene(newScene)} />
            break;
        case SCENES.BREWERY:
            myClass = `${sceneChange}`;
            props.enterBrewverse(true);
            component =
                <></>
            break;
        default:
            component = <></>
    }

    return (
        <div className={`${sectionStyles.main} /* ${brewverse}`}>
            <div className={sectionHeader}
                style={{
                    display: scene === SCENES.BREWERY ? 'none' : 'block'
                }}
            ></div>
            <div className={imageContainer}>
                <div 
                    id={`${cloudLeft}`} 
                    className={leftCloudClass}
                />
                <div 
                    id={`${cloudRight}`} 
                    className={rightCloudClass}
                />
            </div>

            <div className={canvas_container}>
                <div
                    id={curtain}
                    className={myClass}
                >
                    {
                        scene === SCENES.BREWERY ? <Bar></Bar> :
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