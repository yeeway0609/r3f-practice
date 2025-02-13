import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import "./style.css";
import App from "./component/App";
import Drei from "./component/Drei";
import Test from "./component/Test";
import MouseEvent from "./component/MouseEvent";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <Canvas
    // orthographic
    camera={{
      // zoom: 50,
      position: [3, 2, 6],
      // fov: 95,
      // near: 0.1,
      // far: 200,
    }}
    dpr={[1, 2, 3]}
    gl={{
      // antialias: false,
      toneMapping: THREE.CineonToneMapping,
      outputColorSpace: THREE.SRGBColorSpace,
    }}
  >
    {/* 55. First R3F Application */}
    {/* <App /> */}

    {/* 56. Drei */}
    {/* <Drei /> */}

    {/* 62. Mouse Event */}
    <MouseEvent />
  </Canvas>
);
