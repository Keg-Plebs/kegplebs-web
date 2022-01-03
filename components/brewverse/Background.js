import { useTexture } from '@react-three/drei'

import { BACKGROUND } from '../../lib/constants';

const Background = () => {
    const texture = useTexture(BACKGROUND)

    const width = texture.image.width;
    const height = texture.image.height;

    const imageAspect = width / height;

    let scaleHeight = width / imageAspect;
    
    return (
        <>
            <sprite
                onPointerDown={(event) => {
                    document.body.style.cursor = 'grabbing'
                }}
                onPointerUp={(event) => {
                    document.body.style.cursor = 'grab'
                }}
                onPointerLeave={(event) => {
                    document.body.style.cursor = 'auto'
                }}
                onPointerOver={(event) => {
                    document.body.style.cursor = 'grab'
                }}
                scale={[width, scaleHeight, 1 ]}>
                {/* <planeGeometry /> */}
                {/* <meshStandardMaterial map={texture} transparent/> */}
                <spriteMaterial map={texture} />
            </sprite>
        </>
    )
}

export default Background