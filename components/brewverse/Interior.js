import { OrthographicCamera, useTexture } from '@react-three/drei'

// temp
const bar = '/sun.png'
const door = '/sun.png'

const Interior = ({ callback }) => {

    let texture = useTexture(bar)
    let doorTexture = useTexture(door)

    const width = texture.image.width
    const height = texture.image.height

    const doorWidth = texture.image.width
    const doorHeight = texture.image.height

    const scaleFactor = 0.1

    return (
        <>
            <OrthographicCamera
                makeDefault
                position={[0, 0, 50]}
                zoom={10}
                far={100} />
            <color attach="background" args={['lightblue']} />
            <ambientLight intensity={0.5} />
            <mesh
                onClick={
                    (event) => {
                        callback()
                    }
                }
                scale={[doorWidth * scaleFactor, doorHeight * scaleFactor, 1]}
                position={[-20, 0, 0]}>
                <planeGeometry />
                <meshStandardMaterial map={doorTexture} />
            </mesh>
            <mesh
                scale={[width * scaleFactor, height * scaleFactor, 1]}
                position={[15, 0, 0]}>
                <planeGeometry />
                <meshStandardMaterial map={texture} />
            </mesh>
        </>
    )
}

export default Interior