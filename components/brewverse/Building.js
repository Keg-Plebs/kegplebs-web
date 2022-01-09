import { useEffect, useState } from 'react'
import { useTexture } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { BUILDING_SCALE } from '../../utils/constants'
import { RGBAFormat } from 'three'

const Building = ({ src, srcSelect, ...rest }) => {

    const { gl } = useThree()

    // console.log('view', viewport)

    let texture
    let textureSelect
    if (src) {
        texture = useTexture(src)
    }

    if (srcSelect) {
        textureSelect = useTexture(srcSelect)
    }

    // Fix artifacting from transparency
    texture.anisotropy = gl.capabilities.getMaxAnisotropy();
    // texture.anisotropy = 0;
    // texture.magFilter = THREE.NearestFilter;
    // texture.minFilter = THREE.NearestFilter;
    texture.minFilter = THREE.LinearMipMapLinearFilter;
    texture.magFilter = THREE.LinearFilter;
    // texture.format = RGBAFormat;

    // textureSelect.anisotropy = gl.capabilities.getMaxAnisotropy();
    texture.anisotropy = 0;
    // textureSelect.magFilter = THREE.NearestFilter;
    // textureSelect.minFilter = THREE.NearestFilter;
    textureSelect.minFilter = THREE.LinearMipMapLinearFilter;
    textureSelect.magFilter = THREE.LinearFilter;


    const [hovered, hover] = useState(false)

    // https://stackoverflow.com/questions/35005603/get-color-of-the-texture-at-uv-coordinate

    // Gets the size of the texture
    const width = texture.image.width;
    const height = texture.image.height;
    const aspect = width / height;

    // Stores the image data
    let textureData;

    // Creates an internal canvas to draw the texture to
    let canvas = document.createElement('canvas');

    // Creates an img element for referencing the texture from the canvas
    let img = document.createElement('img')

    // Setups the img and canvas to the texture
    img.src = src
    canvas.width = width
    canvas.height = height

    // Gets the context of the canvas
    let ctx = canvas.getContext('2d')

    // Waits for the image to load before drawing it
    img.onload = () => {

        // Draws the image to the canvas
        ctx.drawImage(img, 0, 0)

        // Gets the image data from the canvas context
        textureData = ctx.getImageData(0, 0, width, height)
    }

    return (
        <sprite
            {...rest}
            args={[aspect, 1, 1]}
            onPointerMove={(event) => {

                if (textureData) {
                    // Checks if texture_data has been loaded.
                    // If the pixel is transparent hover is set to false and the cursor is pointer 
                    if (isTransparent(event, textureData.data, width, height)) {
                        document.body.style.cursor = 'auto'
                        hover(false)

                        // Otherwise, hover is set to true and the cursor is auto
                    }
                    else {
                        document.body.style.cursor = 'pointer'
                        hover(true)
                    }
                }
            }}
            onPointerLeave={(event) => {
                document.body.style.cursor = 'auto'
                hover(false)

            }}
            // onPointerDown={(event) => {
            //     document.body.style.cursor = 'pointer'
            // }}
            scale={BUILDING_SCALE}>
            {texture ?
                <spriteMaterial
                    map={textureSelect && hovered ? textureSelect : texture}
                    transparent
                    blending={THREE.CustomBlending}
                    blendSrc={THREE.OneFactor}
                    blendDst={THREE.OneMinusSrcAlphaFactor}
                /> :
                <></>
            }
        </sprite>

        // Can alternatively create the image with a planeGeometry
        /*
        <mesh
            {...rest}
            onPointerMove={(event) => {

                // Checks 
                if (texture_data && isTransparent(event, texture_data.data, width, height)) {
                    // console.log('yeah baby')
                    document.body.style.cursor = 'auto'
                    //hover(false)

                } else {
                    document.body.style.cursor = 'pointer'
                    //hover(true)
                }
            }}> 
            <planeGeometry/>
            <meshStandardMaterial map={texture} transparent={true} />
        </mesh>
        */
    )
}

const isTransparent = (event, data, width, height) => {
    // https://stackoverflow.com/questions/35454432/finding-image-pixel-coordinates-integers-from-uv-values-floats-of-obj-file

    // Computes the pixel coordinates based on the UV coordinates from the raycast
    let x = Math.floor((event.uv.x * width) - 0.5)
    let y = Math.floor(((1 - event.uv.y) * height) - 0.5)

    // Gets the alpha value of the pixel
    let alpha = getAlphaValue(x, y, data, width)

    // Returns true if the alpha value is zero
    if (alpha == 0) {
        return true
    }

    return false
}

const getAlphaValue = (x, y, data, width) => {
    // https://stackoverflow.com/questions/55236399/canvas-getimagedata-returns-wrong-pixel-color-value-in-ff

    // Computes the index of the pixel in the image data array
    let i = (y * width + x) << 2;

    // Returns the value of the alpha component at the offset
    return data[i + 3]
}

export default Building