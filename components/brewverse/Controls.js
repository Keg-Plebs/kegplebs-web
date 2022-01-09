import { useRef } from "react"
import { MapControls } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"

import { X_OFFSET, Y_OFFSET } from "../../utils/constants"

//https://stackoverflow.com/questions/69607783/how-to-limit-panning-distance-in-react-three-fiber-mapcontrols
const Controls = ({ enabled, target }) => {

  const { camera, gl: { domElement }, size } = useThree();
  const controlsRef = useRef();

  // let X_OFFSET = BACKGROUND_WIDTH * MAP_SCALE[0] - size.width;
  // let Y_OFFSET = BACKGROUND_HEIGHT * MAP_SCALE[1] - size.height;

  useFrame(() => {

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

  return (
    <MapControls target={target} enabled={enabled} ref={controlsRef} args={[camera, domElement]} enableZoom={false} enableRotate={false} dampingFactor={0.05} />
  )
}

export default Controls