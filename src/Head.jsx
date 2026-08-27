import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Head = (props) => {
  const { nodes, materials } = useGLTF("./head.glb");
  
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y -= delta * 0.5;
    }
  });

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <group scale={0.01}>
        <group
          position={[0, 86.079, -8.384]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Head_Skin_0.geometry}
            material={materials.Skin}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Head_White_0.geometry}
            material={materials.White}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Head_Outline_0.geometry}
            material={materials.Outline}
          />
        </group>
        <group
          position={[13.699, 80.587, 8.425]}
          rotation={[-2.963, -0.112, 0.078]}
          scale={[4.144, 5.804, 5.804]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Eye_Eyes_0.geometry}
            material={materials.Eyes}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Eye_Outline_0.geometry}
            material={materials.Outline}
          />
        </group>
        <group
          position={[0, 86.079, -8.384]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001_Material001_0.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001_Outline_0.geometry}
            material={materials.Outline}
          />
        </group>
        <group
          position={[0, 86.079, -8.384]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002_Sombracelha_0.geometry}
            material={materials.Sombracelha}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002_Outline_0.geometry}
            material={materials.Outline}
          />
        </group>
        <group
          position={[27.026, 75.916, -14.398]}
          rotation={[-1.666, 0.273, 0.806]}
          scale={87.77}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ears_Skin_0.geometry}
            material={materials.Skin}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ears_Outline_0.geometry}
            material={materials.Outline}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.nose_Outline_0.geometry}
          material={materials.Outline}
          position={[0, 86.079, -8.689]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.month_Outline_0.geometry}
          material={materials.Outline}
          position={[0, 87.353, -7.311]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere004_White_0.geometry}
          material={materials.White}
          position={[11.131, 83.165, 11.394]}
          rotation={[-2.963, -0.112, 0.078]}
          scale={0.877}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bright_White_0.geometry}
          material={materials.White}
          position={[-16.319, 83.165, 10.915]}
          rotation={[-2.956, 0.284, 0.006]}
          scale={0.877}
        />
      </group>
    </group>
  );
};

useGLTF.preload("./head.glb");

export default Head;