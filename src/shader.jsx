import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ShaderBackgroundApp = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 1;
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    const resizePlane = () => {
      const aspect = window.innerWidth / window.innerHeight;
      mesh.scale.set(aspect * 2, 2, 1);
    };
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 }
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        varying vec2 vUv;

        void main() {
          vec2 uv = vUv;
          
          // Animated color blend
          vec3 blue = vec3(0.1, 0.2, 0.4);
          vec3 cream = vec3(0.8, 0.75, 0.65);
          vec3 orange = vec3(0.8, 0.3, 0.1);
          
          float animatedWave = sin(time * 0.5 + uv.x * 5.0 + uv.y * 3.0);
          float colorMix = smoothstep(-0.5, 0.5, animatedWave);
          
          vec3 finalColor = mix(
            mix(blue, cream, colorMix),
            orange,
            pow(sin(time * 0.9 + uv.x * 2.0), 2.0)
          );
          
          // Subtle noise
          float noise = fract(sin(dot(uv, vec2(12.9898, 78.233))) * 43758.5453);
          finalColor += noise * 0.09;
          
          gl_FragColor = vec4(finalColor, 1.0);
        }
      `
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      resizePlane();
    };
    window.addEventListener('resize', onResize);
    resizePlane();
    const animate = (time) => {
      material.uniforms.time.value = time * 0.001;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate(0);

    return () => {
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return (
    <div style={{ 
      width: '100vw', 
      height: '100vh', 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      overflow: 'hidden', 
      zIndex: -10 
    }}>
      <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%' }} />
    </div>
  );
};

export default ShaderBackgroundApp;
