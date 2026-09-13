import React, { useEffect, useState } from "react";
import Button from "../assets/components/Button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-6 pt-6 transition-all duration-500 ${
        isScrolled
          ? "opacity-0 -translate-y-8 pointer-events-none"
          : "opacity-100 translate-y-0"
      }`}
    >
      <div className="relative max-w-7xl mx-auto h-16">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:block">
          <a href="#contact">
            <Button
              size="sm"
              className="
                px-6
                py-2.5
                rounded-xl
                shadow-[0_0_25px_hsl(var(--primary)/0.25)]
                hover:shadow-[0_0_35px_hsl(var(--primary)/0.45)]
                hover:scale-[1.03]
                transition-all
                duration-300
              "
            >
              Contact Me
            </Button>
          </a>
        </div>

        <nav
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            flex
            items-center
            px-3
            py-2
            rounded-[1.5rem]
            border
            border-white/10
            backdrop-blur-xl
            bg-white/[0.07]
            shadow-[0_8px_40px_rgba(0,0,0,0.15)]
          "
        >
          <a
            href="#home"
            className="
              px-4
              text-xl
              font-bold
              tracking-tight
              text-white
              hover:scale-105
              transition-transform
              duration-300
              whitespace-nowrap
            "
          >
            MG<span className="text-primary">.</span>
          </a>

          <div className="h-6 w-px bg-white/10 mx-1" />

          <div className="flex items-center gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="
                  px-4
                  py-2
                  rounded-xl
                  text-sm
                  font-medium
                  text-white/60
                  hover:text-white
                  hover:bg-white/[0.08]
                  transition-all
                  duration-300
                  whitespace-nowrap
                "
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>

        <button
          className="
            absolute
            right-0
            top-1/2
            -translate-y-1/2
            md:hidden
            flex
            items-center
            justify-center
            w-11
            h-11
            rounded-xl
            text-white
            bg-white/[0.07]
            border
            border-white/10
            backdrop-blur-xl
            hover:bg-primary/10
            hover:text-primary
            transition-all
          "
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden mt-3">
          <div
            className="
              max-w-md
              ml-auto
              rounded-2xl
              border
              border-white/10
              bg-background/80
              backdrop-blur-xl
              shadow-[0_15px_50px_rgba(0,0,0,0.3)]
              p-4
              animate-fade-in
            "
          >
            <div className="flex flex-col gap-1">
              <a
                href="#home"
                onClick={() => setIsMobileMenuOpen(false)}
                className="
                  px-4
                  py-3
                  text-xl
                  font-bold
                  text-white
                "
              >
                MG<span className="text-primary">.</span>
              </a>

              <div className="h-px bg-white/10 my-1" />

              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="
                    px-4
                    py-3
                    rounded-xl
                    text-base
                    text-white/70
                    hover:text-primary
                    hover:bg-primary/10
                    transition-all
                    duration-300
                  "
                >
                  {link.label}
                </a>
              ))}

              <div className="pt-3 mt-2 border-t border-white/10">
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full">Contact Me</Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
