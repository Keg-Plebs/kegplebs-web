import React, { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Icosahedron, MapControls, useTexture } from '@react-three/drei'
import Building from '../components/brewverse/Building'

import sectionStyles from '../styles/Section.module.css';
import styles from '../styles/Brewverse.module.css';

const tavern = '/Sprites/tavern.png'
const castle = '/Sprites/castle.png'

// https://github.com/pmndrs/react-three-fiber#what-does-it-look-like
// https://drei.pmnd.rs/?path=/story/controls-mapcontrols--map-controls-scene-st
const Brewverse = () => {
    return (
        <div className={`${sectionStyles.main} ${styles.brewverse}`}>
            <h1>Brewverse is COMING</h1>
            <Canvas
                orthographic
                camera={{ position: [0, 0, 50], zoom: 10, up: [0, 0, 1], far: 100 }}>
                <color attach="background" args={["hotpink"]} />
                <ambientLight intensity={0.5} />
                <Suspense fallback={null} r3f>
                    <Building src={castle} src_select={tavern} position={[0, 0, 0]} scale={[20, 20, 20]} />
                </Suspense>
                <MapControls />
            </Canvas>
        </div>
    )
}

// function Box(props) {
//     // This reference gives us direct access to the THREE.Mesh object
//     const ref = useRef()
//     // Hold state for hovered and clicked events
//     const [hovered, hover] = useState(false)
//     const [clicked, click] = useState(false)
//     // Subscribe this component to the render-loop, rotate the mesh every frame
//     useFrame((state, delta) => (ref.current.rotation.x += 0.01))
//     // Return the view, these are regular Threejs elements expressed in JSX
//     return (
//         <mesh
//             {...props}
//             ref={ref}
//             scale={clicked ? 1.5 : 1}
//             onClick={(event) => click(!clicked)}
//             onPointerOver={(event) => hover(true)}
//             onPointerOut={(event) => hover(false)}>
//             <boxGeometry args={[1, 1, 1]} />
//             <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
//         </mesh>
//     )
// }

export default Brewverse
