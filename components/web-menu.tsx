import Link from "next/link";
import ModeToggle from "@/components/mode-toggle";

const linkStyles = `
    px-3 py-2 
    text-foreground/80 
    font-medium 
    rounded-lg 
    transition-all 
    duration-300 
    ease-in-out
    hover:bg-green-50/80 
    hover:text-green-700 
    hover:shadow-sm
    hover:scale-105
    dark:hover:bg-green-950/40 
    dark:hover:text-green-300
    active:scale-95
  `;

const WebMenu = () => {
  return (
    <header className="flex justify-between items-center p-4 border-b border-border/20 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <Link
        href="/"
        className="font-bold text-3xl text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-all duration-300 px-4 py-2 rounded-xl bg-green-50/50 dark:bg-green-950/30 border border-green-200/50 dark:border-green-800/50 hover:bg-green-100/80 dark:hover:bg-green-900/50 hover:border-green-300 dark:hover:border-green-700 hover:shadow-lg hover:scale-105"
      >
        Kai Li
      </Link>
      <nav className="flex items-center gap-2 text-xl">
        <Link href="/" className={linkStyles}>
          Home
        </Link>
        <Link href="#about" className={linkStyles}>
          About
        </Link>
        <Link href="#skills" className={linkStyles}>
          Skills
        </Link>
        <Link href="#projects" className={linkStyles}>
          Projects
        </Link>
        <Link href="#contact" className={linkStyles}>
          Contact
        </Link>

        <div className="ml-2">
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
};

export default WebMenu;
