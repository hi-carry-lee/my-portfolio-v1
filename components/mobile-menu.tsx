"use client";
import { useState } from "react";
import Link from "next/link";
import ModeToggle from "@/components/mode-toggle";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const linkStyles = `
    px-6 py-4 
    text-foreground/80 
    font-medium 
    rounded-lg 
    transition-all 
    duration-300 
    ease-in-out
    hover:bg-green-50/80 
    hover:text-green-700 
    hover:shadow-sm
    dark:hover:bg-green-950/40 
    dark:hover:text-green-300
    active:scale-95
    block text-center min-w-[200px]
  `;

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="flex justify-between items-center p-4 border-b border-border/20 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <Link
        href="/"
        className="font-bold text-2xl text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors duration-200"
      >
        Kerry
      </Link>

      <div className="flex items-center gap-2">
        <ModeToggle />
        <Button
          variant="ghost"
          onClick={toggleMenu}
          className="mr-2 p-2 h-auto w-auto"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="size-7" /> : <Menu className="size-7" />}
        </Button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 bg-background/95 backdrop-blur-sm z-40">
          <nav className="flex flex-col items-end justify-center min-h-full p-6 space-y-6">
            <a href="#home" className={linkStyles} onClick={closeMenu}>
              Home
            </a>
            <a href="#about" className={linkStyles} onClick={closeMenu}>
              About
            </a>
            <a href="#projects" className={linkStyles} onClick={closeMenu}>
              Projects
            </a>
            <a href="#contact" className={linkStyles} onClick={closeMenu}>
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default MobileMenu;
