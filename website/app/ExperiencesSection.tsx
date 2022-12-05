"use client";

import { Tab } from "@headlessui/react";
import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import { Fragment } from "react";

function CustomTab({ children }: { children: React.ReactNode }) {
  return (
    <Tab as={Fragment}>
      {({ selected }) => (
        <button
          className={classNames(
            "whitespace-nowrap rounded-md p-1 text-sm font-normal text-white focus:ring-0 focus-visible:ring-0 sm:text-base",
            selected && "bg-indigo-300 bg-opacity-40"
          )}
        >
          {children}
        </button>
      )}
    </Tab>
  );
}

export default function ExperiencesSection() {
  return (
    <>
      <div id="experiences-section"></div>
      <div className="relative mx-auto mt-20 mb-20 w-3/4">
        <div className="flex items-center justify-center gap-4">
          <div className="h-[0.5px] w-1/3 bg-indigo-300" />
          <h2 className="text-2xl font-bold text-slate-300 md:text-4xl">
            Experiences
          </h2>
          <div className="h-[0.5px] w-1/3 bg-indigo-300" />
        </div>

        <div className="mt-4">
          <Tab.Group as="div" className="gap-6 sm:flex sm:items-start">
            <Tab.List className="mb-4 flex max-w-full items-center gap-4 overflow-x-auto sm:basis-4/12 sm:flex-col sm:items-start">
              <CustomTab>Kroma Entertainment</CustomTab>
              <CustomTab>Freelance</CustomTab>
              <CustomTab>UGroop</CustomTab>
              <CustomTab>Codesignate</CustomTab>
            </Tab.List>
            <AnimatePresence>
              <Tab.Panels className="p-1 sm:basis-8/12">
                <Tab.Panel>
                  <motion.div
                    key="first"
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 16 }}
                  >
                    <p className="text-sm font-semibold sm:text-base">Year</p>
                    <p className="text-sm font-normal sm:text-base">
                      2022 - Present
                    </p>

                    <div className="mt-4">
                      <p className="text-sm font-semibold sm:text-base">
                        Summary
                      </p>
                      <p className="text-sm sm:text-base">
                        Officia Lorem aute cupidatat fugiat ullamco excepteur
                        veniam sit velit excepteur veniam occaecat elit.
                      </p>
                    </div>
                  </motion.div>
                </Tab.Panel>
                <Tab.Panel>
                  <motion.div
                    key="first"
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 16 }}
                  >
                    <p className="text-sm font-semibold sm:text-base">Year</p>
                    <p className="text-sm font-normal sm:text-base">
                      2014 - 2021
                    </p>

                    <div className="mt-4">
                      <p className="text-sm font-semibold sm:text-base">
                        Summary
                      </p>
                      <p className="text-sm sm:text-base">
                        Officia Lorem aute cupidatat fugiat ullamco excepteur
                        veniam sit velit excepteur veniam occaecat elit.
                      </p>
                    </div>
                  </motion.div>
                </Tab.Panel>
                <Tab.Panel>
                  <motion.div
                    key="first"
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 16 }}
                  >
                    <p className="text-sm font-semibold sm:text-base">Year</p>
                    <p className="text-sm font-normal sm:text-base">
                      2017 - 2020
                    </p>

                    <div className="mt-4">
                      <p className="text-sm font-semibold sm:text-base">
                        Summary
                      </p>
                      <p className="text-sm sm:text-base">
                        Officia Lorem aute cupidatat fugiat ullamco excepteur
                        veniam sit velit excepteur veniam occaecat elit.
                      </p>
                    </div>
                  </motion.div>
                </Tab.Panel>
                <Tab.Panel>
                  <motion.div
                    key="first"
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 16 }}
                  >
                    <p className="text-sm font-semibold sm:text-base">Year</p>
                    <p className="text-sm font-normal sm:text-base">
                      2014 - 2016
                    </p>

                    <div className="mt-4">
                      <p className="text-sm font-semibold sm:text-base">
                        Summary
                      </p>
                      <p className="text-sm sm:text-base">
                        Officia Lorem aute cupidatat fugiat ullamco excepteur
                        veniam sit velit excepteur veniam occaecat elit.
                      </p>
                    </div>
                  </motion.div>
                </Tab.Panel>
              </Tab.Panels>
            </AnimatePresence>
          </Tab.Group>
        </div>
      </div>
    </>
  );
}
