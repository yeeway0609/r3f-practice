import { useMemo, useRef } from "react";
import { OrbitControls } from "@react-three/drei";

export default function Experience() {
  const boxCount = 10;
  const radius = 3;

  const groupRef = useRef();

  const cards = useMemo(() => {
    const cards = new Array(boxCount).fill(null).map(() => ({ angle: "", position: "" }));

    for (let i = 0; i < boxCount; i++) {
      const angle = ((Math.PI * 2) / boxCount) * i;
      cards[i].angle = angle;
      cards[i].position = [Math.cos(angle) * radius, 1, Math.sin(angle) * radius];
    }

    return cards;
  }, []);

  return (
    <>
      {/* <orbitControls args={[camera, gl.domElement]} /> */}

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableDamping={true}
        dampingFactor={0.05}
        rotateSpeed={0.5}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />

      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={3} />

      <group ref={groupRef}>
        {cards.map((box, index) => (
          <mesh key={index} position={box.position} rotation-y={-box.angle + Math.PI / 2}>
            <boxGeometry args={[1.5, 2.5, 0.1]} />
            <meshStandardMaterial color="mediumpurple" />
          </mesh>
        ))}
      </group>

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={100}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
    </>
  );
}
