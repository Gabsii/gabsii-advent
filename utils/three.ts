import { Vector3 } from '@react-three/fiber'
import { Vector3 as ThreeVector3 } from 'three';
import { SNOW_FALL_SPEED } from './const';

export const generateRandomVector = (min: number, max: number): Vector3 => {
  return new ThreeVector3(
    Math.random() * (max - min) + min,
    Math.random() * (max - min) + min,
    Math.random() * (max - min) + min,
  );
}

export const generateRandomVectorVelocity = (min: number, max: number): ThreeVector3 => {
  const z = Math.random() * (max - min) + min;

  return new ThreeVector3(
    Math.random() * (max - min) + min,
    Math.random() * SNOW_FALL_SPEED + z + 1,
    z,
  )
}
