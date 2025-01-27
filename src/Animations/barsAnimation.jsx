import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Object3D } from "three";
import { gsap } from "gsap";

const GlowingBars = () => {
  const barsRef = useRef();
  const numBars = 50;
  const dummy = new Object3D();
  const positions = Array.from({ length: numBars }, () => [
    Math.random() * 10 - 5, 
    Math.random() * 10 - 5, 
    Math.random() * 10 - 5, 
  ]);

  useFrame(() => {
    positions.forEach((pos, i) => {
      pos[1] -= 0.5; 
      if (pos[1] < -5) pos[1] = 5;
      dummy.position.set(...pos);
      dummy.scale.set(0.1, Math.random() * 2 + 0.5, 0.1);
      dummy.updateMatrix();
      barsRef.current.setMatrixAt(i, dummy.matrix);
    });
    barsRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={barsRef} args={[null, null, numBars]}>
      <boxGeometry args={[0.1, 1, 0.1]} />
      <meshStandardMaterial
        color="#ffffff"
        emissive="#ffffff"
        emissiveIntensity={1.5}
        roughness={0.3}
        metalness={0.5}
      />
    </instancedMesh>
  );
};

const GlowingBarsAnimation = () => {
  const h1Ref = useRef(); 
  useEffect(() => {
    gsap.fromTo(
      h1Ref.current,
      { opacity: 0, y: -50 }, 
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: h1Ref.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <div className="w-full h-[100vh] relative">
      <h1
        ref={h1Ref}
        className="absolute z-10 top-[70%] left-[80%] transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl sm:text-5xl font-bold text-center">
        "A smart choice that blends luxury and innovation."
      </h1>
      <Canvas className="h-[100vh] bg-gradient-to-b from-transparent to-black">
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <GlowingBars />
      </Canvas>
    </div>
  );
};

export default GlowingBarsAnimation;
