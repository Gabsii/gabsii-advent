import { useGLTF } from '@react-three/drei';

const Gift = ({ isHovered }: { isHovered: boolean }) => {
  const { nodes, materials } = useGLTF('/assets/gltf/gift/gift.glb');

  return (
    <group scale={isHovered ? 1.5 : 1} dispose={null} receiveShadow>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group scale={0.46}>
            <mesh
              castShadow
              receiveShadow
              // @ts-ignore
              geometry={nodes.Cube_Texture_0.geometry}
              material={materials.Texture}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/gift.glb");

export default Gift;
