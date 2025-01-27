import React, { useState, useEffect, useLayoutEffect } from "react";
import GlowingBarsAnimation from "./Animations/barsAnimation";
import ThreeDScene from "./model/3dmodel";
import Navbar from "./Navbar";
import WatchFeatureCarousel from "./Carousel";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SensorsFeature from "./rightFeatures";
import WatchUsageScenarios from "./WatchUtility";
import ShaderBackgroundApp from "./shader";
import ProductPage from "./Specs";
import Footer from "./footer";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [zIndex, setZIndex] = useState(10); 

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const normalizedX = (clientX / window.innerWidth) * 2 - 1;
      const normalizedY = -(clientY / window.innerHeight) * 2 + 1;
      setMousePosition({ x: normalizedX, y: normalizedY });
    };

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY / totalHeight;
      setScrollPosition(scrolled);
      console.log(scrolled);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 768 && scrollPosition > 0.12) {  
      setZIndex(-5);  
    } else if (window.innerWidth <= 768) {
      setZIndex(10); 
    } else {
      setZIndex(10); 
    }
  }, [scrollPosition]);

  useLayoutEffect(() => {
    gsap.to("#text4", {
      text: { value: `KRONO Wrist X` },
      duration: 2,
      ease: "power2.inOut",
    });
    gsap.fromTo(
      "#line2",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 2.5, ease: "power4.in" }
    );
    gsap.to("#text4", {
      text: { value: `KRONO Wrist X` },
      duration: 2,
      ease: "power2.inOut",
      onComplete: () => {
        gsap.to("#text4", {
          x: "10px",
          repeat: 3,
          yoyo: true,
          duration: 0.1,
        });
      },
    });
  }, []);

  useLayoutEffect(() => {
    const wrapper = document.querySelector(".ticker-wrapper");

    gsap.to(wrapper, {
      x: `-${wrapper.scrollWidth / 2}px`,
      duration: 8,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  return (
    <>
      <Navbar scrollPosition={scrollPosition} />
      
      <div className="fixed inset-0 -z-10 w-screen h-screen">
        <ShaderBackgroundApp />
      </div>
    
      <div className="relative w-full min-h-screen overflow-hidden pointer-events-none">
        <div
          className="fixed top-24 inset-0 z-10 pointer-events-none"
          style={{ zIndex }} 
        >
          <ThreeDScene
            scrollPosition={scrollPosition}
            mousePosition={mousePosition}
          />
        </div>
        <div className="relative flex flex-col">
          <div className="w-screen h-screen flex flex-col justify-center items-center p-6 sm:p-10 md:p-16">
            <h1 id="text4" className="text-5xl sm:text-6xl md:text-7xl lg:mr-96 lg:text-8xl font-bold text-center text-white">
              !@#$%^*&+? ~
            </h1>
            <h2 id="line2" className="text-5xl pt-6 sm:text-4xl md:text-4xl lg:mr-96 lg:text-2xl font-bold text-center text-white">
              "Where time bends, technology evolves, and style reigns"
            </h2>
            <div className="ticker-container w-full h-12 overflow-hidden">
              <div className="ticker-wrapper flex whitespace-nowrap">
                <p className="ticker-text text-white text-2xl font-bold px-8">
                  BEYOND TIME — AI-POWERED COMPANION — HOLOGRAPHIC DISPLAY — QUANTUM SENSORS — MIND-DRIVEN CONTROL —
                </p>
                <p className="ticker-text text-white text-2xl font-bold px-8">
                  BEYOND TIME — AI-POWERED COMPANION — HOLOGRAPHIC DISPLAY — QUANTUM SENSORS — MIND-DRIVEN CONTROL —
                </p>
              </div>
            </div>
          </div>
          <div className="w-screen h-screen"> 
            <GlowingBarsAnimation />
          </div>
          <div className="w-full h-screen bg-black flex justify-center items-center p-4 sm:p-6 md:p-10">
            <WatchFeatureCarousel />
          </div>
          <SensorsFeature />
          <WatchUsageScenarios/>
          <div className="flex justify-center items-center text-white text-xl sm:text-2xl md:text-3xl w-screen h-screen bg-black p-4 sm:p-6">
            <ProductPage/>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default App;
