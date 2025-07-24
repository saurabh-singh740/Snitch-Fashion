import React, { useRef, useState, useEffect } from "react";
import HeroSection from '../homepagesss/HeroSection';
import LogoLoader from '../homepagesss/LogoLoader';
import Navbar from '../homepagesss/Navbar';

const HomePage = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);

  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNavbar(true);
    }, 3500); // Match the duration of your LogoLoader animation

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LogoLoader />
      {showNavbar && (
        <>
          <Navbar homeRef={homeRef} aboutRef={aboutRef} />
          <div ref={homeRef}>
            <HeroSection />
          </div>
        </>
      )}
    </>
  );
};

export default HomePage;