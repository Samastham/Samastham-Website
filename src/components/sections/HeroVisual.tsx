import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Sphere, MeshDistortMaterial, Line, Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function NodeSphere() {
    const pointsRef = useRef<THREE.Points>(null!)
    const linesRef = useRef<THREE.Group>(null!)

    // Create random points for nodes
    const nodes = useMemo(() => {
        const temp = []
        for (let i = 0; i < 40; i++) {
            const theta = Math.random() * Math.PI * 2
            const phi = Math.acos(2 * Math.random() - 1)
            const x = 3 * Math.sin(phi) * Math.cos(theta)
            const y = 3 * Math.sin(phi) * Math.sin(theta)
            const z = 3 * Math.cos(phi)
            temp.push(new THREE.Vector3(x, y, z))
        }
        return temp
    }, [])

    useFrame((state) => {
        const time = state.clock.getElapsedTime()
        pointsRef.current.rotation.y = time * 0.1
        pointsRef.current.rotation.x = time * 0.05
        linesRef.current.rotation.y = time * 0.1
        linesRef.current.rotation.x = time * 0.05
    })

    return (
        <group>
            <Points ref={pointsRef}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={nodes.length}
                        array={new Float32Array(nodes.flatMap(v => [v.x, v.y, v.z]))}
                        itemSize={3}
                    />
                </bufferGeometry>
                <PointMaterial
                    transparent
                    color="#3b82f6"
                    size={0.15}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                />
            </Points>

            <group ref={linesRef}>
                {nodes.map((node, i) => {
                    // Connect to 2 near neighbors
                    const neighbors = nodes
                        .map((v, j) => ({ index: j, dist: v.distanceTo(node) }))
                        .filter(n => n.index !== i)
                        .sort((a, b) => a.dist - b.dist)
                        .slice(0, 2)

                    return neighbors.map(n => (
                        <Line
                            key={`${i}-${n.index}`}
                            points={[node, nodes[n.index]]}
                            color="#818cf8"
                            lineWidth={0.5}
                            transparent
                            opacity={0.3}
                        />
                    ))
                })}
            </group>

            <Sphere args={[2.8, 64, 64]}>
                <MeshDistortMaterial
                    color="#1e1b4b"
                    roughness={0.1}
                    metalness={1}
                    distort={0.4}
                    speed={2}
                    transparent
                    opacity={0.15}
                />
            </Sphere>
        </group>
    )
}

export function HeroVisual() {
    return (
        <div className="w-full h-full min-h-[500px]">
            <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#3b82f6" />
                <pointLight position={[-10, -10, -10]} intensity={1} color="#a855f7" />
                <NodeSphere />
            </Canvas>
        </div>
    )
}
