// My3DModel.js
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

function Model() {
  const { scene } = useGLTF("../public/earth.glb");
  return <primitive object={scene} scale={1.2} />;
}

function AnimatedModel() {
  const [rotation, setRotation] = useState([0, 0, 0]);
  const [scale, setScale] = useState(3);
  const [position, setPosition] = useState([0, -5, 0]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const pageIndex = Math.floor(scrollY / viewportHeight);

      // Calculate the scroll percentage within the page
      const scrollInPage = scrollY % viewportHeight;
      const scrollPercentage = scrollInPage / viewportHeight;

      // Define dynamic range for values
      const dynamicPositionY = -3 + scrollPercentage * 1.9; // Starts from -3 and moves to -1
      // const dynamicPositionYSecondPage = -2 + scrollPercentage * 1.5; // Starts from -2 and moves to -0.5

      if (pageIndex === 0) {
        setRotation([0, scrollY / 200, 0]);
        setScale(scale - (scrollInPage * 2) / 1000); // The scale changes gradually
        setPosition([scrollInPage / 300, dynamicPositionY + 0.7, 0]); // The position gradually changes to the right
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set initial rotation

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <group rotation={rotation} scale={scale} position={position}>
      <Model />
    </group>
  );
}

export default function My3DModel() {
  return (
    <Canvas>
      {/* Adding lighting */}
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 10]} intensity={1} />

      {/* Load the model using Suspense to ensure the element is displayed after loading */}
      <Suspense fallback={"Loading..."}>
        <AnimatedModel />
      </Suspense>
    </Canvas>
  );
}
