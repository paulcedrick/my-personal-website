"use client";

import { Tab } from "@headlessui/react";
import { Fragment } from "react";

function CustomTab({ children }: { children: React.ReactNode }) {
  return (
    <Tab as={Fragment}>
      {({ selected }) => (
        <button
          className={
            selected
              ? "text-sm bg-indigo-300 bg-opacity-40 font-normal text-white p-1 rounded-md whitespace-nowrap sm:whitespace-pre focus:ring-0 focus-visible:ring-0"
              : "text-sm text-white font-normal p-1 rounded-md whitespace-nowrap focus:ring-0 focus-visible:ring-0"
          }
        >
          {children}
        </button>
      )}
    </Tab>
  );
}

export default function ExperiencesSection() {
  return (
    <div className="w-3/4 mx-auto relative h-screen">
      <div className="flex items-center gap-4 justify-center">
        <div className="w-1/3 h-[0.5px] bg-indigo-300" />
        <h2 className="text-2xl md:text-4xl font-bold text-neutral-200">
          Experiences
        </h2>
        <div className="w-1/3 h-[0.5px] bg-indigo-300" />
      </div>

      <div className="mt-4">
        <Tab.Group as="div" className="sm:flex sm:items-start gap-6">
          <Tab.List className="flex items-center sm:flex-col sm:items-start gap-6 overflow-x-auto max-w-full mb-4">
            <CustomTab>Kroma Entertainment</CustomTab>
            <CustomTab>Freelance</CustomTab>
            <CustomTab>UGroop</CustomTab>
            <CustomTab>Codesignate</CustomTab>
          </Tab.List>
          <Tab.Panels className="p-1">
            <Tab.Panel>
              <p className="text-sm font-semibold">Year</p>
              <p className="text-sm font-normal">2022 - Present</p>

              <div className="mt-4">
                <p className="text-sm font-semibold">Summary</p>
                <p className="text-sm">
                  Officia Lorem aute cupidatat fugiat ullamco excepteur veniam
                  sit velit excepteur veniam occaecat elit.
                </p>
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <p className="text-sm font-semibold">Year</p>
              <p className="text-sm font-normal">2014 - 2021</p>

              <div className="mt-4">
                <p className="text-sm font-semibold">Summary</p>
                <p className="text-sm">
                  Officia Lorem aute cupidatat fugiat ullamco excepteur veniam
                  sit velit excepteur veniam occaecat elit.
                </p>
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <p className="text-sm font-semibold">Year</p>
              <p className="text-sm font-normal">2017 - 2020</p>

              <div className="mt-4">
                <p className="text-sm font-semibold">Summary</p>
                <p className="text-sm">
                  Officia Lorem aute cupidatat fugiat ullamco excepteur veniam
                  sit velit excepteur veniam occaecat elit.
                </p>
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <p className="text-sm font-semibold">Year</p>
              <p className="text-sm font-normal">2014 - 2016</p>

              <div className="mt-4">
                <p className="text-sm font-semibold">Summary</p>
                <p className="text-sm">
                  Officia Lorem aute cupidatat fugiat ullamco excepteur veniam
                  sit velit excepteur veniam occaecat elit.
                </p>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}
