import { useGLTF } from "@react-three/drei";

export function Candle({ isOnFire }: { isOnFire: boolean }) {
  const { nodes, materials } = useGLTF("/assets/gltf/candle2/candle2.glb");
  return (
    <group position={[0.66, 0.33, 0.66]} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.09}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          {isOnFire && <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCone2_flame_0.geometry}
            material={materials.flame}
          />}
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCone2_wich_0.geometry}
            material={materials.wich}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCone2_candle_0.geometry}
            material={materials.candle}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCone2_liquid_0.geometry}
            material={materials.liquid}
          />
          <group position={[0.87, -0.79, 0.6]}>
            <group rotation={[Math.PI / 2, 0, 0]} />
          </group>
          <group position={[-0.06, 1.84, 0]} rotation={[-0.01, 0, 0.02]}>
            <group rotation={[Math.PI / 2, 0, 0]} />
          </group>
          <group
            position={[10.98, 2.56, 0.39]}
            rotation={[-Math.PI, 0.02, 2.76]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/candle2.glb");
