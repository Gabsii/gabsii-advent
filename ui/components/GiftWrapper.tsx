import { Center } from '@react-three/drei';
import { Vector3 } from '@react-three/fiber';
import { Suspense, useState } from 'react';
import { Candle } from './Candle';
import Gift from './Gift';
import Number from './Number';


const GiftWrapper = ({ number, position }: { number: number, position: Vector3 }) => {
  const [isHovered, setIsHovered] = useState(false);
  const candleDate = new Date(`12.${number}.2022`)
  const isOnFire = candleDate < new Date();

  return (
    <Suspense fallback={null}>
      <group
        position={position}
        onPointerOver={() => setIsHovered(true)}
        onPointerOut={() => setIsHovered(false)}
      >
        <Center>
          <Gift isHovered={isHovered} />
          <Candle isOnFire={isOnFire} />
          <Number number={number} />
          <ambientLight intensity={0.5} />
          <spotLight
            color="#ff9e00"
            penumbra={0.3}
            intensity={3}
            position={[1, 1, 5]}
          />
        </Center>
      </group>
    </Suspense>
  );
};


export default GiftWrapper;
