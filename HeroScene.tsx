import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, Environment, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

// Manually declare intrinsic elements to fix TypeScript errors when types aren't automatically picked up
declare global {
  namespace JSX {
    interface IntrinsicElements {
      mesh: any;
      torusKnotGeometry: any;
      meshStandardMaterial: any;
      ambientLight: any;
      spotLight: any;
      pointLight: any;
      fog: any;
    }
  }
}

const AbstractShape = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} scale={1.2}>
        {/* TorusKnot represents the complex flavors */}
        <torusKnotGeometry args={[1, 0.35, 128, 32]} />
        <meshStandardMaterial 
          color="#DC2626" 
          roughness={0.2} 
          metalness={0.8}
          emissive="#7f1d1d"
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  );
};

export const HeroScene: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full bg-zinc-950">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 6]} />
        
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={50} color="#fbbf24" />
        <pointLight position={[-10, -10, -10]} intensity={10} color="#ef4444" />

        {/* 3D Objects */}
        <AbstractShape />
        
        {/* Atmosphere - "Spices" in the air */}
        <Sparkles 
          count={150} 
          scale={10} 
          size={4} 
          speed={0.4} 
          opacity={0.8} 
          color="#fbbf24" // Gold
        />
        <Sparkles 
          count={100} 
          scale={8} 
          size={6} 
          speed={0.2} 
          opacity={0.6} 
          color="#ef4444" // Red
        />

        {/* Environment Reflections */}
        <Environment preset="city" />
        
        {/* Fog to blend with the background */}
        <fog attach="fog" args={['#09090b', 3, 12]} />
      </Canvas>
      
      {/* Overlay Gradient to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 pointer-events-none"></div>
    </div>
  );
};