import { useEffect, useState } from 'react';
import { useTexture } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';

import { BaseLayer } from '../../public/images';

const Background = () => {
    const texture = useTexture(BaseLayer.src)
    const { size, gl } = useThree();

    const width = texture.image.width;
    const height = texture.image.height;

    const imageAspect = width / height;

    let scaleHeight = width / imageAspect;

    // let dimensions = new THREE.Vector2(size.width, size.height);
    // gl.getSize(dimensions);
    // console.log(gl)
    
    return (
        <>
            <sprite
                // onPointerDown={(event) => {
                //     document.body.style.cursor = 'grabbing'
                // }}
                // onPointerUp={(event) => {
                //     document.body.style.cursor = 'grab'
                // }}
                // onPointerLeave={(event) => {
                //     document.body.style.cursor = 'auto'
                // }}
                // onPointerOver={(event) => {
                //     document.body.style.cursor = 'grab'
                // }}
                scale={[width, height, 1 ]}>
                {/* <planeGeometry /> */}
                {/* <meshStandardMaterial map={texture} transparent/> */}
                <spriteMaterial map={texture} />
            </sprite>
        </>
    )
}

// const Background = () => {

//     const { scene, aspect, size } = useThree();
//     const texture = useTexture(BaseLayer.src)

//     // https://stackoverflow.com/questions/62846043/react-js-useeffect-with-window-resize-event-listener-not-working
//     const [dimensions, setDimensions] = useState({
//         width: undefined,
//         height: undefined
//     });

//     // https://discourse.threejs.org/t/background-image-texture-is-not-working/15435/2
//     scene.background = texture;

//     // Fix gamma level
//     scene.background.encoding = THREE.sRGBEncoding;

//     // https://stackoverflow.com/questions/52624261/three-js-scaling-background-image-to-fit-window-without-stretching-it
//     // const targetAspect = size.width / size.height;
//     // const imageAspect = BaseLayer.width / BaseLayer.height;
//     // const factor = imageAspect / targetAspect;

//     // scene.background.offset.x = factor > 1 ? (1 - 1 / factor) / 2 : 0;
//     // scene.background.repeat.x = factor > 1 ? 1 / factor : 1;
//     // scene.background.offset.y = factor > 1 ? 0 : (1 - factor) / 2;
//     // scene.background.repeat.y = factor > 1 ? 1 : factor;

//     // useEffect(() => {

//     //     const handleResize = () => {
//     //         setDimensions({
//     //             width: window.innerWidth,
//     //             height: window.innerWidth
//     //         })
//     //     }

//     //     window.addEventListener('resize', handleResize);

//     //     handleResize();

//     //     // https://stackoverflow.com/questions/52624261/three-js-scaling-background-image-to-fit-window-without-stretching-it
        
//     //     return () => window.removeEventListener('resize', handleResize);

//     // }, []);

//     return (
//         <></>
//     )
// }

export default Background



