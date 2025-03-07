import ReactDOM from "react-dom/client"
import { Canvas } from "@react-three/fiber"
import * as THREE from "three"
import "./style.css"
import App from "./component/55-App"
import Drei from "./component/56-Drei"
import MouseEvent from "./component/62-MouseEvent"
import Theatre from "./component/Theatre"

import Debug from "./component/57-Debug"
import { StrictMode } from "react"
import { Leva } from "leva"

const root = ReactDOM.createRoot(document.querySelector("#root"))

root.render(
  <StrictMode>
    <Leva collapsed />

    <Canvas
      // orthographic
      camera={{
        position: [3, 2, 6],
        // fov: 95,
        // near: 0.1,
        // far: 200,
      }}
      dpr={[1, 2, 3]}
      gl={
        {
          // antialias: false,
          // toneMapping: THREE.CineonToneMapping,
          // outputColorSpace: THREE.SRGBColorSpace,
        }
      }
    >
      {/* <App /> */}

      {/* <Drei /> */}

      {/* <MouseEvent /> */}

      {/* <Debug /> */}

      <Theatre />
    </Canvas>
  </StrictMode>
)
