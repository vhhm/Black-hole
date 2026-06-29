"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

import vertex from "./shaders/blackholeVertex.glsl";
import fragment from "./shaders/blackholeFragment.glsl";

export default function BlackHole() {
  const matRef = useRef<any>();

  useFrame(({ clock }) => {
    if (matRef.current) {
      matRef.current.uniforms.time.value =
        clock.getElapsedTime();
    }
  });

  return (
    <mesh>
      <sphereGeometry args={[2.2, 128, 128]} />

      <shaderMaterial
        ref={matRef}
        vertexShader={vertex}
        fragmentShader={fragment}
        uniforms={{
          time: { value: 0 },
        }}
        transparent
      />
    </mesh>
  );
}