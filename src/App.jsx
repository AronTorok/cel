import { useRef, useEffect, Suspense } from "react";
import gsap from "gsap";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Head from "./Head.jsx";
import Coffee from "./Coffee.jsx";
import Restaurant from "./Restaurant.jsx";
import Gangster from "./Gangster.jsx";

function AnimatedIcon({ imgSrc }) {
  const iconRef = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(iconRef.current, {
        opacity: 0,
        duration: 1,
        repeat: -1,
        yoyo: true,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div ref={iconRef} className="flex">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 14 14"
        className="mt-0.5 mr-1"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M3.002 5.459c0-1.993 1.828-3.861 3.862-3.861a.75.75 0 0 0 0-1.5c-2.873 0-5.362 2.55-5.362 5.361a.75.75 0 1 0 1.5 0m4.313-2.34q.291-.033.587-.053V6.87a.376.376 0 0 1-.377.376c-.877-.002-2.113-.003-2.758.003a.6.6 0 0 0-.18.028q.031-.673.08-1.33c.107-1.436 1.217-2.668 2.648-2.828M4.558 8.474V8.46a.6.6 0 0 0 .22.038c.637-.006 1.866-.005 2.745-.003c.9.002 1.629-.726 1.629-1.626V3.066q.296.02.589.053c1.43.16 2.54 1.392 2.647 2.828c.061.824.11 1.668.11 2.527c0 .858-.049 1.702-.11 2.527c-.107 1.435-1.217 2.667-2.647 2.827c-.4.045-.804.074-1.213.074s-.814-.03-1.213-.074c-1.43-.16-2.54-1.392-2.647-2.827a34 34 0 0 1-.11-2.527"
          clipRule="evenodd"
        />
      </svg>
      /
      <img src={imgSrc} alt="click" className="w-6 mb-3" />
    </div>
  );
}

function RotatingScene() {
  const groupRef = useRef();
  useFrame((state, delta) => {
    groupRef.current.rotation.y += delta * 0.2;
  });
  return (
    <group ref={groupRef}>
      <Restaurant />
      <Coffee position={[0, 1.1, 0]} />
    </group>
  );
}

export default function App() {
  return (
    <>
      <div className="bg-[#E2DEDA] min-h-screen p-2 flex flex-col gap-1 text-black">
        <div className="flex flex-col items-center px-2 text-center gap-y-2">
          <h1 className="font-bold text-4xl">CEL SHADING</h1>
          <p className="max-w-xl">
            Cel shading animation is a highly stylised visual artform that uses
            computers to give 3D characters a hand-drawn, 2D appearance. The
            distinctive style is commonly associated with video games and
            Japanese anime films.
          </p>
          <p>Let's take a look at a simple example first, like this head.</p>
          <p className="font-bold max-w-lg">
            Press and hold left-click/finger anywhere inside the frame to move
            object
          </p>
          <AnimatedIcon imgSrc="click.svg" />
        </div>
        <div className="flex justify-center">
          <div className="h-[60vh] max-w-lg w-full bg-[#DBABE2] rounded-2xl border-4 cursor-grab">
            <Canvas>
              <OrbitControls enableZoom={false} />
              <Suspense fallback={null}>
                <Head scale={5} position={[0, -4.1, 0]} />
              </Suspense>
            </Canvas>
          </div>
        </div>
      </div>
      <div className="relative h-screen cursor-grab border-y-4 border-black">
        <div className="absolute top-0 left-0 right-0 z-10 flex justify-center">
          <div className="max-w-lg w-full backdrop-blur-md flex flex-col items-center bg-[#D2C4B8]/20 rounded-2xl border-4 border-black cursor-auto p-2 m-2 text-center">
            <p>
              Next up, look at how much how the coffee machine and sugar stand
              out in a standard 3D enviroment.
            </p>
            <p className="font-bold p-3 text-center">
              Press and hold left-click/finger anywhere inside the frame to move
              object
            </p>
            <AnimatedIcon imgSrc="click-white.svg" />
          </div>
        </div>
        <Canvas camera={{ position: [0, 1.5, 1.5] }}>
          <ambientLight intensity={1.5} />
          <OrbitControls enableZoom={false} target={[0, 1.95, 0]} />
          <Suspense fallback={null}>
            <RotatingScene />
          </Suspense>
        </Canvas>
      </div>
      <div className="h-screen bg-black cursor-grab relative">
        <div className="absolute top-0 left-0 right-0 z-10 flex justify-center">
          <div className="max-w-lg w-full backdrop-blur-md flex flex-col items-center bg-black/20 rounded-2xl border-4 border-black cursor-auto p-2 m-2 text-center">
            <p>
              To finish up, notice how the cel shading effect can be utilized in
              entire 3D enviroments.
            </p>
            <p className="font-bold p-3 text-center">
              Press and hold left-click/finger anywhere inside the frame to move
              object
            </p>
            <AnimatedIcon imgSrc="click-white.svg" />
          </div>
        </div>
        <Canvas camera={{ position: [0, 1.1, 1.5] }}>
          <OrbitControls enableZoom={false} target={[0, 1.1, 0]} />
          <Suspense fallback={null}>
            <Gangster />
          </Suspense>
        </Canvas>
      </div>
      <div className="h-screen bg-black flex justify-center items-center">
        <div className="max-w-lg text-center flex flex-col gap-2 p-4">
          <p>
            The distinctive style is commonly associated with video games and
            Japanese anime films. Some of the most celebrated and beloved video
            games around have used the style, but despite being widely popular,
            cel shading has only been around for a little over 30 years.
          </p>
          <p>
            This website contains information from an{" "}
            <a
              href="https://www.adobe.com/uk/creativecloud/animation/discover/cel-shading.html"
              className="link"
            >
              Adobe article
            </a>
            . It also uses 3d models downloaded off of the{" "}
            <a href="https://sketchfab.com/feed" className="link">
              Sketchfab website
            </a>
            . If you would like to see some of my other works, go to my{" "}
            <a href="https://arontorok.github.io/" className="link">
              portfolio website
            </a>{" "}
            (https://arontorok.github.io/).
          </p>
        </div>
      </div>
    </>
  );
}
