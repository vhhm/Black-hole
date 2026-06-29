"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import BlackHole from "@/three/BlackHole";

export default function Experience() {
  return (
    <div className="w-full h-screen relative">

      {/* UI overlay */}
      <div className="absolute z-10 top-10 left-10">
        <h1 className="text-4xl font-bold tracking-widest">
          EVENT HORIZON
        </h1>
        <p className="text-gray-400">
          Você está sendo puxado para dentro do desconhecido
        </p>
      </div>

      {/* 3D SCENE */}
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
        <BlackHole />
        <OrbitControls enableZoom={false} />
      </Canvas>

    </div>
  );
}