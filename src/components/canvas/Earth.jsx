import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import CanvasLoader from "../Loader";

const Earth = () => {

  const zemlya = useGLTF('./planet/scene.gltf')

  return (
    <primitive object={zemlya.scene} scale={2.5} />
  );
};

const EarthCanvas = () => (
  <Canvas
    shadows
    frameloop="demand"
    gl={{ preserveDrawingBuffer: true }}
    camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
  >
    <Suspense fallback={<CanvasLoader />}>
      <OrbitControls enableZoom={false} autoRotate maxPolarAngle={ Math.PI / 2 } minPolarAngle={ Math.PI / 2 } />
      <Earth />
    </Suspense>
  </Canvas>
);

export default EarthCanvas;
