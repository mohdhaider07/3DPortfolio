import { useGLTF } from "@react-three/drei";

// @ts-expect-error no overload matches this call
export function ComputerModel(props) {
  const { nodes, materials } = useGLTF("/computerModel.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[0.121, 0.007, 0]}>
        <mesh
          //@ts-expect-error geometry much be at the node.Objext_6.geometry
          geometry={nodes.Object_6.geometry}
          material={materials.MacBookPro}
        />
        <mesh
          //@ts-expect-error geometry much be at the node.Objext_6.geometry

          geometry={nodes.Object_8.geometry}
          material={materials.MacBookPro}
        />
      </group>
      <mesh
        //@ts-expect-error geometry much be at the node.Objext_6.geometry

        geometry={nodes.Object_4.geometry}
        material={materials.MacBookPro}
      />
    </group>
  );
}

useGLTF.preload("/computerModel.glb");
