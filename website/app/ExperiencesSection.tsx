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
              ? "whitespace-nowrap rounded-md bg-indigo-300 bg-opacity-40 p-1 text-sm font-normal text-white focus:ring-0 focus-visible:ring-0 sm:whitespace-pre"
              : "whitespace-nowrap rounded-md p-1 text-sm font-normal text-white focus:ring-0 focus-visible:ring-0"
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
    <div className="relative mx-auto mb-20 w-3/4">
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
          <Tab.Panels className="p-1 sm:basis-8/12">
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
