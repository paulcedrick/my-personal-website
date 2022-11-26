"use client";
import Image from "next/image";
import { useCallback, useState } from "react";
import LogoSmall from "../public/logo-small.png";
import NavDrawer from "./NavDrawer";
import NavItem from "./NavItem";

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleMenu = useCallback(() => {
    setOpen(!open);
  }, [open]);

  return (
    <header className="flex h-16 md:h-20 shadow-lg bg-neutral-900 items-center fixed w-full top-0 left-0 z-20">
      <div className="container mx-auto md:hidden w-full flex flex-row items-center justify-between px-10">
        <div>
          <Image src={LogoSmall} alt="logo-mobile" className="h-10 w-[80px]" />
        </div>
        <div>
          <button
            className="text-slate-200 w-10 h-10 relative focus:outline-none "
            onClick={handleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <div className="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
              <span
                className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                  open && "rotate-45"
                } ${!open && "-translate-y-1.5"}`}
              ></span>
              <span
                className={`block absolute  h-0.5 w-5 bg-current   transform transition duration-500 ease-in-out ${
                  open ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out ${
                  open && "-rotate-45"
                } ${!open && "translate-y-1.5"}`}
              ></span>
            </div>
          </button>
        </div>
      </div>
      <nav className="container mx-auto flex-row justify-end hidden md:flex">
        <div></div>
        <ul className="flex gap-4 items-center">
          <NavItem>
            <a href="#about">About</a>
          </NavItem>
          <NavItem>
            <a href="#experiences">Experiences</a>
          </NavItem>
          <NavItem>
            <a href="#projects">Projects</a>
          </NavItem>
          <NavItem>
            <a href="#contact">Contact</a>
          </NavItem>
          <button className="border-2 border-indigo-300 py-2 px-4 rounded-md text-indigo-300 hover:text-neutral-900 hover:bg-indigo-300 font-bold">
            Resume
          </button>
        </ul>
      </nav>

      <NavDrawer open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
