import { useRef, useEffect } from "react"
import { MapControls } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"
import { X_OFFSET, Y_OFFSET } from "../../utils/constants";
import { BaseLayer } from "../../public/images";

//https://stackoverflow.com/questions/69607783/how-to-limit-panning-distance-in-react-three-fiber-mapcontrols
const Controls = ({ enabled, target }) => {

  const { camera, gl: { domElement } } = useThree();
  const controlsRef = useRef();

  useFrame(() => {

    controlsRef.current.update();
    let target = controlsRef.current.target;

    if (target.y < -Y_OFFSET) {
      target.y = -Y_OFFSET;
      camera.position.y = -Y_OFFSET;
    } else if (target.y > Y_OFFSET) {
      target.y = Y_OFFSET;
      camera.position.y = Y_OFFSET;
    }

    if (target.x < -X_OFFSET) {
      target.x = -X_OFFSET;
      camera.position.x = -X_OFFSET;
    } else if (target.x > X_OFFSET) {
      target.x = X_OFFSET;
      camera.position.x = X_OFFSET;
    }
  })

//   useEffect(() => {

//     const handleResize = () => {
//         // https://gist.github.com/ayamflow/96a1f554c3f88eef2f9d0024fc42940f
//         let dist = camera.position.z;
//         let height = size.height;
//         let camFov = 2 * Math.atan(height / (2 * dist)) * (180 / Math.PI);

//         let layerHeight = BaseLayer.height;
//         let layerFov = 2 * Math.atan(layerHeight / (2 * dist)) * (180 / Math.PI);

//         console.log(camFov, layerFov)

//     };

//     window.addEventListener('resize', handleResize)

//     handleResize();

//     return () => window.removeEventListener('resize', handleResize)
// }, [])

  return (
    <MapControls target={target} enabled={enabled} ref={controlsRef} args={[camera, domElement]} enableZoom={false} enableRotate={false} dampingFactor={0.05} />
  )
}

export default Controls