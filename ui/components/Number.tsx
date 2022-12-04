import { Center, Text3D } from '@react-three/drei'
import { Vector3 } from 'three';

const config = {
  uColor: '#e26686',
  gColor: '#ff7a7a',
  shadow: '#80446c',
}
const font = "/assets/typefaces/MountainsOfChristmas.json";
const position = new Vector3(0, 0, 1);

const Number = ({ number }: { number: number }) => {
  return (
    <group>
      <Center scale={[0.6, .8, .8]} front top position={position} rotation={[0, 0, 0]}>
        <Text3D
          receiveShadow
          castShadow
          bevelEnabled
          font={font}
          letterSpacing={-0.03}
          height={0.25}
          bevelSize={0.01}
          bevelSegments={10}
          curveSegments={128}
          bevelThickness={0.01}
        >
          {number}
          <meshBasicMaterial color="#ffffff" />
        </Text3D>
        <spotLight color="#ffffff" position={[-1, -1, 1]} castShadow />
      </Center>
    </group>
  )
}

export default Number
