import { Suspense, useState, useContext } from 'react'
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
    cloudRightInfinite,
    mintIndicator
} from '../styles/Brewverse.module.css';

import Verse from './brewverse/Verse'
import Bar from './Bar';

import ProviderContext from './ProviderContext';

import { DISCORD_LINK, SCENES } from '../utils/constants'

// https://github.com/pmndrs/react-three-fiber#what-does-it-look-like
// https://drei.pmnd.rs/?path=/story/controls-mapcontrols--map-controls-scene-st
const Brewverse = (props) => {

    const [scene, switchScene] = useState(SCENES.VERSE);
    const [breweryScene, setBreweryScene] = useState(false)

    const { provider, setProvider } = useContext(ProviderContext);
    
    let component;
    const isVerse = scene === SCENES.VERSE;

    const myClass = breweryScene ? `${sceneChange}` : ``;
    
    const leftCloudClass = breweryScene ? `${moveCloudsLeft}` : `${cloudLeftInfinite}`;
    const rightCloudClass = breweryScene ? `${moveCloudsRight}` : `${cloudRightInfinite}`;

    if(breweryScene) props.enableNavbar(false);
    else props.enableNavbar(true);

    // Changes the scene component in the Canvas
    switch (scene) {
        case SCENES.DISCORD:
            window.location = DISCORD_LINK  // Goes to the Discord
            component = <></>
            break;
        case SCENES.VERSE:
            component =
                <Verse enterBrewery={() => setBreweryScene(true)} callback={(newScene) => switchScene(newScene)} />
            break;
        case SCENES.BREWERY:
            component =
                <></>
            break;
        default:
            component = <></>
    }

    return (
        <div className={`${sectionStyles.main} ${brewverse}`}>
            <div className={sectionHeader}
                style={{
                    display: breweryScene ? 'none' : 'block'
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
                        breweryScene ? <Bar exitBrewery={() => {
                            setBreweryScene(false);
                            switchScene(SCENES.VERSE)
                        }}></Bar> :
                            <Canvas>
                                <Suspense fallback={null} r3f>
                                    {component}
                                </Suspense>
                            </Canvas>
                    }
                </div>
                {
                    breweryScene ? <></> : <div className={mintIndicator}></div>
                }
                
            </div>
        </div>
    )
}

export default Brewverse