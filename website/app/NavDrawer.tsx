import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import NavItem from "./NavItem";

type NavDrawerProps = {
  open: boolean;
};
export default function NavDrawer({ open }: NavDrawerProps) {
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
          <div className="fixed inset-0 bg-black bg-opacity-80 transition-opacity mt-16" />
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
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md mt-16">
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
                    <div className="px-4 sm:px-6 flex justify-between"></div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      {/* Replace with your content */}
                      <ul className="flex flex-col gap-10">
                        <NavItem>About</NavItem>
                        <NavItem>Experiences</NavItem>
                        <NavItem>Projects</NavItem>
                        <NavItem>Contact</NavItem>
                        <li>
                          <button className="border-2 border-indigo-300 py-2 px-4 rounded-md text-indigo-300 hover:text-neutral-900 hover:bg-indigo-300 font-bold w-full">
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
