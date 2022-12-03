"use client";

import { Canvas, useLoader, useFrame, Vector3 } from '@react-three/fiber'
import { useRef } from 'react';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { Sprite, Vector3 as ThreeVector3 } from 'three';
import { SNOW_PARTICLES_AMOUNT } from 'utils/const';
import { generateRandomVector, generateRandomVectorVelocity } from 'utils/three';

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

const Snow = () => {
  return (
    <div className="h-screen w-screen absolute top-0 left-0 -z-10">
      <Canvas>
        {
          Array.from({ length: SNOW_PARTICLES_AMOUNT }).map((_, i) => {
            return (
              <SnowParticle
                key={i}
                position={generateRandomVector(-10, 10)}
                scale={generateRandomVector(0.1, 0.2)}
                velocity={generateRandomVectorVelocity(-0.01, 0.01)}
              />
            )
          })
        }
      </Canvas>
    </div>
  )
}

export default Snow
