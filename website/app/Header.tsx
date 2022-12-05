"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import LogoSmall from "../public/logo-small.png";
import NavDrawer from "./NavDrawer";
import NavItem from "./NavItem";
import classNames from "classnames";

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleLinkClick = (sectionId: string) => () => {
    const element = document.getElementById(sectionId);

    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleMenu = useCallback(() => {
    setOpen(!open);
  }, [open]);

  return (
    <header
      className={classNames(
        "fixed top-0 left-0 z-20 flex h-16 w-full items-center bg-neutral-900 shadow-lg md:h-20"
      )}
    >
      <div className="container mx-auto flex w-full flex-row items-center justify-between px-10 md:hidden">
        <div>
          <a onClick={handleLinkClick("hero-section")} href="#home">
            <Image
              src={LogoSmall}
              alt="logo-mobile"
              className="h-10 w-[80px]"
            />
          </a>
        </div>
        <div>
          <button
            className="relative h-10 w-10 text-slate-200 focus:outline-none "
            onClick={handleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <div className="absolute left-1/2 top-1/2 block w-5   -translate-x-1/2  -translate-y-1/2 transform">
              <span
                className={`absolute block h-0.5 w-5 transform bg-current transition duration-500 ease-in-out ${
                  open && "rotate-45"
                } ${!open && "-translate-y-1.5"}`}
              ></span>
              <span
                className={`absolute block  h-0.5 w-5 transform   bg-current transition duration-500 ease-in-out ${
                  open ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`absolute block  h-0.5 w-5 transform bg-current  transition duration-500 ease-in-out ${
                  open && "-rotate-45"
                } ${!open && "translate-y-1.5"}`}
              ></span>
            </div>
          </button>
        </div>
      </div>
      <nav className="container mx-auto hidden flex-row justify-between px-10 md:flex">
        <div>
          <Image src={LogoSmall} alt="logo-mobile" className="h-10 w-[80px]" />
        </div>
        <ul className="flex items-center gap-4">
          <NavItem>
            <a onClick={handleLinkClick("about-section")} href="#about">
              About
            </a>
          </NavItem>
          <NavItem>
            <a
              onClick={handleLinkClick("experiences-section")}
              href="#experiences"
            >
              Experiences
            </a>
          </NavItem>
          <NavItem>
            <a href="#contact" onClick={handleLinkClick("contact-us-section")}>
              Contact
            </a>
          </NavItem>
          <button className="rounded-md border-2 border-indigo-300 py-2 px-4 font-bold text-indigo-300 hover:bg-indigo-300 hover:text-neutral-900">
            Resume
          </button>
        </ul>
      </nav>

      <NavDrawer onClose={() => setOpen(false)} open={open} />
    </header>
  );
}
