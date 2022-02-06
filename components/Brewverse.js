import { Suspense, useState, useRef, useEffect, useLayoutEffect, useContext } from 'react'
import { Canvas } from '@react-three/fiber'

import sectionStyles from '../styles/Section.module.css';
import { 
    brewverse, 
    canvas_container, 
    imageContainer,
    cloudLeft,
    cloudRight,
    cloudGroup,
    cloudA,
    cloudB,
    one, 
    two, 
    three, 
    four, 
    five
} from '../styles/Brewverse.module.css';

import Interior from './brewverse/Interior'
import Verse from './brewverse/Verse'

import ProviderContext from './ProviderContext';

import { DISCORD_LINK, SCENES } from '../lib/constants'

// https://github.com/pmndrs/react-three-fiber#what-does-it-look-like
// https://drei.pmnd.rs/?path=/story/controls-mapcontrols--map-controls-scene-st
const Brewverse = () => {

    const [scene, switchScene] = useState(SCENES.VERSE);

    const {provider, setProvider} = useContext(ProviderContext);

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
        <div className={`${sectionStyles.main} ${brewverse}`}>
            <div className={imageContainer}>
                <div className={`${cloudLeft}`}      />
                <div className={`${cloudRight}`}      />
                {/* <div className={`${cloudGroup} ${one}`}></div>
                <div className={`${cloudGroup} ${two}`}></div>
                <div className={`${cloudA} ${three}`}></div>
                <div className={`${cloudB} ${four}`}></div>
                <div className={`${cloudB} ${five}`}></div> */}
            </div>

            <div className={canvas_container}>
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