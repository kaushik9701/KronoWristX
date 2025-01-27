import React, { useRef, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GltfModel = ({ url, mousePosition, scrollPosition, isMobile }) => {
  const modelRef = useRef();
  const { scene } = useGLTF(url);

  useEffect(() => {
    if (!modelRef.current) return;

    if (!isMobile) {
      const mouseRotationX = mousePosition.y * 0.09;
      const mouseRotationY = Math.PI / 2 + mousePosition.x * 0.12;

      gsap.to(modelRef.current.rotation, {
        x: (() => {
          switch (true) {
            case scrollPosition < 0.100:
              return -mouseRotationX;
            case scrollPosition > 0.101 && scrollPosition < 0.456:
              return mouseRotationX;
            case scrollPosition > 0.457 && scrollPosition < 0.8:
              return -mouseRotationX;
            case scrollPosition > 0.81:
              return -mouseRotationX + 0.4;
            default:
              return -mouseRotationX;
          }
        })(),

        y: (() => {
          switch (true) {
            case scrollPosition < 0.100:
              return -Math.PI / 6 * mouseRotationY;
            case scrollPosition > 0.101 && scrollPosition < 0.456:
              return Math.PI / 6 * mouseRotationY;
            case scrollPosition > 0.457 && scrollPosition < 0.8:
              return 0.8 + mouseRotationY;
            case scrollPosition > 0.8:
              return -1.2 + mouseRotationY;
            default:
              return 1.3 * mouseRotationY + scrollPosition * -Math.PI / 8;
          }
        })(),

        duration: 1.5,
        ease: 'power2.out',
      });

      gsap.to(modelRef.current.position, {
        x: (() => {
          let xValue;
          switch (true) {
            case scrollPosition < 0.090:
              xValue = 0.30;
              break;
            case scrollPosition > 0.091 && scrollPosition < 0.456:
              xValue = -0.30;
              break;
            case scrollPosition > 0.457 && scrollPosition < 0.545:
              xValue = -0.40;
              break;
            case scrollPosition > 0.546 && scrollPosition < 0.850:
              xValue = -0.90;
              break;
            case scrollPosition > 0.851 && scrollPosition < 0.910:
              xValue = -0.30;
              break;
            default:
              xValue = -0.30;
          }

          return xValue;
        })(),

        y: (() => {
          let yValue;
          switch (true) {
            case scrollPosition < 0.210:
              yValue = 0;
              break;
            case scrollPosition > 0.211 && scrollPosition < 0.456:
              yValue = 1;
              break;
            case scrollPosition > 0.457 && scrollPosition < 0.685:
              yValue = 0;
              break;
            case scrollPosition > 0.910:
              let t = (scrollPosition - 0.910) / (1 - 0.910);
              yValue = 0.01 + t * (1 - 0.51);
              break;
            default:
              yValue = 0;
          }
          return yValue;
        })(),

        duration: 0.5,
        ease: 'power2.out',
      });

      let targetScale = scrollPosition <= 0.3 ? 3.9 + (8.4 - 3.9) * (scrollPosition / 0.3) : 5;
      gsap.to(modelRef.current.scale, {
        x: targetScale,
        y: targetScale,
        z: targetScale,
        duration: 0.5,
        ease: 'power2.out',
      });
    }

    
    if (isMobile) {
      gsap.to(modelRef.current.rotation, {
        y: "+=6.28", 
        repeat: -1, 
        duration: 10, 
        ease: 'linear',
      });
    }
  }, [mousePosition, scrollPosition, isMobile]);

  return <primitive ref={modelRef} object={scene} />;
};

const ThreeDScene = ({ scrollPosition, mousePosition }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        pointerEvents: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Canvas
        id="canvas-container"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 2,
          pointerEvents: 'none',
        }}
        camera={{
          position: [0, isMobile ? 1.5 : 1.35, 5],
          fov: isMobile ? 2 : 7,
        }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={3} />
        <GltfModel
          url="/w.glb"
          scrollPosition={scrollPosition}
          mousePosition={mousePosition}
          isMobile={isMobile}
        />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          enableRotate={false}
          enabled={false}
        />
      </Canvas>
    </div>
  );
};

export default ThreeDScene;
