"use client";

import { TbMenu } from "react-icons/tb";
import NavItem from "./NavItem";

export default function Header() {
  return (
    <header className="flex h-12 md:h-20 shadow-lg bg-neutral-900 items-center fixed w-full top-0 left-0 z-20">
      <div className="container mx-auto md:hidden w-full flex flex-row justify-between px-10">
        <div />
        <TbMenu size={24} />
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
    </header>
  );
}
