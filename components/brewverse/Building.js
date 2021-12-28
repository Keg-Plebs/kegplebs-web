import { useTexture } from '@react-three/drei'
import { useEffect, useRef, useState } from 'react'
import { useThree } from '@react-three/fiber'
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader'

const Building = ({ src, src_select, ...rest }) => {

    const ref = useRef()

    var texture
    var texture_select
    if (src) {
        texture = useTexture(src)
    }

    if (src_select) {
        texture_select = useTexture(src_select)
    }

    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)

    // Updates the cursor based on hovered
    // useEffect(() => {
    //     document.body.style.cursor = hovered ? 'pointer' : 'auto'
    // }, [hovered])

    // https://stackoverflow.com/questions/35005603/get-color-of-the-texture-at-uv-coordinate

    // Gets the size of the texture
    const width = texture.image.width
    const height = texture.image.height

    // Stores the image data
    var texture_data

    // Creates an internal canvas to draw the texture to
    var canvas = document.createElement('canvas');

    // Creates an img element for referencing the texture from the canvas
    var img = document.createElement('img')

    // Setups the img and canvas to the texture
    img.src = src
    canvas.width = width
    canvas.height = height

    // Gets the context of the canvas
    var ctx = canvas.getContext('2d')

    // Waits for the image to load before drawing it
    img.onload = () => {

        // Draws the image to the canvas
        ctx.drawImage(img, 0, 0)

        // Gets the image data from the canvas context
        texture_data = ctx.getImageData(0, 0, width, height)
    }

    return (
        <sprite
            {...rest}
            ref={ref}
            onClick={(event) =>
                click(!clicked)
            }
            onPointerMove={(event) => {

                // Checks if texture_data has been loaded.
                // If the pixel is transparent hover is set to false and the cursor is pointer 
                if (texture_data && isTransparent(event, texture_data.data, width, height)) {
                    document.body.style.cursor = 'auto'
                    hover(false)

                    // Otherwise, hover is set to true and the cursor is auto
                } else {
                    document.body.style.cursor = 'pointer'
                    hover(true)
                }
            }}
            onPointerLeave={(event) => {
                document.body.style.cursor = 'auto'
                hover(false)
            }}>
            <spriteMaterial map={texture_select && hovered ? texture_select : texture} />
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
    var x = Math.floor((event.uv.x * width) - 0.5)
    var y = Math.floor(((1 - event.uv.y) * height) - 0.5)

    // Gets the alpha value of the pixel
    var alpha = getAlphaValue(x, y, data, width)

    // Returns true if the alpha value is zero
    if (alpha == 0) {
        return true
    }

    return false
}

const getAlphaValue = (x, y, data, width) => {
    // https://stackoverflow.com/questions/55236399/canvas-getimagedata-returns-wrong-pixel-color-value-in-ff

    // Computes the index of the pixel in the image data array
    var i = (y * width + x) << 2;

    // Returns the value of the alpha component at the offset
    return data[i + 3]
}

export default Building