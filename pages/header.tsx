"use client";
import { useState, useEffect } from "react";
import MobileMenu from "../components/mobile-menu";
import WebMenu from "../components/web-menu";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // 768px is typical tablet/mobile breakpoint
    };

    // Check on mount
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener("resize", checkScreenSize);

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Show mobile header on mobile devices, web header on larger screens
  return isMobile ? <MobileMenu /> : <WebMenu />;
};

export default Header;
