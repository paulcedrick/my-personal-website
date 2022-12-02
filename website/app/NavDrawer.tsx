"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import NavItem from "./NavItem";

type NavDrawerProps = {
  open: boolean;
  onClose: () => void;
};
export default function NavDrawer({ open, onClose }: NavDrawerProps) {
  const handleLinkClick = (sectionId: string) => () => {
    const element = document.getElementById(sectionId);

    element?.scrollIntoView({ behavior: "smooth" });
    onClose();
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => {}}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 mt-16 bg-black bg-opacity-80 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative mt-16 w-screen max-w-md">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4"></div>
                  </Transition.Child>
                  <div className="flex h-full flex-col overflow-y-scroll bg-neutral-900 py-6 shadow-xl">
                    <div className="flex justify-between px-4 sm:px-6"></div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      {/* Replace with your content */}
                      <ul className="flex flex-col gap-10">
                        <NavItem>
                          <a
                            onClick={handleLinkClick("about-section")}
                            href="#about"
                          >
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
                        {/* <NavItem>
            <a href="#projects">Projects</a>
          </NavItem> */}
                        <NavItem>
                          <a
                            href="#contact"
                            onClick={handleLinkClick("contact-us-section")}
                          >
                            Contact
                          </a>
                        </NavItem>
                        <li>
                          <button className="w-full rounded-md border-2 border-indigo-300 py-2 px-4 font-bold text-indigo-300 hover:bg-indigo-300 hover:text-neutral-900">
                            Resume
                          </button>
                        </li>
                      </ul>
                      {/* /End replace */}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
