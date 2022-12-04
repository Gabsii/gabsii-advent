"use client";

import { Center, Html } from '@react-three/drei';
import { Vector3 } from '@react-three/fiber';
import { useRouter } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import { Candle } from './Candle';
import Gift from './Gift';
import Number from './Number';


const GiftWrapper = ({ number, position }: { number: number, position: Vector3 }) => {
  const [isHovered, setIsHovered] = useState(false);
  const candleDate = new Date(`12.${number}.2022`)
  const giftIsAccessible = candleDate < new Date();
  const router = useRouter();

  const handlePointerOver = () => {
    router.prefetch(`/day/${number}`);
    setIsHovered(true);
  }

  const handlePointerOut = () => {
    setIsHovered(false)
  }

  useEffect(() => {
    document.body.style.cursor = isHovered ? 'pointer' : 'auto'
  }, [isHovered])

  return (
    <Suspense fallback={<Html><div className="text-white text-4xl">Loading...</div></Html>}>
      <group
        position={position}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={() => giftIsAccessible && router.push(`/day/${number}`)}
      >
        <Center>
          <Gift isHovered={isHovered} />
          <Candle isOnFire={giftIsAccessible} />
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
