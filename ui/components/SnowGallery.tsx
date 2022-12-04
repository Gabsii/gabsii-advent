"use client";

import { Canvas } from '@react-three/fiber'

import GiftWrapper from './GiftWrapper';
import SnowParticle from './SnowParticle';

import { generateRandomVector, generateRandomVectorVelocity } from 'utils/three';
import { SNOW_PARTICLES_AMOUNT } from 'utils/const';
import { ReactNode } from 'react';


const SnowyGallery = ({ showGifts = true, children }: { showGifts?: boolean, children?: ReactNode }) => {
  return (
    <div className="h-screen w-screen absolute top-0 left-0">
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
        {
          showGifts &&
          (
            <>
              <GiftWrapper position={[-2, 2, 0]} number={1} />
              <GiftWrapper position={[0, 2, 0]} number={2} />
              <GiftWrapper position={[2, 2, 0]} number={3} />
              <GiftWrapper position={[-2, 0, 0]} number={4} />
              <GiftWrapper position={[0, 0, 0]} number={5} />
              <GiftWrapper position={[2, 0, 0]} number={6} />
              <GiftWrapper position={[-2, -2, 0]} number={7} />
              <GiftWrapper position={[0, -2, 0]} number={8} />
              <GiftWrapper position={[2, -2, 0]} number={9} />
            </>
          )
        }
        {children}
      </Canvas>
    </div>
  )
}

export default SnowyGallery
