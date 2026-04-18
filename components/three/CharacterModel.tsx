"use client";

import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Box,
  Environment,
  Float,
  MeshDistortMaterial,
  Octahedron,
  OrbitControls,
  Sphere,
} from "@react-three/drei";
import * as THREE from "three";

const SHAPE_MAP: Record<string, string> = {
  "mr-0": "octahedron",
  "mr-1": "box",
  "miss-doublefinger": "spike",
  "mr-2": "sphere",
  "mr-3": "torus",
  "miss-valentines-day": "sphere",
  "mr-4": "box",
  "miss-merry-christmas": "octahedron",
  "mr-5": "octahedron",
  luffy: "sphere",
  zoro: "box",
  nami: "sphere",
  usopp: "torus",
  sanji: "octahedron",
  chopper: "sphere",
  robin: "octahedron",
  franky: "box",
  brook: "torus",
};

interface CharacterShapeProps {
  characterId: string;
  color: string;
}

interface CharacterModelProps {
  characterId: string;
  color: string;
}

function createParticleGeometry(count: number) {
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);

  for (let index = 0; index < count; index += 1) {
    const radius = 2.5 + Math.random() * 1.5;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);

    positions[index * 3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[index * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[index * 3 + 2] = radius * Math.cos(phi);
  }

  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  return geometry;
}

function CharacterShape({ characterId, color }: CharacterShapeProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const shape = SHAPE_MAP[characterId] ?? "sphere";

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
  });

  const material = (
    <MeshDistortMaterial
      color={color}
      attach="material"
      distort={0.2}
      speed={1.5}
      roughness={0.15}
      metalness={0.85}
    />
  );

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      {shape === "sphere" ? (
        <Sphere ref={meshRef} args={[1.2, 40, 40]}>
          {material}
        </Sphere>
      ) : null}
      {shape === "box" ? (
        <Box ref={meshRef} args={[1.8, 1.8, 1.8]}>
          {material}
        </Box>
      ) : null}
      {shape === "octahedron" ? (
        <Octahedron ref={meshRef} args={[1.3]}>
          {material}
        </Octahedron>
      ) : null}
      {shape === "torus" ? (
        <mesh ref={meshRef}>
          <torusGeometry args={[1, 0.4, 24, 48]} />
          {material}
        </mesh>
      ) : null}
      {shape === "spike" ? (
        <mesh ref={meshRef}>
          <coneGeometry args={[0.8, 2.5, 8]} />
          {material}
        </mesh>
      ) : null}
    </Float>
  );
}

function OrbitRing({ color }: { color: string }) {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ringRef.current) return;
    ringRef.current.rotation.x = Math.PI / 2.5;
    ringRef.current.rotation.z = state.clock.elapsedTime * 0.15;
  });

  return (
    <mesh ref={ringRef}>
      <torusGeometry args={[2.0, 0.012, 16, 100]} />
      <meshBasicMaterial color={color} transparent opacity={0.4} />
    </mesh>
  );
}

function Particles({ color }: { color: string }) {
  const points = useRef<THREE.Points>(null);
  const geometry = useMemo(() => createParticleGeometry(56), []);

  useFrame((state) => {
    if (!points.current) return;
    points.current.rotation.y = state.clock.elapsedTime * 0.05;
  });

  return (
    <points ref={points} geometry={geometry}>
      <pointsMaterial
        color={color}
        size={0.04}
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

export default function CharacterModel({
  characterId,
  color,
}: CharacterModelProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.5], fov: 45 }}
      dpr={[1, 1.5]}
      style={{ background: "transparent" }}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={2} color={color} />
        <directionalLight
          position={[-5, -3, -3]}
          intensity={0.8}
          color="#c9a84c"
        />
        <pointLight position={[0, 2, 3]} intensity={1} color={color} />

        <CharacterShape characterId={characterId} color={color} />
        <OrbitRing color={color} />
        <Particles color={color} />

        <OrbitControls
          enablePan={false}
          enableZoom
          minDistance={3}
          maxDistance={8}
          autoRotate={false}
          makeDefault
        />

        <Environment preset="night" resolution={128} />
      </Suspense>
    </Canvas>
  );
}
