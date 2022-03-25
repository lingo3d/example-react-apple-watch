import "./App.css"
import { Model, OrbitCamera, useAnimation, usePreload, World } from "lingo3d-react"

const Game = () => {
  const anim = useAnimation({ from: 180, to: 0, duration: 5000 })

  return (
    <div
     className="bg-cover bg-center w-screen h-screen absolute overflow-hidden text-white"
     style={{ backgroundImage: "url(bg.jpg)" }}
    >
      <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-t from-gray-700 to-black opacity-75" />
      <div className="relative">
        <div className="text-5xl font-bold text-center" style={{ transform: "scale(2.5) translateY(50%)" }}>
          Apple<br />Watch<br />Series
        </div>
      </div>

      <World color="transparent" defaultLight="studio">
        <Model src="apple_watch/scene.gltf" y={-50} rotationZ={anim} boxVisible={false} />
        <OrbitCamera active z={200} y={80} zoom={1.5} autoRotate enableDamping />
      </World>

      <div className="absolute bottom-0 w-full p-6">
        <div className="text-center text-lg opacity-50">swipe to rotate</div>
        <div className="text-center text-xs">powered by Lingo3D</div>
      </div>
    </div>
  )
}

const App = () => {
  const progress = usePreload([
    "bg.jpg",
    "apple_watch/scene.bin",
    "apple_watch/scene.gltf",
    "apple_watch/textures/material_baseColor.jpeg"
  ], "573kb")

  if (progress < 100)
    return (
      <div className="w-screen h-screen absolute text-white flex justify-center items-center">
        loading, please wait
      </div>
    )

  return (
    <Game />
  )
}

export default App