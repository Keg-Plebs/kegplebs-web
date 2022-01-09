import { useTexture } from '@react-three/drei'
import { useThree } from '@react-three/fiber';

import { BaseLayer } from '../../public/images';

const Background = () => {
    const texture = useTexture(BaseLayer.src)
    // const { size, gl } = useThree()

    const width = texture.image.width;
    const height = texture.image.height;
    
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

export default Background