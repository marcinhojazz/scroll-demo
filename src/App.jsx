import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Canvas } from '@react-three/fiber'
import { Experience } from './components/Experience'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* const [showContent, setShowContent] = useState(false);
      const testing = true; */}
      <div className='w-full border h-screen bg-slate-200'>
        <Canvas camera={{ 
          fov: 64,
          position: [2.3, 1.5, 2.3],
        }}>
          <ambientLight intensity={1} />
          <Experience />
        </Canvas>
      </div>
    </div>
  )
}

export default App
