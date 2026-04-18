"use client";
import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Sphere,
  MeshDistortMaterial,
  Environment,
  Float,
} from "@react-three/drei";
import * as THREE from "three";

function GoldOrb() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
  });

  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={0.8}>
      <Sphere ref={meshRef} args={[1.4, 64, 64]}>
        <MeshDistortMaterial
          color="#c9a84c"
          attach="material"
          distort={0.35}
          speed={2}
          roughness={0.1}
          metalness={0.9}
        />
      </Sphere>

      {/* Inner glow sphere */}
      <Sphere args={[1.5, 32, 32]}>
        <meshBasicMaterial
          color="#8b1a1a"
          transparent
          opacity={0.06}
          side={THREE.BackSide}
        />
      </Sphere>
    </Float>
  );
}

function CrimsonRing() {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ringRef.current) return;
    ringRef.current.rotation.x = Math.PI / 3;
    ringRef.current.rotation.z = state.clock.elapsedTime * 0.2;
  });

  return (
    <mesh ref={ringRef}>
      <torusGeometry args={[2.2, 0.015, 16, 100]} />
      <meshBasicMaterial color="#8b1a1a" transparent opacity={0.5} />
    </mesh>
  );
}

function GoldRing() {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ringRef.current) return;
    ringRef.current.rotation.x = -Math.PI / 4;
    ringRef.current.rotation.z = -state.clock.elapsedTime * 0.1;
  });

  return (
    <mesh ref={ringRef}>
      <torusGeometry args={[2.6, 0.01, 16, 100]} />
      <meshBasicMaterial color="#c9a84c" transparent opacity={0.3} />
    </mesh>
  );
}

export default function FloatingOrb() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 1.5]}
      style={{ background: "transparent" }}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1.5}
          color="#c9a84c"
        />
        <directionalLight
          position={[-5, -3, -5]}
          intensity={0.5}
          color="#8b1a1a"
        />
        <pointLight position={[0, 0, 3]} intensity={0.8} color="#e8c97a" />

        <GoldOrb />
        <CrimsonRing />
        <GoldRing />

        <Environment preset="night" resolution={128} />
      </Suspense>
    </Canvas>
  );
}
