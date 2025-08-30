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

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 border-b border-border/20 bg-background/80 backdrop-blur-sm sticky top-0 z-50 ">
      <Link
        href="/"
        className="font-bold text-3xl text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors duration-200"
      >
        Kerry
      </Link>
      <nav className="flex items-center gap-2 text-xl">
        {/* ⬇️ 以下4行是修改的：将 Link 改为 a 标签，href 改为锚点 */}
        <a href="#home" className={linkStyles}>
          Home
        </a>
        <a href="#about" className={linkStyles}>
          About
        </a>
        <a href="#projects" className={linkStyles}>
          Projects
        </a>
        <a href="#contact" className={linkStyles}>
          Contact
        </a>

        <div className="ml-2">
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Header;
