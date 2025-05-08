'use client'

import { useGLTF, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

export function OfficeScene() {
  const { scene } = useGLTF('/model/office.glb')

  return (
    <div className="h-screen">
      <Canvas 
        shadows 
        camera={{ 
          position: [0, 1, 2], // Changed to top view
          fov: 45,
          rotation: [0, 0, 0] // Rotate camera to look down
        }}
      >
        <ambientLight intensity={0.8} /> {/* Increased light intensity for better top view */}
        <directionalLight position={[10, 10, 5]} castShadow />
        <primitive 
          object={scene} 
          scale={1.5} 
          position={[0, 0, 0]} 
        />
        <OrbitControls 
          enableRotate={false} // Disable rotation
          enableZoom={false}   // Disable zoom
          enablePan={false}    // Disable panning
        />
      </Canvas>
    </div>
  )
}
