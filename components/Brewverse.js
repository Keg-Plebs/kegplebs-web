<<<<<<< Updated upstream
import { Suspense, useState, useRef, useEffect, useLayoutEffect, useContext } from 'react'
=======
import { Suspense, useState, useContext } from 'react'
>>>>>>> Stashed changes
import { Canvas } from '@react-three/fiber'

import sectionStyles from '../styles/Section.module.css';
import { 
    brewverse, 
    canvas_container, 
    sectionHeader,
    imageContainer,
    cloudLeft,
    cloudRight
} from '../styles/Brewverse.module.css';

import Interior from './brewverse/Interior'
import Verse from './brewverse/Verse'

<<<<<<< Updated upstream
=======
import Bar from './Bar';

>>>>>>> Stashed changes
import ProviderContext from './ProviderContext';

import { DISCORD_LINK, SCENES } from '../lib/constants'

// https://github.com/pmndrs/react-three-fiber#what-does-it-look-like
// https://drei.pmnd.rs/?path=/story/controls-mapcontrols--map-controls-scene-st
const Brewverse = () => {

    const [scene, switchScene] = useState(SCENES.VERSE);
<<<<<<< Updated upstream
=======
    const [breweryScene, setBreweryScene] = useState(false)

    const { provider, setProvider } = useContext(ProviderContext);
    
    let component;
>>>>>>> Stashed changes

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
        <div className={`${sectionStyles.main} /* ${brewverse}`}>
            <div className={sectionHeader}></div>
            <div className={imageContainer}>
                <div className={`${cloudLeft}`}      />
                <div className={`${cloudRight}`}      />
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