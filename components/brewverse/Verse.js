import { Suspense, useEffect, useState } from 'react'
import { OrthographicCamera, PerspectiveCamera } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

import Background from './Background'
import Building from './Building'
import {
    MAX_ZOOM, INIT_CAM_POS, INIT_ZOOM_LEVEL, INIT_STEP, STEP_FAC, ZOOM_FAC, UP, FAR,
    BACKGROUND_COLOR, BREWERY_POS, DISCORD_POS, X_OFFSET, Y_OFFSET, SCENES
} from '../../utils/constants'
import Controls from './Controls'
import { KegPlebsBrewery, KegPlebsBrewerySelect } from '../../public/images'

const Verse = ({ callback }) => {

    const buildings = [
        (
            <Building
                key={0}
                onClick={
                    (e) => {
                        transitionScene(SCENES.BREWERY, [BREWERY_POS[0], BREWERY_POS[1], INIT_CAM_POS[2]])
                        document.body.style.cursor = 'auto'
                    }
                }
                src={KegPlebsBrewery.src}
                srcSelect={KegPlebsBrewerySelect.src}
                position={BREWERY_POS} />
        ),
        // (
        //     <Building
        //         key={1}
        //         onClick={
        //             (e) => {
        //                 transitionScene(SCENES.DISCORD, [DISCORD_POS[0], DISCORD_POS[1], INIT_CAM_POS[2]])
        //             }
        //         }
        //         src={KEGPLEBS}
        //         srcSelect={KEGPLEBS_SELECT}
        //         position={DISCORD_POS}
        //         scale={BUILDING_SCALE} />
        // )

    ]

    const { size, camera, gl } = useThree();
    gl.setPixelRatio(window.devicePixelRatio)

    const [scene, switchScene] = useState(SCENES.VERSE);
    const [camPos, setCamPos] = useState(INIT_CAM_POS);
    const [newCamPos, setNewCamPos] = useState([0, 0, 0])
    const [target, setTarget] = useState([0, 0, 0])
    const [zoomLevel, setZoomLevel] = useState(INIT_ZOOM_LEVEL)
    const [clicked, click] = useState(false)
    const [enabled, enable] = useState(true)

    const damp = (from, to, step, delta) => {

        let result = []

        result[0] = THREE.MathUtils.damp(from[0], to[0], step, delta)
        result[1] = THREE.MathUtils.damp(from[1], to[1], step, delta)
        result[2] = THREE.MathUtils.damp(from[2], to[2], step, delta)

        return result
    }

    const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);

    const transitionScene = (scene, position) => {
        // click(false)
        setNewCamPos(position)
        click(true)
        enable(false)
        switchScene(scene)
    }

    useFrame((state, delta) => {

        // setZoomLevel(1000 / size.width)

        let step = INIT_STEP;

        if (clicked) {

            step = STEP_FAC * step * step

            let curPos = damp(camPos, newCamPos, step, delta)
            let curZoom = THREE.MathUtils.damp(zoomLevel, MAX_ZOOM, step * ZOOM_FAC, delta)

            setCamPos(curPos)
            setTarget([curPos[0], curPos[1], 0])
            setZoomLevel(curZoom)

            if (equals(camPos, newCamPos)) {
                callback(scene)
                click(false)
                enable(true)
            }
        }
    })

    useEffect(() => {

        const handleResize = () => {
    
            // https://gist.github.com/ayamflow/96a1f554c3f88eef2f9d0024fc42940f
            let dist = camera.position.z;
            let height = size.height;
            camera.fov = 2 * Math.atan(height / (2 * dist)) * (180 / Math.PI);
            camera.updateProjectionMatrix();
        };

        window.addEventListener('resize', handleResize)

        handleResize();

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <>
            <PerspectiveCamera
                makeDefault
                position={camPos}
                zoom={zoomLevel}
                up={UP}
                far={FAR} 
            />
            <color attach="background" args={[BACKGROUND_COLOR]} />

            <Suspense fallback={null} r3f>
                <Background />
                {buildings}
            </Suspense>
            <Controls target={target} enabled={enabled} offsetX={X_OFFSET} offsetY={Y_OFFSET} />
        </>
    )
}

export default Verse