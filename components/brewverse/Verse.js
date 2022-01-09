import { Suspense, useState } from 'react'
import { OrthographicCamera } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

import Background from './Background'
import Building from './Building'
import {
    MAX_ZOOM, INIT_CAM_POS, INIT_ZOOM_LEVEL, INIT_STEP, STEP_FAC, ZOOM_FAC, UP, FAR,
    BACKGROUND_COLOR, BREWERY_POS, DISCORD_POS, BUILDING_SCALE, X_OFFSET, Y_OFFSET,
    SCENES, MAP_SCALE
} from '../../lib/constants'
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
                position={BREWERY_POS}
                scale={BUILDING_SCALE} />
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
        click(false)
        setNewCamPos(position)
        click(true)
        enable(false)
        switchScene(scene)
    }

    useFrame((state, delta) => {
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

    return (
        <>
            <OrthographicCamera
                makeDefault
                position={camPos}
                zoom={zoomLevel}
                up={UP}
                far={FAR} />
            <color attach="background" args={[BACKGROUND_COLOR]} />
            <group
                scale={MAP_SCALE}>
                <Suspense fallback={null} r3f>
                    <Background />
                    {buildings}
                </Suspense>
                <Controls target={target} enabled={enabled} offsetX={X_OFFSET} offsetY={Y_OFFSET} /> :
            </group >
        </>
    )
}

export default Verse