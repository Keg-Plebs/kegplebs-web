import { Suspense, useState, useEffect } from 'react'
import { PerspectiveCamera } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

import Background from './Background'
import Building from './Building'
import {
    MAX_ZOOM, INIT_CAM_POS, INIT_ZOOM_LEVEL, INIT_STEP, ZOOM_FAC, UP, FAR,
    BACKGROUND_COLOR, BREWERY_POS, BUILDING_SCALE, X_OFFSET, Y_OFFSET,
    SCENES
} from '../../utils/constants'
import Controls from './Controls'
import { KegPlebsBrewery, KegPlebsBrewerySelect } from '../../public/images'

const Verse = ({ enterBrewery, callback }) => {

    // List of all the buildings on the map
    const buildings = [
        (
            <Building
                key={0}
                scale={BUILDING_SCALE}
                onClick={
                    (e) => {
                        setTimeout(() => enterBrewery(), 500)
                        transitionScene(SCENES.BREWERY, [BREWERY_POS[0], BREWERY_POS[1], INIT_CAM_POS[2]])
                        document.body.style.cursor = 'auto'
                    }
                }
                src={KegPlebsBrewery.src}
                srcSelect={KegPlebsBrewerySelect.src}
                position={BREWERY_POS}
                 />
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

    // Gets the size of the viewport, scene camera and webGL renderer fomr three.js
    const { size, camera, gl } = useThree();
    gl.setPixelRatio(window.devicePixelRatio)   // Sets the pixel ratio of the renderer

    const [scene, switchScene] = useState(SCENES.VERSE);
    const [camPos, setCamPos] = useState(INIT_CAM_POS);
    const [newCamPos, setNewCamPos] = useState([0, 0, 0])
    const [target, setTarget] = useState([0, 0, 0])
    const [zoomLevel, setZoomLevel] = useState(INIT_ZOOM_LEVEL)
    const [clicked, click] = useState(false)
    const [enabled, enable] = useState(true)
    const [intensity, setInensity] = useState(1)

    // Damping function for transition between two vectors
    const damp = (from, to, step, delta) => {

        let result = []

        result[0] = THREE.MathUtils.damp(from[0], to[0], step, delta)
        result[1] = THREE.MathUtils.damp(from[1], to[1], step, delta)
        result[2] = THREE.MathUtils.damp(from[2], to[2], step, delta)

        return result
    }

    // Compares two arrays by converting to JSON and checking if the JSON are equal
    const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);

    // Transitions to the next scene
    const transitionScene = (scene, position) => {
        click(false)
        setNewCamPos(position)
        click(true)
        enable(false)
        switchScene(scene)
    }

    useFrame((state, delta) => {
        let step = INIT_STEP;

        if (clicked) {

            // step = STEP_FAC * step * step

            let curPos = damp(camPos, newCamPos, step, 3 * delta)
            let curZoom = THREE.MathUtils.damp(zoomLevel, MAX_ZOOM, step * ZOOM_FAC, 3 * delta)
            setInensity(THREE.MathUtils.damp(intensity, 0, step, 3 * delta))

            setCamPos(curPos)
            setTarget([curPos[0], curPos[1], 0])
            setZoomLevel(curZoom)

            if (equals(camPos, newCamPos)) {
                click(false)
                enable(true)
                callback(scene)
            }
        }
    })

    useEffect(() => {

        const handleResize = () => {

            // https://gist.github.com/ayamflow/96a1f554c3f88eef2f9d0024fc42940f
            let dist = camera.position.z;
            let height = size.height;
            camera.fov = 2 * Math.atan(height / (2 * dist)) * (200 / Math.PI);
            camera.updateProjectionMatrix();
        };

        window.addEventListener('resize', handleResize)

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize)
        }

    }, [])

    return (
        <>
            
            <PerspectiveCamera
                makeDefault
                position={camPos}
                zoom={zoomLevel}
                up={UP}
                far={FAR} />
            <ambientLight color={0xffffff} intensity={intensity} />
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