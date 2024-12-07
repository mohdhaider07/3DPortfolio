import { useGLTF } from "@react-three/drei";

// @ts-expect-error no overload matches this call
export function ConsoleModel(props) {
  const { nodes, materials } = useGLTF("/consoleModel.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1.112}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            //   @ts-expect-error geometry much be at the node.Cube_Material_0.geometry
            geometry={nodes.Cube_Material_0.geometry}
            material={materials.Material}
            position={[0, 21.93, 0]}
            scale={100}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/consoleModel.glb");
