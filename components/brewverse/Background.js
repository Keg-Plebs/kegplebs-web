import { useTexture } from '@react-three/drei'

import { BaseLayer } from '../../public/images';

const Background = () => {

    // Creates a Texture object from the image for the mesh
    const texture = useTexture(BaseLayer.src)

    // Gets the width and height from the texture
    const width = BaseLayer.width;
    const height = BaseLayer.height;
    
    return (
        <>
            <mesh
                // THIS WILL BE NECESSARY IF WE DECIDE TO MOVE THE MAP
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
                <planeGeometry />
                <meshStandardMaterial map={texture} transparent/>
            </mesh>
        </>
    )
}

export default Background