import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

const Gangster = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF("./hey_good_lookin_-_vinnie.glb");

  useFrame((state) => {
    if (group.current) {
      const speed = 0.75;
      group.current.rotation.y =
        (Math.sin(state.clock.elapsedTime * speed) * Math.PI) / 2;
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.005}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes._rootJoint} />
          <skinnedMesh
            geometry={nodes.Object_7.geometry}
            material={materials.M_Vinnie_Body}
            skeleton={nodes.Object_7.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Object_8.geometry}
            material={materials.M_Outline}
            skeleton={nodes.Object_8.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Object_10.geometry}
            material={materials.M_Vinnie_Body}
            skeleton={nodes.Object_10.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Object_11.geometry}
            material={materials.M_Outline}
            skeleton={nodes.Object_11.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Object_13.geometry}
            material={materials.M_Vinnie_Body}
            skeleton={nodes.Object_13.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Object_14.geometry}
            material={materials.M_Outline}
            skeleton={nodes.Object_14.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Object_16.geometry}
            material={materials.M_Vinnie_Body}
            skeleton={nodes.Object_16.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Object_17.geometry}
            material={materials.M_Outline}
            skeleton={nodes.Object_17.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Object_19.geometry}
            material={materials.M_Vinnie_Body}
            skeleton={nodes.Object_19.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Object_20.geometry}
            material={materials.M_Outline}
            skeleton={nodes.Object_20.skeleton}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SM_Trashcan_02_M_Bck_Elements_Base_0.geometry}
            material={materials.M_Bck_Elements_Base}
            position={[-31861.138, 4233.494, -2978.033]}
            scale={8169.745}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SM_Trashcan_02_M_Outline_0.geometry}
            material={materials.M_Outline}
            position={[-31860.558, 4259.136, -2978.124]}
            scale={8452.853}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SM_Trash_M_Bck_Elements_Base_0.geometry}
            material={materials.M_Bck_Elements_Base}
            position={[-39133.14, 1127.484, 47.123]}
            scale={6640.368}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SM_Trash_M_Outline_0.geometry}
            material={materials.M_Outline}
            position={[-39133.14, 1281.77, 47.136]}
            scale={6640.368}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SM_Bottle_03_M_Bck_Elements_Base_0.geometry}
            material={materials.M_Bck_Elements_Base}
            position={[13701.674, -940.996, 22830.143]}
            scale={3129.074}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SM_Bottle_03_M_Outline_0.geometry}
            material={materials.M_Outline}
            position={[13693.68, -947.858, 22832.882]}
            scale={3380.437}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SM_Bottle_01_M_Bck_Elements_Base_0.geometry}
            material={materials.M_Bck_Elements_Base}
            position={[-12800.075, 1522.811, -6552.608]}
            scale={2759.61}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SM_Bottle_01_M_Outline_0.geometry}
            material={materials.M_Outline}
            position={[-12793.221, 1528.226, -6542.653]}
            scale={3010.171}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SM_Cigarette_M_Vinnie_Body_0.geometry}
            material={materials.M_Vinnie_Body}
            position={[406.86, 28456.356, -3035.416]}
            scale={444.084}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SM_Cigarette_M_Outline_0.geometry}
            material={materials.M_Outline}
            position={[406.966, 28456.518, -3035.575]}
            scale={500.775}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SM_Bck_M_Bck_Base_0.geometry}
            material={materials.M_Bck_Base}
            position={[-5.316, 35484.556, 13685.557]}
            scale={50120.273}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SM_Bck_M_Outline_0.geometry}
            material={materials.M_Outline}
            position={[-5.316, 35484.556, 13733.36]}
            scale={50120.273}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SM_Newspapper_01_M_Bck_Elements_Base_0.geometry}
            material={materials.M_Bck_Elements_Base}
            position={[22947.646, 889.026, -3038.505]}
            scale={5947.438}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SM_Newspapper_02_M_Bck_Elements_Base_0.geometry}
            material={materials.M_Bck_Elements_Base}
            position={[22458.758, 389.822, -2658.207]}
            scale={6818.046}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SM_Flier_M_Bck_Elements_Base_0.geometry}
            material={materials.M_Bck_Elements_Base}
            position={[-9319.44, -2125.916, 25337.254]}
            scale={4247.998}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SM_Bottle_02_M_Bck_Elements_Base_0.geometry}
            material={materials.M_Bck_Elements_Base}
            position={[-15854.292, -987.143, 21776.326]}
            scale={3215.301}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SM_Bottle_02_M_Outline_0.geometry}
            material={materials.M_Outline}
            position={[-15828.51, -979.191, 21771.671]}
            scale={3433.822}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SM_Trashcan_01_M_Bck_Elements_Base_0.geometry}
            material={materials.M_Bck_Elements_Base}
            position={[-19242.485, 7491.112, -4602.311]}
            scale={7162.881}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SM_Trashcan_01_M_Outline_0.geometry}
            material={materials.M_Outline}
            position={[-19239.109, 7492.609, -4601.337]}
            scale={7376.774}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SM_Trashcan_Lid_M_Bck_Elements_Base_0.geometry}
            material={materials.M_Bck_Elements_Base}
            position={[-19248.973, 14835.48, -4336.484]}
            scale={4931.419}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SM_Trashcan_Lid_M_Outline_0.geometry}
            material={materials.M_Outline}
            position={[-19249.259, 14801.508, -4317.523]}
            scale={5215.981}
          />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("./hey_good_lookin_-_vinnie.glb");

export default Gangster;
