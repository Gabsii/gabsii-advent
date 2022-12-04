import { useRef } from "react";
import { Sprite, Vector3 as ThreeVector3 } from 'three';
import { useLoader, useFrame, Vector3 } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader';

// borrowed from https://swordair.com/demos/threejs-snow/ hihi
const SnowParticle = ({ position, scale, velocity }: { position: Vector3, scale: Vector3, velocity: ThreeVector3 }) => {
  const sprite = useRef<Sprite>(null);
  const colorMap = useLoader(TextureLoader, '/assets/img/snow-particle.png');

  useFrame((_state, delta) => {
    if (!sprite?.current) return;

    const { current } = sprite;
    if (current) {
      current.position.y -= velocity.y * delta;
      current.position.x -= velocity.x * delta;
      current.position.z -= velocity.z * delta;
      if (current.position.y < -10) {
        current.position.y = 10;
      }
    }
  });

  return (
    <sprite ref={sprite} position={position} scale={scale} >
      <spriteMaterial map={colorMap} />
    </sprite>
  )
}

export default SnowParticle;
