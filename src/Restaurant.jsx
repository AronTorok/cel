import { useGLTF } from "@react-three/drei";

const Restaurant = (props) => {
  const { nodes, materials } = useGLTF("./resto_ni_teo.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1.429}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-0.063, 2.78, -2.226]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_4.geometry}
              material={materials.wood1}
              position={[0, -0.276, 0]}
              scale={1.161}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_5.geometry}
              material={materials.metal}
              position={[0, -0.234, 0]}
              scale={1.104}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_6.geometry}
              material={materials.Fabric_designs}
              position={[-0.012, -0.759, -0.002]}
              scale={1.021}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_7.geometry}
              material={materials.Lights}
              position={[0, -0.314, 0]}
              scale={1.02}
            />
          </group>
          <group
            position={[-3.195, 2.78, -2.226]}
            rotation={[-Math.PI, 0, -Math.PI]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_9.geometry}
              material={materials.wood1}
              position={[0, -0.276, 0]}
              scale={1.161}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_10.geometry}
              material={materials.metal}
              position={[0, -0.234, 0]}
              scale={1.104}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_11.geometry}
              material={materials.Fabric_designs}
              position={[-0.012, -0.759, -0.002]}
              scale={1.021}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_12.geometry}
              material={materials.Lights}
              position={[0, -0.314, 0]}
              scale={1.02}
            />
          </group>
          <group
            position={[-0.063, 2.78, -0.731]}
            rotation={[-Math.PI, 0, -Math.PI]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_14.geometry}
              material={materials.wood1}
              position={[0, -0.276, 0]}
              scale={1.161}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_15.geometry}
              material={materials.metal}
              position={[0, -0.234, 0]}
              scale={1.104}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_16.geometry}
              material={materials.Fabric_designs}
              position={[-0.012, -0.759, -0.002]}
              scale={1.021}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_17.geometry}
              material={materials.Lights}
              position={[0, -0.314, 0]}
              scale={1.02}
            />
          </group>
          <group position={[-3.195, 2.78, -0.731]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_19.geometry}
              material={materials.wood1}
              position={[0, -0.276, 0]}
              scale={1.161}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_20.geometry}
              material={materials.metal}
              position={[0, -0.234, 0]}
              scale={1.104}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_21.geometry}
              material={materials.Fabric_designs}
              position={[-0.012, -0.759, -0.002]}
              scale={1.021}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_22.geometry}
              material={materials.Lights}
              position={[0, -0.314, 0]}
              scale={1.02}
            />
          </group>
          <group position={[-0.063, 2.78, 0.769]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_24.geometry}
              material={materials.wood1}
              position={[0, -0.276, 0]}
              scale={1.161}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_25.geometry}
              material={materials.metal}
              position={[0, -0.234, 0]}
              scale={1.104}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_26.geometry}
              material={materials.Fabric_designs}
              position={[-0.012, -0.759, -0.002]}
              scale={1.021}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_27.geometry}
              material={materials.Lights}
              position={[0, -0.314, 0]}
              scale={1.02}
            />
          </group>
          <group
            position={[-3.195, 2.78, 0.769]}
            rotation={[-Math.PI, 0, -Math.PI]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_29.geometry}
              material={materials.wood1}
              position={[0, -0.276, 0]}
              scale={1.161}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_30.geometry}
              material={materials.metal}
              position={[0, -0.234, 0]}
              scale={1.104}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_31.geometry}
              material={materials.Fabric_designs}
              position={[-0.012, -0.759, -0.002]}
              scale={1.021}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_32.geometry}
              material={materials.Lights}
              position={[0, -0.314, 0]}
              scale={1.02}
            />
          </group>
          <group
            position={[-0.063, 2.78, 2.264]}
            rotation={[-Math.PI, 0, -Math.PI]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_34.geometry}
              material={materials.wood1}
              position={[0, -0.276, 0]}
              scale={1.161}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_35.geometry}
              material={materials.metal}
              position={[0, -0.234, 0]}
              scale={1.104}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_36.geometry}
              material={materials.Fabric_designs}
              position={[-0.012, -0.759, -0.002]}
              scale={1.021}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_37.geometry}
              material={materials.Lights}
              position={[0, -0.314, 0]}
              scale={1.02}
            />
          </group>
          <group position={[-3.195, 2.78, 2.264]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_39.geometry}
              material={materials.wood1}
              position={[0, -0.276, 0]}
              scale={1.161}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_40.geometry}
              material={materials.metal}
              position={[0, -0.234, 0]}
              scale={1.104}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_41.geometry}
              material={materials.Fabric_designs}
              position={[-0.012, -0.759, -0.002]}
              scale={1.021}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_42.geometry}
              material={materials.Lights}
              position={[0, -0.314, 0]}
              scale={1.02}
            />
          </group>
          <group position={[-0.063, 2.78, 3.812]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_44.geometry}
              material={materials.wood1}
              position={[0, -0.276, 0]}
              scale={1.161}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_45.geometry}
              material={materials.metal}
              position={[0, -0.234, 0]}
              scale={1.104}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_46.geometry}
              material={materials.Fabric_designs}
              position={[-0.012, -0.759, -0.002]}
              scale={1.021}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_47.geometry}
              material={materials.Lights}
              position={[0, -0.314, 0]}
              scale={1.02}
            />
          </group>
          <group
            position={[-0.814, -0.001, 0.742]}
            rotation={[0, Math.PI / 2, 0]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_49.geometry}
              material={materials.wood1}
              position={[0, 0.5, -0.019]}
              scale={0.5}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_50.geometry}
              material={materials.Fabric1}
              position={[0, 0.659, 0.006]}
              scale={0.291}
            />
          </group>
          <group
            position={[0.691, -0.001, 0.742]}
            rotation={[0, -Math.PI / 2, 0]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_52.geometry}
              material={materials.wood1}
              position={[0, 0.5, -0.019]}
              scale={0.5}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_53.geometry}
              material={materials.Fabric1}
              position={[0, 0.659, 0.006]}
              scale={0.291}
            />
          </group>
          <group
            position={[-0.814, -0.001, -0.728]}
            rotation={[0, Math.PI / 2, 0]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_55.geometry}
              material={materials.wood1}
              position={[0, 0.5, -0.019]}
              scale={0.5}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_56.geometry}
              material={materials.Fabric1}
              position={[0, 0.659, 0.006]}
              scale={0.291}
            />
          </group>
          <group
            position={[0.691, -0.001, -0.728]}
            rotation={[0, -Math.PI / 2, 0]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_58.geometry}
              material={materials.wood1}
              position={[0, 0.5, -0.019]}
              scale={0.5}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_59.geometry}
              material={materials.Fabric1}
              position={[0, 0.659, 0.006]}
              scale={0.291}
            />
          </group>
          <group
            position={[-0.814, -0.001, -2.231]}
            rotation={[0, Math.PI / 2, 0]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_61.geometry}
              material={materials.wood1}
              position={[0, 0.5, -0.019]}
              scale={0.5}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_62.geometry}
              material={materials.Fabric1}
              position={[0, 0.659, 0.006]}
              scale={0.291}
            />
          </group>
          <group
            position={[0.691, -0.001, -2.231]}
            rotation={[0, -Math.PI / 2, 0]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_64.geometry}
              material={materials.wood1}
              position={[0, 0.5, -0.019]}
              scale={0.5}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_65.geometry}
              material={materials.Fabric1}
              position={[0, 0.659, 0.006]}
              scale={0.291}
            />
          </group>
          <group
            position={[-0.814, -0.001, 2.237]}
            rotation={[0, Math.PI / 2, 0]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_67.geometry}
              material={materials.wood1}
              position={[0, 0.5, -0.019]}
              scale={0.5}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_68.geometry}
              material={materials.Fabric1}
              position={[0, 0.659, 0.006]}
              scale={0.291}
            />
          </group>
          <group
            position={[0.691, -0.001, 2.237]}
            rotation={[0, -Math.PI / 2, 0]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_70.geometry}
              material={materials.wood1}
              position={[0, 0.5, -0.019]}
              scale={0.5}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_71.geometry}
              material={materials.Fabric1}
              position={[0, 0.659, 0.006]}
              scale={0.291}
            />
          </group>
          <group
            position={[-3.964, -0.001, 0.486]}
            rotation={[0, Math.PI / 2, 0]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_73.geometry}
              material={materials.wood1}
              position={[0, 0.5, -0.019]}
              scale={0.5}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_74.geometry}
              material={materials.Fabric1}
              position={[0, 0.659, 0.006]}
              scale={0.291}
            />
          </group>
          <group
            position={[-2.459, -0.001, 0.486]}
            rotation={[0, -Math.PI / 2, 0]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_76.geometry}
              material={materials.wood1}
              position={[0, 0.5, -0.019]}
              scale={0.5}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_77.geometry}
              material={materials.Fabric1}
              position={[0, 0.659, 0.006]}
              scale={0.291}
            />
          </group>
          <group
            position={[-3.964, -0.001, -0.324]}
            rotation={[0, Math.PI / 2, 0]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_79.geometry}
              material={materials.wood1}
              position={[0, 0.5, -0.019]}
              scale={0.5}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_80.geometry}
              material={materials.Fabric1}
              position={[0, 0.659, 0.006]}
              scale={0.291}
            />
          </group>
          <group
            position={[-2.459, -0.001, -0.324]}
            rotation={[0, -Math.PI / 2, 0]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_82.geometry}
              material={materials.wood1}
              position={[0, 0.5, -0.019]}
              scale={0.5}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_83.geometry}
              material={materials.Fabric1}
              position={[0, 0.659, 0.006]}
              scale={0.291}
            />
          </group>
          <group
            position={[-3.964, -0.001, -2.231]}
            rotation={[0, Math.PI / 2, 0]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_85.geometry}
              material={materials.wood1}
              position={[0, 0.5, -0.019]}
              scale={0.5}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_86.geometry}
              material={materials.Fabric1}
              position={[0, 0.659, 0.006]}
              scale={0.291}
            />
          </group>
          <group
            position={[-2.459, -0.001, -2.231]}
            rotation={[0, -Math.PI / 2, 0]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_88.geometry}
              material={materials.wood1}
              position={[0, 0.5, -0.019]}
              scale={0.5}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_89.geometry}
              material={materials.Fabric1}
              position={[0, 0.659, 0.006]}
              scale={0.291}
            />
          </group>
          <group
            position={[-3.964, -0.001, 2.237]}
            rotation={[0, Math.PI / 2, 0]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_91.geometry}
              material={materials.wood1}
              position={[0, 0.5, -0.019]}
              scale={0.5}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_92.geometry}
              material={materials.Fabric1}
              position={[0, 0.659, 0.006]}
              scale={0.291}
            />
          </group>
          <group
            position={[-2.459, -0.001, 2.237]}
            rotation={[0, -Math.PI / 2, 0]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_94.geometry}
              material={materials.wood1}
              position={[0, 0.5, -0.019]}
              scale={0.5}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_95.geometry}
              material={materials.Fabric1}
              position={[0, 0.659, 0.006]}
              scale={0.291}
            />
          </group>
          <group
            position={[-0.814, -0.001, 3.773]}
            rotation={[0, Math.PI / 2, 0]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_97.geometry}
              material={materials.wood1}
              position={[0, 0.5, -0.019]}
              scale={0.5}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_98.geometry}
              material={materials.Fabric1}
              position={[0, 0.659, 0.006]}
              scale={0.291}
            />
          </group>
          <group
            position={[0.691, -0.001, 3.773]}
            rotation={[0, -Math.PI / 2, 0]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_100.geometry}
              material={materials.wood1}
              position={[0, 0.5, -0.019]}
              scale={0.5}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_101.geometry}
              material={materials.Fabric1}
              position={[0, 0.659, 0.006]}
              scale={0.291}
            />
          </group>
          <group
            position={[2.448, -0.003, -2.231]}
            rotation={[0, Math.PI / 2, 0]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_103.geometry}
              material={materials.wood1}
              position={[0, 0.554, -0.01]}
              scale={0.554}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_104.geometry}
              material={materials.Fabric1}
              position={[0, 0.774, 0.031]}
              scale={0.254}
            />
          </group>
          <group
            position={[2.448, -0.003, -0.729]}
            rotation={[0, Math.PI / 2, 0]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_106.geometry}
              material={materials.wood1}
              position={[0, 0.554, -0.01]}
              scale={0.554}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_107.geometry}
              material={materials.Fabric1}
              position={[0, 0.774, 0.031]}
              scale={0.254}
            />
          </group>
          <group
            position={[2.448, -0.003, 0.751]}
            rotation={[0, Math.PI / 2, 0]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_109.geometry}
              material={materials.wood1}
              position={[0, 0.554, -0.01]}
              scale={0.554}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_110.geometry}
              material={materials.Fabric1}
              position={[0, 0.774, 0.031]}
              scale={0.254}
            />
          </group>
          <group
            position={[2.448, -0.003, 2.242]}
            rotation={[0, Math.PI / 2, 0]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_112.geometry}
              material={materials.wood1}
              position={[0, 0.554, -0.01]}
              scale={0.554}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_113.geometry}
              material={materials.Fabric1}
              position={[0, 0.774, 0.031]}
              scale={0.254}
            />
          </group>
          <group
            position={[2.448, -0.003, 3.777]}
            rotation={[0, Math.PI / 2, 0]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_115.geometry}
              material={materials.wood1}
              position={[0, 0.554, -0.01]}
              scale={0.554}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_116.geometry}
              material={materials.Fabric1}
              position={[0, 0.774, 0.031]}
              scale={0.254}
            />
          </group>
          <group position={[1.256, 1.841, 5.824]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_118.geometry}
              material={materials.Fabric2}
              position={[-0.869, 0, -0.082]}
              scale={3.183}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_119.geometry}
              material={materials.gold}
              position={[-0.869, -0.99, -0.082]}
              scale={3.183}
            />
          </group>
          <group position={[0.382, 3.029, 5.739]} scale={[3.09, 1.691, 1.691]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_121.geometry}
              material={materials.metal}
              scale={1.05}
            />
          </group>
          <group
            position={[-0.79, 3.219, -4.465]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={[0.09, 0.068, 0.163]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_123.geometry}
              material={materials.wood1}
              position={[0, 84.943, 0]}
              scale={84.943}
            />
          </group>
          <group
            position={[-5.52, 3.214, -1.949]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.09, 0.071, 0.163]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_125.geometry}
              material={materials.wood1}
              position={[-0.326, 63.707, 0]}
              scale={63.707}
            />
          </group>
          <group
            position={[-5.52, 3.214, 2.059]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.09, 0.071, 0.163]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_127.geometry}
              material={materials.wood1}
              position={[-0.326, 63.707, 0]}
              scale={63.707}
            />
          </group>
          <group position={[0.418, 1.05, -4.478]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_129.geometry}
              material={materials.wood1}
              position={[-0.418, -0.045, -0.04]}
              scale={1.009}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_130.geometry}
              material={materials.OutsideGlass}
              position={[-0.418, -0.041, -0.028]}
              scale={0.953}
            />
          </group>
          <group position={[1.483, 1.7, -4.5]} rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_132.geometry}
              material={materials.wood1}
              position={[0.252, -0.001, 0.393]}
              scale={0.794}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_133.geometry}
              material={materials.OutsideGlass}
              position={[0.252, 0.004, 0.393]}
              scale={0.742}
            />
          </group>
          <group position={[-1.941, 1.7, -4.5]} rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_135.geometry}
              material={materials.wood1}
              position={[0.252, -0.001, 0.393]}
              scale={0.794}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_136.geometry}
              material={materials.OutsideGlass}
              position={[0.252, 0.004, 0.393]}
              scale={0.742}
            />
          </group>
          <group position={[0, 0, -4.5]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_138.geometry}
              material={materials.wood2}
              position={[0, 1.05, -0.013]}
              scale={1.05}
            />
          </group>
          <group position={[3.632, 0, -3.297]} rotation={[0, -Math.PI / 2, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_140.geometry}
              material={materials.wood2}
              position={[-0.338, 1.05, -0.013]}
              scale={1.05}
            />
          </group>
          <group position={[-4.251, 1.7, -4.5]} rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_142.geometry}
              material={materials.wood1}
              position={[0.252, -0.001, 0.393]}
              scale={0.794}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_143.geometry}
              material={materials.OutsideGlass}
              position={[0.252, 0.004, 0.393]}
              scale={0.742}
            />
          </group>
          <group
            position={[-5.664, 1.7, -2.721]}
            rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_145.geometry}
              material={materials.wood1}
              position={[0.252, -0.001, 0.393]}
              scale={0.794}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_146.geometry}
              material={materials.OutsideGlass2}
              position={[0.252, 0.004, 0.393]}
              scale={0.742}
            />
          </group>
          <group
            position={[-5.664, 1.7, 0.116]}
            rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_148.geometry}
              material={materials.wood1}
              position={[0.252, -0.001, 0.393]}
              scale={0.794}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_149.geometry}
              material={materials.OutsideGlass2}
              position={[0.252, 0.004, 0.393]}
              scale={0.742}
            />
          </group>
          <group
            position={[-5.664, 1.7, 2.938]}
            rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_151.geometry}
              material={materials.wood1}
              position={[0.252, -0.001, 0.393]}
              scale={0.794}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_152.geometry}
              material={materials.OutsideGlass2}
              position={[0.252, 0.004, 0.393]}
              scale={0.742}
            />
          </group>
          <group
            position={[-3.87, 1.7, 4.311]}
            rotation={[Math.PI / 2, 0, Math.PI]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_154.geometry}
              material={materials.wood1}
              position={[0.252, -0.001, 0.393]}
              scale={0.794}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_155.geometry}
              material={materials.OutsideGlass2}
              position={[0.252, 0.004, 0.393]}
              scale={0.742}
            />
          </group>
          <group position={[1.263, 0, 1.586]} scale={6.132}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_157.geometry}
              material={materials.floor_wood}
              position={[-0.377, 0.048, -0.04]}
              scale={0.961}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_158.geometry}
              material={materials.floor_tile1}
              position={[0.688, 0.048, -0.04]}
              scale={0.961}
            />
          </group>
          <group
            position={[0.539, 0.589, 5.544]}
            rotation={[-Math.PI, 0, 0]}
            scale={[0.01, 0.009, 0.01]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_160.geometry}
              material={materials.Gradient_rubber}
              position={[0, -65.238, -10.681]}
              scale={65.238}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_161.geometry}
              material={materials.Gradient_metal}
              position={[-2.064, -69.826, -7.408]}
              scale={61.864}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_162.geometry}
              material={materials.Grille}
              position={[-2.355, -128.571, -34.805]}
              scale={2.837}
            />
          </group>
          <group position={[6.771, 1.03, 0.924]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_164.geometry}
              material={materials.floor_wood}
              position={[0, -0.001, 0.076]}
              scale={0.122}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_165.geometry}
              material={materials.floor_tile1}
              position={[0, -0.006, 0.341]}
              scale={0.17}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_166.geometry}
              material={materials.KitchenMetals}
              position={[0, -0.025, 0.341]}
              scale={0.116}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_167.geometry}
              material={materials.Kitchenoven}
              position={[0, -0.025, 0.341]}
              scale={0.121}
            />
          </group>
          <group position={[5.317, 0.923, 0.437]} rotation={[0, 0.679, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_169.geometry}
              material={materials.floor_wood}
              position={[0, -0.001, 0.076]}
              scale={0.122}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_170.geometry}
              material={materials.floor_tile1}
              position={[0, -0.006, 0.341]}
              scale={0.17}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_171.geometry}
              material={materials.KitchenMetals}
              position={[0, -0.025, 0.341]}
              scale={0.116}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_172.geometry}
              material={materials.Kitchenoven}
              position={[0, -0.025, 0.341]}
              scale={0.121}
            />
          </group>
          <group position={[5.719, 0.923, -0.008]} rotation={[0, -0.611, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_174.geometry}
              material={materials.floor_wood}
              position={[0, -0.001, 0.076]}
              scale={0.122}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_175.geometry}
              material={materials.floor_tile1}
              position={[0, -0.006, 0.341]}
              scale={0.17}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_176.geometry}
              material={materials.KitchenMetals}
              position={[0, -0.025, 0.341]}
              scale={0.116}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_177.geometry}
              material={materials.Kitchenoven}
              position={[0, -0.025, 0.341]}
              scale={0.121}
            />
          </group>
          <group position={[5.317, 0.923, -0.564]} rotation={[0, 0.679, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_179.geometry}
              material={materials.floor_wood}
              position={[0, -0.001, 0.076]}
              scale={0.122}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_180.geometry}
              material={materials.floor_tile1}
              position={[0, -0.006, 0.341]}
              scale={0.17}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_181.geometry}
              material={materials.KitchenMetals}
              position={[0, -0.025, 0.341]}
              scale={0.116}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_182.geometry}
              material={materials.Kitchenoven}
              position={[0, -0.025, 0.341]}
              scale={0.121}
            />
          </group>
          <group
            position={[5.244, 0.923, -0.691]}
            rotation={[-Math.PI, 1.019, -Math.PI]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_184.geometry}
              material={materials.floor_wood}
              position={[0, -0.001, 0.076]}
              scale={0.122}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_185.geometry}
              material={materials.floor_tile1}
              position={[0, -0.006, 0.341]}
              scale={0.17}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_186.geometry}
              material={materials.KitchenMetals}
              position={[0, -0.025, 0.341]}
              scale={0.116}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_187.geometry}
              material={materials.Kitchenoven}
              position={[0, -0.025, 0.341]}
              scale={0.121}
            />
          </group>
          <group position={[5.317, 0.923, -1.773]} rotation={[0, 0.684, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_189.geometry}
              material={materials.floor_wood}
              position={[0, -0.001, 0.076]}
              scale={0.122}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_190.geometry}
              material={materials.floor_tile1}
              position={[0, -0.006, 0.341]}
              scale={0.17}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_191.geometry}
              material={materials.KitchenMetals}
              position={[0, -0.025, 0.341]}
              scale={0.116}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_192.geometry}
              material={materials.Kitchenoven}
              position={[0, -0.025, 0.341]}
              scale={0.121}
            />
          </group>
          <group position={[5.259, 0.923, -2.076]} rotation={[0, 1.065, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_194.geometry}
              material={materials.floor_wood}
              position={[0, -0.001, 0.076]}
              scale={0.122}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_195.geometry}
              material={materials.floor_tile1}
              position={[0, -0.006, 0.341]}
              scale={0.17}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_196.geometry}
              material={materials.KitchenMetals}
              position={[0, -0.025, 0.341]}
              scale={0.116}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_197.geometry}
              material={materials.Kitchenoven}
              position={[0, -0.025, 0.341]}
              scale={0.121}
            />
          </group>
          <group position={[5.719, 0.923, 1.786]} rotation={[0, -0.611, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_199.geometry}
              material={materials.floor_wood}
              position={[0, -0.001, 0.076]}
              scale={0.122}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_200.geometry}
              material={materials.floor_tile1}
              position={[0, -0.006, 0.341]}
              scale={0.17}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_201.geometry}
              material={materials.KitchenMetals}
              position={[0, -0.025, 0.341]}
              scale={0.116}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_202.geometry}
              material={materials.Kitchenoven}
              position={[0, -0.025, 0.341]}
              scale={0.121}
            />
          </group>
          <group position={[5.335, 0.923, 3.352]} rotation={[0, 0.54, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_204.geometry}
              material={materials.floor_wood}
              position={[0, -0.001, 0.076]}
              scale={0.122}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_205.geometry}
              material={materials.floor_tile1}
              position={[0, -0.006, 0.341]}
              scale={0.17}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_206.geometry}
              material={materials.KitchenMetals}
              position={[0, -0.025, 0.341]}
              scale={0.116}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_207.geometry}
              material={materials.Kitchenoven}
              position={[0, -0.025, 0.341]}
              scale={0.121}
            />
          </group>
          <group position={[3.9, 1.415, 2.962]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_209.geometry}
              material={materials.plate}
              position={[0, 0.04, 0]}
              scale={0.15}
            />
          </group>
          <group position={[3.9, 1.415, 2.635]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_211.geometry}
              material={materials.plate}
              position={[0, 0.109, 0]}
              scale={0.15}
            />
          </group>
          <group position={[3.9, 1.415, 2.324]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_213.geometry}
              material={materials.plate}
              position={[0, 0.069, 0]}
              scale={0.15}
            />
          </group>
          <group position={[3.9, 1.709, 3.061]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_215.geometry}
              material={materials.plate}
              position={[0, 0.069, 0]}
              scale={0.08}
            />
          </group>
          <group position={[3.9, 1.709, 2.891]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_217.geometry}
              material={materials.plate}
              position={[0, 0.04, 0]}
              scale={0.079}
            />
          </group>
          <group position={[3.9, 1.709, 2.728]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_219.geometry}
              material={materials.plate}
              position={[0, 0.089, 0]}
              scale={0.099}
            />
          </group>
          <group position={[3.9, 1.709, 2.557]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_221.geometry}
              material={materials.plate}
              position={[0, 0.04, 0]}
              scale={0.079}
            />
          </group>
          <group position={[3.9, 1.709, 2.39]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_223.geometry}
              material={materials.plate}
              position={[0, 0.069, 0]}
              scale={0.08}
            />
          </group>
          <group position={[3.9, 1.709, 2.224]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_225.geometry}
              material={materials.plate}
              position={[0, 0.02, 0]}
              scale={0.079}
            />
          </group>
          <group position={[3.9, 2.014, 3.068]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_227.geometry}
              material={materials.plate}
              position={[0, 0.04, 0]}
              scale={0.079}
            />
          </group>
          <group position={[3.9, 2.014, 2.874]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_229.geometry}
              material={materials.plate}
              position={[0, 0.06, 0]}
              scale={0.081}
            />
          </group>
          <group position={[3.9, 2.014, 2.613]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_231.geometry}
              material={materials.plate}
              position={[0, 0.04, 0]}
              scale={0.079}
            />
          </group>
          <group position={[3.9, 2.014, 2.429]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_233.geometry}
              material={materials.plate}
              position={[0, 0.08, 0]}
              scale={0.101}
            />
          </group>
          <group position={[3.9, 2.014, 2.259]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_235.geometry}
              material={materials.plate}
              position={[0, 0.02, 0]}
              scale={0.079}
            />
          </group>
          <group
            position={[4.008, 1.589, 2.026]}
            rotation={[0, Math.PI / 2, 0]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_237.geometry}
              material={materials.plate}
              position={[0.42, 0.038, -0.111]}
              scale={0.467}
            />
          </group>
          <group position={[3.9, 1.415, 0.882]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_239.geometry}
              material={materials.plate}
              position={[0, 0.089, 0]}
              scale={0.15}
            />
          </group>
          <group position={[3.9, 1.415, 0.556]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_241.geometry}
              material={materials.plate}
              position={[0, 0.04, 0]}
              scale={0.15}
            />
          </group>
          <group position={[3.9, 1.415, 0.245]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_243.geometry}
              material={materials.plate}
              position={[0, 0.059, 0]}
              scale={0.15}
            />
          </group>
          <group position={[3.9, 1.709, 0.982]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_245.geometry}
              material={materials.plate}
              position={[0, 0.048, 0]}
              scale={0.079}
            />
          </group>
          <group position={[3.9, 1.709, 0.812]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_247.geometry}
              material={materials.plate}
              position={[0, 0.069, 0]}
              scale={0.08}
            />
          </group>
          <group position={[3.9, 1.709, 0.649]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_249.geometry}
              material={materials.plate}
              position={[0, 0.03, 0]}
              scale={0.079}
            />
          </group>
          <group position={[3.9, 1.709, 0.478]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_251.geometry}
              material={materials.plate}
              position={[0, 0.089, 0]}
              scale={0.099}
            />
          </group>
          <group position={[3.9, 1.709, 0.311]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_253.geometry}
              material={materials.plate}
              position={[0, 0.03, 0]}
              scale={0.079}
            />
          </group>
          <group position={[3.9, 2.014, 0.988]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_255.geometry}
              material={materials.plate}
              position={[0, 0.02, 0]}
              scale={0.079}
            />
          </group>
          <group position={[3.9, 2.014, 0.795]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_257.geometry}
              material={materials.plate}
              position={[0, 0.04, 0]}
              scale={0.079}
            />
          </group>
          <group position={[3.9, 2.014, 0.534]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_259.geometry}
              material={materials.plate}
              position={[0, 0.06, 0]}
              scale={0.081}
            />
          </group>
          <group position={[3.9, 2.014, 0.35]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_261.geometry}
              material={materials.plate}
              position={[0, 0.04, 0]}
              scale={0.079}
            />
          </group>
          <group position={[3.9, 2.014, 0.18]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_263.geometry}
              material={materials.plate}
              position={[0, 0.04, 0]}
              scale={0.079}
            />
          </group>
          <group
            position={[4.008, 1.424, -1.206]}
            rotation={[0, Math.PI / 2, 0]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_265.geometry}
              material={materials.plate}
              position={[0.42, 0.038, -0.111]}
              scale={0.467}
            />
          </group>
          <group position={[3.9, 1.709, -1.243]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_267.geometry}
              material={materials.plate}
              position={[0, 0.069, 0]}
              scale={0.08}
            />
          </group>
          <group position={[3.9, 1.709, -1.576]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_269.geometry}
              material={materials.plate}
              position={[0, 0.069, 0]}
              scale={0.08}
            />
          </group>
          <group position={[3.9, 1.709, -1.914]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_271.geometry}
              material={materials.plate}
              position={[0, 0.049, 0]}
              scale={0.079}
            />
          </group>
          <group position={[3.9, 2.007, -1.278]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_273.geometry}
              material={materials.plate}
              position={[0, 0.04, 0]}
              scale={0.15}
            />
          </group>
          <group position={[3.9, 2.007, -1.791]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_275.geometry}
              material={materials.plate}
              position={[0, 0.03, 0]}
              scale={0.15}
            />
          </group>
          <group position={[1.263, 3.345, 1.586]} scale={6.132}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_277.geometry}
              material={materials.floor_wood}
              position={[-0.067, 0, -0.04]}
              scale={1.065}
            />
          </group>
          <group
            position={[3.757, 1.828, 3.16]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.551, 0.551, 1.035]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_279.geometry}
              material={materials.KitchenMetals}
              scale={0.453}
            />
          </group>
          <group
            position={[3.757, 1.828, 2.128]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.551, 0.551, 1.035]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_281.geometry}
              material={materials.KitchenMetals}
              scale={0.453}
            />
          </group>
          <group
            position={[3.757, 1.828, 1.084]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.551, 0.551, 1.035]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_283.geometry}
              material={materials.KitchenMetals}
              scale={0.453}
            />
          </group>
          <group
            position={[3.757, 1.828, 0.052]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.551, 0.551, 1.035]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_285.geometry}
              material={materials.KitchenMetals}
              scale={0.453}
            />
          </group>
          <group
            position={[4.043, 1.828, 3.16]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.551, 0.551, 1.035]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_287.geometry}
              material={materials.KitchenMetals}
              scale={0.453}
            />
          </group>
          <group
            position={[4.043, 1.828, 2.128]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.551, 0.551, 1.035]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_289.geometry}
              material={materials.KitchenMetals}
              scale={0.453}
            />
          </group>
          <group
            position={[4.043, 1.828, 1.084]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.551, 0.551, 1.035]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_291.geometry}
              material={materials.KitchenMetals}
              scale={0.453}
            />
          </group>
          <group
            position={[4.043, 1.828, 0.052]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.551, 0.551, 1.035]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_293.geometry}
              material={materials.KitchenMetals}
              scale={0.453}
            />
          </group>
          <group position={[3.9, 1.386, 2.64]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_295.geometry}
              material={materials.wood3}
              position={[0, 0.442, 0]}
              scale={0.554}
            />
          </group>
          <group position={[3.9, 1.386, 0.568]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_297.geometry}
              material={materials.wood3}
              position={[0, 0.442, 0]}
              scale={0.554}
            />
          </group>
          <group position={[3.9, 1.549, 1.61]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_299.geometry}
              material={materials.wood3}
              position={[0, 0.279, 0]}
              scale={0.554}
            />
          </group>
          <group
            position={[3.757, 1.828, -1.09]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.551, 0.551, 1.035]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_301.geometry}
              material={materials.KitchenMetals}
              scale={0.453}
            />
          </group>
          <group
            position={[3.757, 1.828, -2.122]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.551, 0.551, 1.035]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_303.geometry}
              material={materials.KitchenMetals}
              scale={0.453}
            />
          </group>
          <group
            position={[4.043, 1.828, -1.09]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.551, 0.551, 1.035]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_305.geometry}
              material={materials.KitchenMetals}
              scale={0.453}
            />
          </group>
          <group
            position={[4.043, 1.828, -2.122]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.551, 0.551, 1.035]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_307.geometry}
              material={materials.KitchenMetals}
              scale={0.453}
            />
          </group>
          <group position={[3.9, 1.386, -1.605]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_309.geometry}
              material={materials.wood3}
              position={[0, 0.442, 0]}
              scale={0.554}
            />
          </group>
          <group position={[7.117, 1.828, 1.628]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_311.geometry}
              material={materials.KitchenMetals}
              position={[-0.151, 0.579, -0.019]}
              scale={0.965}
            />
          </group>
          <group
            position={[3.941, 2.522, 3.66]}
            rotation={[-Math.PI, 0, -Math.PI]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_313.geometry}
              material={materials.KitchenMetals}
              position={[-0.151, 0.23, -0.019]}
              scale={0.616}
            />
          </group>
          <group
            position={[3.941, 2.522, -0.481]}
            rotation={[-Math.PI, 0, -Math.PI]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_315.geometry}
              material={materials.KitchenMetals}
              position={[-0.151, 0.23, -0.019]}
              scale={0.616}
            />
          </group>
          <group position={[4.148, 1.003, -1.495]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_317.geometry}
              material={materials.KitchenMetals}
              position={[-0.032, -0.533, 4.139]}
              scale={3.607}
            />
          </group>
          <group
            position={[6.904, 1.003, -1.495]}
            rotation={[-Math.PI, 0, -Math.PI]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_319.geometry}
              material={materials.KitchenMetals}
              position={[-0.032, -0.533, -2.587]}
              scale={2.055}
            />
          </group>
          <group position={[4.412, 0.429, 0.578]} scale={0.943}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_321.geometry}
              material={materials.KitchenMetals}
              position={[0.066, 0.009, 0]}
              scale={0.494}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_322.geometry}
              material={materials.Kitchenoven}
              position={[0.042, -0.043, 0]}
              scale={0.462}
            />
          </group>
          <group position={[4.412, 0.429, 1.612]} scale={0.943}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_324.geometry}
              material={materials.KitchenMetals}
              position={[0.066, 0.009, 0]}
              scale={0.494}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_325.geometry}
              material={materials.Kitchenoven}
              position={[0.042, -0.043, 0]}
              scale={0.462}
            />
          </group>
          <group position={[4.412, 0.429, 2.65]} scale={0.943}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_327.geometry}
              material={materials.KitchenMetals}
              position={[0.066, 0.009, 0]}
              scale={0.494}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_328.geometry}
              material={materials.Kitchenoven}
              position={[0.042, -0.043, 0]}
              scale={0.462}
            />
          </group>
          <group
            position={[6.64, 0.429, 2.65]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={0.943}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_330.geometry}
              material={materials.KitchenMetals}
              position={[0.066, 0.009, 0]}
              scale={0.494}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_331.geometry}
              material={materials.Kitchenoven}
              position={[0.042, -0.043, 0]}
              scale={0.462}
            />
          </group>
          <group
            position={[6.64, 0.429, 0.579]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={0.943}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_333.geometry}
              material={materials.KitchenMetals}
              position={[0.066, 0.009, 0]}
              scale={0.494}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_334.geometry}
              material={materials.Kitchenoven}
              position={[0.042, -0.043, 0]}
              scale={0.462}
            />
          </group>
          <group
            position={[6.64, 0.429, -0.468]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={0.943}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_336.geometry}
              material={materials.KitchenMetals}
              position={[0.066, 0.009, 0]}
              scale={0.494}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_337.geometry}
              material={materials.Kitchenoven}
              position={[0.042, -0.043, 0]}
              scale={0.462}
            />
          </group>
          <group position={[4.412, 0.429, 5.749]} scale={0.943}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_339.geometry}
              material={materials.KitchenMetals}
              position={[0.066, 0.009, 0]}
              scale={0.494}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_340.geometry}
              material={materials.Kitchenoven}
              position={[0.042, -0.043, 0]}
              scale={0.462}
            />
          </group>
          <group
            position={[4.192, 0.921, -0.455]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.043, 0.059, 0.043]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_342.geometry}
              material={materials.KitchenMetals}
              position={[3.754, 4.158, -0.224]}
              scale={10.4}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_343.geometry}
              material={materials.Kitchenoven}
              position={[1.458, -0.832, 0.043]}
              scale={10.7}
            />
          </group>
          <group
            position={[4.192, 0.921, 3.681]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.043, 0.059, 0.043]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_345.geometry}
              material={materials.KitchenMetals}
              position={[3.754, 4.158, -0.224]}
              scale={10.4}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_346.geometry}
              material={materials.Kitchenoven}
              position={[1.458, -0.832, 0.043]}
              scale={10.7}
            />
          </group>
          <group
            position={[6.858, 0.921, 1.605]}
            rotation={[Math.PI, 0, Math.PI / 2]}
            scale={[0.043, 0.059, 0.043]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_348.geometry}
              material={materials.KitchenMetals}
              position={[3.754, 4.158, -0.224]}
              scale={10.4}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_349.geometry}
              material={materials.Kitchenoven}
              position={[1.458, -0.832, 0.043]}
              scale={10.7}
            />
          </group>
          <group position={[4.199, 0.636, -1.495]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_351.geometry}
              material={materials.KitchenMetals}
              position={[-0.083, -0.166, 0]}
              scale={0.502}
            />
          </group>
          <group
            position={[6.851, 0.636, -1.495]}
            rotation={[-Math.PI, 0, -Math.PI]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_353.geometry}
              material={materials.KitchenMetals}
              position={[-0.083, -0.166, 0]}
              scale={0.502}
            />
          </group>
          <group position={[6.875, 0.538, 4.623]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_355.geometry}
              material={materials.KitchenMetals}
              position={[-0.089, 0.494, 0]}
              scale={0.903}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_356.geometry}
              material={materials.Kitchenoven}
              position={[-0.037, 0.402, 0]}
              scale={0.937}
            />
          </group>
          <group position={[6.875, 0.538, -2.433]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_358.geometry}
              material={materials.KitchenMetals}
              position={[-0.089, 0.494, 0]}
              scale={0.903}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_359.geometry}
              material={materials.Kitchenoven}
              position={[-0.037, 0.402, 0]}
              scale={0.937}
            />
          </group>
          <group
            position={[6.871, 0.678, 3.679]}
            rotation={[-Math.PI, 0, -Math.PI]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_361.geometry}
              material={materials.KitchenMetals}
              position={[-0.071, -0.029, 0]}
              scale={0.646}
            />
          </group>
          <group position={[4.181, 0.678, 4.712]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_363.geometry}
              material={materials.KitchenMetals}
              position={[-0.071, -0.029, 0]}
              scale={0.646}
            />
          </group>
          <group
            position={[6.597, 0.796, 0.367]}
            rotation={[Math.PI, 0, Math.PI / 2]}
            scale={[0.043, 0.059, 0.043]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_365.geometry}
              material={materials.KitchenMetals}
              position={[0.087, -0.172, -4.98]}
              scale={5.98}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_366.geometry}
              material={materials.Kitchenoven}
              position={[0.087, 0.267, -4.98]}
              scale={5.98}
            />
          </group>
          <group
            position={[6.597, 0.796, -0.67]}
            rotation={[Math.PI, 0, Math.PI / 2]}
            scale={[0.043, 0.059, 0.043]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_368.geometry}
              material={materials.KitchenMetals}
              position={[0.087, -0.172, -4.98]}
              scale={5.98}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_369.geometry}
              material={materials.Kitchenoven}
              position={[0.087, 0.267, -4.98]}
              scale={5.98}
            />
          </group>
          <group
            position={[6.597, 0.796, 2.412]}
            rotation={[Math.PI, 0, Math.PI / 2]}
            scale={[0.043, 0.059, 0.043]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_371.geometry}
              material={materials.KitchenMetals}
              position={[0.087, -0.172, -4.98]}
              scale={5.98}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_372.geometry}
              material={materials.Kitchenoven}
              position={[0.087, 0.267, -4.98]}
              scale={5.98}
            />
          </group>
          <group
            position={[4.459, 0.796, 5.986]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.043, 0.059, 0.043]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_374.geometry}
              material={materials.KitchenMetals}
              position={[0.087, -0.172, -4.98]}
              scale={5.98}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_375.geometry}
              material={materials.Kitchenoven}
              position={[0.087, 0.267, -4.98]}
              scale={5.98}
            />
          </group>
          <group
            position={[4.459, 0.796, 2.854]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.043, 0.059, 0.043]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_377.geometry}
              material={materials.KitchenMetals}
              position={[0.087, -0.172, -4.98]}
              scale={5.98}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_378.geometry}
              material={materials.Kitchenoven}
              position={[0.087, 0.267, -4.98]}
              scale={5.98}
            />
          </group>
          <group
            position={[4.459, 0.796, 1.815]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.043, 0.059, 0.043]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_380.geometry}
              material={materials.KitchenMetals}
              position={[0.087, -0.172, -4.98]}
              scale={5.98}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_381.geometry}
              material={materials.Kitchenoven}
              position={[0.087, 0.267, -4.98]}
              scale={5.98}
            />
          </group>
          <group
            position={[4.459, 0.796, 0.799]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.043, 0.059, 0.043]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_383.geometry}
              material={materials.KitchenMetals}
              position={[0.087, -0.172, -4.98]}
              scale={5.98}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_384.geometry}
              material={materials.Kitchenoven}
              position={[0.087, 0.267, -4.98]}
              scale={5.98}
            />
          </group>
          <group position={[5.499, 0.636, 3.365]} scale={[0.828, 1, 1]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_386.geometry}
              material={materials.KitchenMetals}
              position={[0, -0.189, -0.512]}
              scale={1.015}
            />
          </group>
          <group position={[5.499, 0.636, 0.372]} scale={[0.828, 1, 1]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_388.geometry}
              material={materials.KitchenMetals}
              position={[0, -0.189, -1.025]}
              scale={1.527}
            />
          </group>
          <group position={[-0.06, -0.002, 0.753]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_390.geometry}
              material={materials.wood2}
              position={[0, 0.357, 0]}
              scale={0.364}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_391.geometry}
              material={materials.wood5}
              position={[0, 0.73, 0]}
              scale={0.459}
            />
          </group>
          <group position={[-0.06, -0.002, -0.718]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_393.geometry}
              material={materials.wood2}
              position={[0, 0.357, 0]}
              scale={0.364}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_394.geometry}
              material={materials.wood5}
              position={[0, 0.73, 0]}
              scale={0.459}
            />
          </group>
          <group position={[-0.06, -0.002, -2.22]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_396.geometry}
              material={materials.wood2}
              position={[0, 0.357, 0]}
              scale={0.364}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_397.geometry}
              material={materials.wood5}
              position={[0, 0.73, 0]}
              scale={0.459}
            />
          </group>
          <group position={[-0.06, -0.002, 2.247]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_399.geometry}
              material={materials.wood2}
              position={[0, 0.357, 0]}
              scale={0.364}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_400.geometry}
              material={materials.wood5}
              position={[0, 0.73, 0]}
              scale={0.459}
            />
          </group>
          <group position={[-3.21, -0.002, 0.497]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_402.geometry}
              material={materials.wood2}
              position={[0, 0.357, 0]}
              scale={0.364}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_403.geometry}
              material={materials.wood5}
              position={[0, 0.73, 0]}
              scale={0.459}
            />
          </group>
          <group position={[-3.21, -0.002, -0.314]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_405.geometry}
              material={materials.wood2}
              position={[0, 0.357, 0]}
              scale={0.364}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_406.geometry}
              material={materials.wood5}
              position={[0, 0.73, 0]}
              scale={0.459}
            />
          </group>
          <group position={[-3.21, -0.002, -2.22]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_408.geometry}
              material={materials.wood2}
              position={[0, 0.357, 0]}
              scale={0.364}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_409.geometry}
              material={materials.wood5}
              position={[0, 0.73, 0]}
              scale={0.459}
            />
          </group>
          <group position={[-3.21, -0.002, 2.247]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_411.geometry}
              material={materials.wood2}
              position={[0, 0.357, 0]}
              scale={0.364}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_412.geometry}
              material={materials.wood5}
              position={[0, 0.73, 0]}
              scale={0.459}
            />
          </group>
          <group position={[-0.06, -0.002, 3.783]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_414.geometry}
              material={materials.wood2}
              position={[0, 0.357, 0]}
              scale={0.364}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_415.geometry}
              material={materials.wood5}
              position={[0, 0.73, 0]}
              scale={0.459}
            />
          </group>
          <group position={[3.214, 1.066, 0.792]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_417.geometry}
              material={materials.wood5}
              position={[0, -0.001, 0]}
              scale={3.585}
            />
          </group>
          <group position={[-0.069, 0.776, 3.774]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_419.geometry}
              material={materials.plate2}
              position={[0, 0.028, 0]}
              scale={0.132}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_420.geometry}
              material={materials.floor_wood}
              position={[0, 0.076, -0.085]}
              scale={0.079}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_421.geometry}
              material={materials.wood3}
              position={[0.008, 0.027, 0.035]}
              scale={0.084}
            />
          </group>
          <group
            position={[-0.069, 0.776, 2.237]}
            rotation={[-Math.PI, 0, -Math.PI]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_423.geometry}
              material={materials.plate2}
              position={[0, 0.028, 0]}
              scale={0.132}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_424.geometry}
              material={materials.floor_wood}
              position={[0, 0.076, -0.085]}
              scale={0.079}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_425.geometry}
              material={materials.wood3}
              position={[0.008, 0.027, 0.035]}
              scale={0.084}
            />
          </group>
          <group position={[-0.069, 0.776, 0.763]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_427.geometry}
              material={materials.plate2}
              position={[0, 0.028, 0]}
              scale={0.132}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_428.geometry}
              material={materials.floor_wood}
              position={[0, 0.076, -0.085]}
              scale={0.079}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_429.geometry}
              material={materials.wood3}
              position={[0.008, 0.027, 0.035]}
              scale={0.084}
            />
          </group>
          <group
            position={[-0.069, 0.776, -0.775]}
            rotation={[-Math.PI, 0, -Math.PI]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_431.geometry}
              material={materials.plate2}
              position={[0, 0.028, 0]}
              scale={0.132}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_432.geometry}
              material={materials.floor_wood}
              position={[0, 0.076, -0.085]}
              scale={0.079}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_433.geometry}
              material={materials.wood3}
              position={[0.008, 0.027, 0.035]}
              scale={0.084}
            />
          </group>
          <group position={[-0.069, 0.776, -2.277]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_435.geometry}
              material={materials.plate2}
              position={[0, 0.028, 0]}
              scale={0.132}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_436.geometry}
              material={materials.floor_wood}
              position={[0, 0.076, -0.085]}
              scale={0.079}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_437.geometry}
              material={materials.wood3}
              position={[0.008, 0.027, 0.035]}
              scale={0.084}
            />
          </group>
          <group position={[-3.194, 0.776, 2.237]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_439.geometry}
              material={materials.plate2}
              position={[0, 0.028, 0]}
              scale={0.132}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_440.geometry}
              material={materials.floor_wood}
              position={[0, 0.076, -0.085]}
              scale={0.079}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_441.geometry}
              material={materials.wood3}
              position={[0.008, 0.027, 0.035]}
              scale={0.084}
            />
          </group>
          <group
            position={[-3.194, 0.776, 0.501]}
            rotation={[-Math.PI, 0, -Math.PI]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_443.geometry}
              material={materials.plate2}
              position={[0, 0.028, 0]}
              scale={0.132}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_444.geometry}
              material={materials.floor_wood}
              position={[0, 0.076, -0.085]}
              scale={0.079}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_445.geometry}
              material={materials.wood3}
              position={[0.008, 0.027, 0.035]}
              scale={0.084}
            />
          </group>
          <group position={[-3.194, 0.776, -0.363]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_447.geometry}
              material={materials.plate2}
              position={[0, 0.028, 0]}
              scale={0.132}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_448.geometry}
              material={materials.floor_wood}
              position={[0, 0.076, -0.085]}
              scale={0.079}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_449.geometry}
              material={materials.wood3}
              position={[0.008, 0.027, 0.035]}
              scale={0.084}
            />
          </group>
          <group
            position={[-3.194, 0.776, -2.277]}
            rotation={[-Math.PI, 0, -Math.PI]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_451.geometry}
              material={materials.plate2}
              position={[0, 0.028, 0]}
              scale={0.132}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_452.geometry}
              material={materials.floor_wood}
              position={[0, 0.076, -0.085]}
              scale={0.079}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_453.geometry}
              material={materials.wood3}
              position={[0.008, 0.027, 0.035]}
              scale={0.084}
            />
          </group>
          <group
            position={[3.442, 1.11, 3.754]}
            rotation={[-Math.PI, 0, -Math.PI]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_455.geometry}
              material={materials.plate2}
              position={[0, 0.028, 0]}
              scale={0.132}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_456.geometry}
              material={materials.floor_wood}
              position={[0, 0.076, -0.085]}
              scale={0.079}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_457.geometry}
              material={materials.wood3}
              position={[0.008, 0.027, 0.035]}
              scale={0.084}
            />
          </group>
          <group position={[3.442, 1.11, 2.257]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_459.geometry}
              material={materials.plate2}
              position={[0, 0.028, 0]}
              scale={0.132}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_460.geometry}
              material={materials.floor_wood}
              position={[0, 0.076, -0.085]}
              scale={0.079}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_461.geometry}
              material={materials.wood3}
              position={[0.008, 0.027, 0.035]}
              scale={0.084}
            />
          </group>
          <group
            position={[3.442, 1.11, 0.821]}
            rotation={[-Math.PI, 0, -Math.PI]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_463.geometry}
              material={materials.plate2}
              position={[0, 0.028, 0]}
              scale={0.132}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_464.geometry}
              material={materials.floor_wood}
              position={[0, 0.076, -0.085]}
              scale={0.079}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_465.geometry}
              material={materials.wood3}
              position={[0.008, 0.027, 0.035]}
              scale={0.084}
            />
          </group>
          <group position={[3.442, 1.11, -0.818]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_467.geometry}
              material={materials.plate2}
              position={[0, 0.028, 0]}
              scale={0.132}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_468.geometry}
              material={materials.floor_wood}
              position={[0, 0.076, -0.085]}
              scale={0.079}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_469.geometry}
              material={materials.wood3}
              position={[0.008, 0.027, 0.035]}
              scale={0.084}
            />
          </group>
          <group
            position={[3.442, 1.11, -2.436]}
            rotation={[-Math.PI, 0, -Math.PI]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_471.geometry}
              material={materials.plate2}
              position={[0, 0.028, 0]}
              scale={0.132}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_472.geometry}
              material={materials.floor_wood}
              position={[0, 0.076, -0.085]}
              scale={0.079}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_473.geometry}
              material={materials.wood3}
              position={[0.008, 0.027, 0.035]}
              scale={0.084}
            />
          </group>
          <group position={[0.57, 0, -4.5]} scale={0.068}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_475.geometry}
              material={materials.wood1}
              position={[0, 20.503, 0]}
              scale={20.503}
            />
          </group>
          <group
            position={[-1.4, 2.17, -4.54]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={0.068}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_477.geometry}
              material={materials.wood1}
              position={[0, 20.625, 0]}
              scale={8.717}
            />
          </group>
          <group
            position={[-5.578, 2.9, -4.47]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.152, 0.068, 0.068]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_479.geometry}
              material={materials.wood1}
              position={[0, 67.664, 0]}
              scale={67.664}
            />
          </group>
          <group
            position={[2.088, 0.07, -4.541]}
            rotation={[Math.PI, 0, Math.PI / 2]}
            scale={0.068}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_481.geometry}
              material={materials.wood1}
              position={[0, -28.68, 0]}
              scale={49.916}
            />
          </group>
          <group
            position={[-2.088, 1.021, -4.54]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={0.068}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_483.geometry}
              material={materials.wood1}
              position={[0, -3.767, 0]}
              scale={49.356}
            />
          </group>
          <group position={[-0.57, 0, -4.5]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_485.geometry}
              material={materials.wood1}
              position={[0, 1.4, 0]}
              scale={1.4}
            />
          </group>
          <group
            position={[-5.647, 0.07, -3.022]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={0.068}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_487.geometry}
              material={materials.wood1}
              position={[0, -42.472, 0]}
              scale={63.707}
            />
          </group>
          <group
            position={[-2.088, 0.07, -4.54]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={0.068}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_489.geometry}
              material={materials.wood1}
              position={[0, -15.944, 0]}
              scale={37.18}
            />
          </group>
          <group
            position={[-4.266, 0.07, 4.297]}
            rotation={[Math.PI, 0, Math.PI / 2]}
            scale={0.068}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_491.geometry}
              material={materials.wood1}
              scale={21.236}
            />
          </group>
          <group
            position={[-2.884, 0.07, 5.815]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={0.068}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_493.geometry}
              material={materials.wood1}
              scale={21.236}
            />
          </group>
          <group
            position={[-1.366, 0.07, 7.197]}
            rotation={[Math.PI, 0, Math.PI / 2]}
            scale={0.068}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_495.geometry}
              material={materials.wood1}
              position={[0, -53.971, 0]}
              scale={75.207}
            />
          </group>
          <group
            position={[3.662, 0.07, 5.678]}
            rotation={[Math.PI / 2, -1.571, 0]}
            scale={0.068}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_497.geometry}
              material={materials.wood1}
              position={[0, -51.434, 0]}
              scale={72.669}
            />
          </group>
          <group
            position={[7.387, 0.07, 5.678]}
            rotation={[Math.PI / 2, -1.571, 0]}
            scale={0.068}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_499.geometry}
              material={materials.wood1}
              position={[-23.485, -63.707, 0]}
              scale={84.943}
            />
          </group>
          <group
            position={[-5.647, 1.021, -3.022]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={0.068}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_501.geometry}
              material={materials.wood1}
              position={[0, -42.472, 0]}
              scale={63.707}
            />
          </group>
          <group
            position={[-4.266, 1.021, 4.297]}
            rotation={[Math.PI, 0, Math.PI / 2]}
            scale={0.068}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_503.geometry}
              material={materials.wood1}
              position={[0, -1.247, 0]}
              scale={19.989}
            />
          </group>
          <group
            position={[-2.884, 1.021, 5.815]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={0.068}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_505.geometry}
              material={materials.wood1}
              scale={21.236}
            />
          </group>
          <group
            position={[-1.366, 1.021, 7.197]}
            rotation={[Math.PI, 0, Math.PI / 2]}
            scale={0.068}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_507.geometry}
              material={materials.wood1}
              position={[0, -53.971, 0]}
              scale={75.207}
            />
          </group>
          <group
            position={[3.662, 1.021, 5.678]}
            rotation={[Math.PI / 2, -1.571, 0]}
            scale={0.068}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_509.geometry}
              material={materials.wood1}
              position={[0, -51.434, 0]}
              scale={72.669}
            />
          </group>
          <group
            position={[2.088, 1.021, -4.541]}
            rotation={[Math.PI, 0, Math.PI / 2]}
            scale={0.068}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_511.geometry}
              material={materials.wood1}
              position={[0, -41.928, 0]}
              scale={36.669}
            />
          </group>
          <group
            position={[-2.088, 2.17, -4.54]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={0.068}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_513.geometry}
              material={materials.wood1}
              position={[0, -15.944, 0]}
              scale={37.18}
            />
          </group>
          <group
            position={[-5.647, 2.17, -3.022]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={0.068}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_515.geometry}
              material={materials.wood1}
              position={[0, -42.472, 0]}
              scale={63.707}
            />
          </group>
          <group
            position={[-4.266, 2.17, 4.297]}
            rotation={[Math.PI, 0, Math.PI / 2]}
            scale={0.068}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_517.geometry}
              material={materials.wood1}
              scale={21.236}
            />
          </group>
          <group
            position={[-2.884, 2.17, 5.815]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={0.068}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_519.geometry}
              material={materials.wood1}
              scale={21.236}
            />
          </group>
          <group
            position={[-1.366, 2.17, 7.197]}
            rotation={[Math.PI, 0, Math.PI / 2]}
            scale={0.068}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_521.geometry}
              material={materials.wood1}
              position={[-8.11, -53.971, 0]}
              scale={75.207}
            />
          </group>
          <group
            position={[3.662, 2.17, 5.678]}
            rotation={[Math.PI / 2, -1.571, 0]}
            scale={0.068}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_523.geometry}
              material={materials.wood1}
              position={[0, -63.946, 0]}
              scale={85.182}
            />
          </group>
          <group
            position={[2.088, 2.17, -4.541]}
            rotation={[Math.PI, 0, Math.PI / 2]}
            scale={0.068}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_525.geometry}
              material={materials.wood1}
              position={[-8.11, -28.68, 0]}
              scale={49.916}
            />
          </group>
          <group
            position={[-5.579, 2.9, -4.402]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={[0.152, 0.068, 0.068]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_527.geometry}
              material={materials.wood1}
              position={[0, 63.707, 0]}
              scale={63.707}
            />
          </group>
          <group
            position={[-5.511, 2.9, 4.228]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.152, 0.068, 0.068]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_529.geometry}
              material={materials.wood1}
              position={[0, 20.236, 0]}
              scale={20.236}
            />
          </group>
          <group
            position={[-2.816, 2.9, 4.297]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={[0.152, 0.068, 0.068]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_531.geometry}
              material={materials.wood1}
              position={[0, 21.236, 0]}
              scale={21.236}
            />
          </group>
          <group
            position={[-2.747, 2.9, 7.128]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.152, 0.068, 0.068]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_533.geometry}
              material={materials.wood1}
              position={[0, 46.935, 0]}
              scale={46.935}
            />
          </group>
          <group
            position={[3.594, 2.9, 7.06]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={[0.152, 0.068, 0.068]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_535.geometry}
              material={materials.wood1}
              position={[0, 83.931, 0]}
              scale={83.931}
            />
          </group>
          <group position={[-5.593, 0, -4.463]} rotation={[0, -Math.PI / 2, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_537.geometry}
              material={materials.wood1}
              position={[4.353, 1.4, 0]}
              scale={4.421}
            />
          </group>
          <group position={[-2.825, 0, 4.235]} rotation={[0, -Math.PI / 2, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_539.geometry}
              material={materials.wood1}
              position={[1.451, 1.4, 0]}
              scale={1.519}
            />
          </group>
          <group position={[-0.688, 0, 7.135]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_541.geometry}
              material={materials.wood1}
              position={[2.145, 1.4, 0]}
              scale={2.214}
            />
          </group>
          <group position={[3.605, 0, -4.482]} rotation={[0, -Math.PI / 2, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_543.geometry}
              material={materials.wood1}
              position={[4.353, 1.4, 0]}
              scale={4.421}
            />
          </group>
          <group
            position={[-5.578, 3.204, -4.47]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.152, 0.068, 0.068]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_545.geometry}
              material={materials.wood1}
              position={[0, 67.664, 0]}
              scale={67.664}
            />
          </group>
          <group
            position={[-5.579, 3.204, -4.402]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={[0.152, 0.068, 0.068]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_547.geometry}
              material={materials.wood1}
              position={[0, 63.707, 0]}
              scale={63.707}
            />
          </group>
          <group
            position={[-5.511, 3.204, 4.228]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.152, 0.068, 0.068]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_549.geometry}
              material={materials.wood1}
              position={[0, 20.236, 0]}
              scale={20.236}
            />
          </group>
          <group
            position={[-2.816, 3.204, 4.297]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={[0.152, 0.068, 0.068]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_551.geometry}
              material={materials.wood1}
              position={[0, 21.236, 0]}
              scale={21.236}
            />
          </group>
          <group
            position={[-2.747, 3.204, 7.128]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.152, 0.068, 0.068]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_553.geometry}
              material={materials.wood1}
              position={[0, 46.935, 0]}
              scale={46.935}
            />
          </group>
          <group
            position={[3.594, 3.204, 7.06]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={[0.152, 0.068, 0.068]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_555.geometry}
              material={materials.wood1}
              position={[0, 83.931, 0]}
              scale={83.931}
            />
          </group>
          <group position={[7.365, 1.668, 7.177]} scale={[1.779, 1.182, 1.779]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_557.geometry}
              material={materials.wood1}
              scale={1.4}
            />
          </group>
          <group position={[3.766, 1.668, 7.177]} scale={[1.779, 1.182, 1.779]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_559.geometry}
              material={materials.wood1}
              scale={1.4}
            />
          </group>
          <group position={[7.36, 1.668, -4.512]} scale={[1.779, 1.182, 1.779]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_561.geometry}
              material={materials.wood1}
              scale={1.4}
            />
          </group>
          <group
            position={[3.766, 1.668, -4.537]}
            scale={[1.779, 1.182, 1.779]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_563.geometry}
              material={materials.wood1}
              scale={1.4}
            />
          </group>
          <group
            position={[-1.352, 0.127, 4.765]}
            rotation={[Math.PI, 0, Math.PI / 2]}
            scale={[0.068, 0.079, 0.068]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_565.geometry}
              material={materials.wood1}
              position={[0, -21.236, 0]}
              scale={40.472}
            />
          </group>
          <group
            position={[-1.352, 0.327, 5.064]}
            rotation={[Math.PI, 0, Math.PI / 2]}
            scale={[0.068, 0.079, 0.068]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_567.geometry}
              material={materials.wood1}
              position={[0, -21.236, 0]}
              scale={40.472}
            />
          </group>
          <group
            position={[-1.352, 0.527, 5.359]}
            rotation={[Math.PI, 0, Math.PI / 2]}
            scale={[0.068, 0.079, 0.068]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_569.geometry}
              material={materials.wood1}
              position={[0, -21.236, 0]}
              scale={40.472}
            />
          </group>
          <group position={[0, 2.495, -4.533]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_571.geometry}
              material={materials.wood3}
              scale={0.51}
            />
          </group>
          <group position={[-1.114, 2.495, -4.533]} scale={[0.966, 1, 1]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_573.geometry}
              material={materials.wood3}
              position={[-2.042, 0, 0]}
              scale={2.552}
            />
          </group>
          <group
            position={[-5.642, 2.495, -3.92]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[0.934, 1, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_575.geometry}
              material={materials.wood3}
              position={[-4.084, 0, 0]}
              scale={4.594}
            />
          </group>
          <group
            position={[-5.088, 2.495, 4.292]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={[0.865, 1, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_577.geometry}
              material={materials.wood3}
              position={[-1.021, 0, 0]}
              scale={1.531}
            />
          </group>
          <group
            position={[-2.88, 2.495, 4.754]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[0.907, 1, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_579.geometry}
              material={materials.wood3}
              position={[-1.021, 0, 0]}
              scale={1.531}
            />
          </group>
          <group
            position={[-2.235, 2.495, 7.191]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={[1.031, 1, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_581.geometry}
              material={materials.wood3}
              position={[-2.552, 0, 0]}
              scale={3.063}
            />
          </group>
          <group
            position={[3.658, 2.495, 6.556]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[1.024, 1, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_583.geometry}
              material={materials.wood3}
              position={[-5.104, 0, 0]}
              scale={5.615}
            />
          </group>
          <group position={[3.064, 2.495, -4.533]} scale={[0.955, 1, 1]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_585.geometry}
              material={materials.wood3}
              position={[-1.021, 0, 0]}
              scale={1.531}
            />
          </group>
          <group position={[-1.612, 0.536, -4.562]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_587.geometry}
              material={materials.wood4}
              position={[0.605, 0, 5.909]}
              scale={5.909}
            />
          </group>
          <group position={[-1.612, 1.604, -4.562]} scale={[1, 1.215, 1]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_589.geometry}
              material={materials.Paint}
              position={[0.605, 0, 5.909]}
              scale={5.909}
            />
          </group>
          <group position={[-1.612, 0.536, -4.562]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_591.geometry}
              material={materials.floor_tile1}
              position={[7.133, 0, 5.905]}
              scale={5.912}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_592.geometry}
              material={materials.Paint}
              position={[7.133, 1.642, 5.9]}
              scale={5.907}
            />
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("./resto_ni_teo.glb");

export default Restaurant;
