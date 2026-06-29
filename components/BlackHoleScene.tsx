"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import BlackHole from "@/three/BlackHole";
import Particles from "@/three/Particles";

export default function BlackHoleScene() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
      <ambientLight intensity={0.2} />

      <BlackHole />
      <Particles />

      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}