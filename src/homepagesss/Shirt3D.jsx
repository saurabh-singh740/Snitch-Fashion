import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";

function ShirtModel() {
  const { scene } = useGLTF("/shirt3d.glb");
  return <primitive object={scene} scale={1.8} />;
}

export default function Shirt3D() {
  return (
    <div className="w-full h-[500px]">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} />
        <OrbitControls autoRotate autoRotateSpeed={7} />
        <Suspense fallback={null}>
          <ShirtModel />
        </Suspense>
      </Canvas>
    </div>
  );
}
