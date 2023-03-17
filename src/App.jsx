import * as THREE from 'three'
import { Suspense, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber'
import { Experience } from './components/Experience'
import { CameraShake, Environment, Lightformer, usePerformanceMonitor, Reflector } from '@react-three/drei'
import { useControls } from 'leva'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader'



function Triangle({ color, ...props }) {

  const ref = useRef()
  const [r] = useState(() => Math.random() * 10000)
  useFrame((_) => (ref.current.position.y = -1.75 + Math.sin(_.clock.elapsedTime + r) / 10))
  const { paths: [path] } = useLoader(SVGLoader, '/triangle.svg') // prettier-ignore
  const geom = useMemo(() => SVGLoader.pointsToStroke(path.subPaths[0].getPoints(), path.userData.style), [])
  return (
    <group ref={ref}>
      <mesh geometry={geom} {...props}>
        <meshBasicMaterial color={color} toneMapped={false} />
      </mesh>
    </group>
  )
}

// function Rig({ children }) {
//   const ref = useRef()
//   const vec = new THREE.Vector3()
//   const { camera, mouse } = useThree()
//   useFrame(() => {
//     camera.position.lerp(vec.set(mouse.x * 2, 0, 3.5), 0.05)
//     ref.current.position.lerp(vec.set(mouse.x * 1, mouse.y * 0.1, 0), 0.1)
//     ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, (-mouse.x * Math.PI) / 20, 0.1)
//   })
//   return <group ref={ref}>{children}</group>
// }

function App() {
  const { name, aNumber } = useControls({ name: 'World', aNumber: 0 })
  const [count, setCount] = useState(0)


  return (
    <div className="App">
      {/* const [showContent, setShowContent] = useState(false);
      const testing = true; */}
      <div className='w-full h-screen bg-gradient-to-t from-orange-500 to-rose-500 '>
        <Canvas gl={{ logarithmicDepthBuffer: true, antialias: false }} shadows camera={{ 
          fov: 64,
          position: [2.3, 1.5, 2.3],
        }}>
          <fog attach="fog" args={['lightpink', 60, 100]} />
          <CameraShake yawFrequency={0.2} pitchFrequency={0.2} rollFrequency={0.2} />

          <ambientLight intensity={1.2} />
          <Experience />
          <spotLight castShadow intensity={10} angle={0.1} position={[-200, 220, -100]} shadow-mapSize={[2048, 2048]} shadow-bias={-0.000001} />

          {/* <Rig>
            <Triangle color="#ff2060" scale={0.009} rotation={[0, 0, Math.PI / 3]} />
            <Triangle color="cyan" scale={0.009} position={[2, 0, -2]} rotation={[0, 0, Math.PI / 3]} />
            <Triangle color="orange" scale={0.009} position={[-2, 0, -2]} rotation={[0, 0, Math.PI / 3]} />
            <Triangle color="white" scale={0.009} position={[0, 2, -10]} rotation={[0, 0, Math.PI / 3]} />
          </Rig> */}
          <mesh>
            {/* 2. Adicione as referências aos componentes Triangle. */}
            <Triangle color="#ff2060" scale={0.01} rotation={[0, 0, Math.PI / 3]} />
            <Triangle color="cyan" scale={0.08} position={[-4, -5, -2]} rotation={[0, 0, Math.PI / 3.5]} />
            <Triangle color="orange" scale={0.009} position={[-2, 0, -2]} rotation={[0, 0, Math.PI / 3]} />
            <Triangle color="white" scale={0.009} position={[1.6, 2.5, 1.8]} rotation={[0.2, 2, Math.PI / 3]} />
          </mesh>
          <EffectComposer multisampling={6}>
            <Bloom kernelSize={3} luminanceThreshold={0} luminanceSmoothing={0.2} intensity={0.3} />
          </EffectComposer>
          
          <Environment resolution={512}>
            {/* Ceiling */}
            <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -9]} scale={[10, 1, 1]} />
            <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -6]} scale={[10, 1, 1]} />
            <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -3]} scale={[10, 1, 1]} />
            <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 0]} scale={[10, 1, 1]} />
            <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 3]} scale={[10, 1, 1]} />
            <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 6]} scale={[10, 1, 1]} />
            <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 9]} scale={[10, 1, 1]} />
            {/* Sides */}
            <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-50, 2, 0]} scale={[100, 2, 1]} />
            <Lightformer intensity={2} rotation-y={-Math.PI / 2} position={[50, 2, 0]} scale={[100, 2, 1]} />
            {/* Key */}
            <Lightformer form="ring" color="red" intensity={10} scale={2} position={[10, 5, 10]} onUpdate={(self) => self.lookAt(0, 0, 0)} />
          </Environment>

          
        </Canvas>
      </div>
    </div>
  )
}

export default App
