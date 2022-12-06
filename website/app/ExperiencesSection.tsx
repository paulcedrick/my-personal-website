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

function ExperienceItem({
  title,
  company,
  date,
  responsibilities,
}: {
  title: string;
  company?: string;
  date: string;
  responsibilities: string[];
}) {
  return (
    <motion.div
      key="first"
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 16 }}
    >
      <p className="text-base font-semibold sm:text-xl">
        {title}{" "}
        {company && <span className="text-indigo-300">@ {company}</span>}
      </p>
      <p className="mt-2 font-mono text-sm font-normal sm:text-base">{date}</p>

      <ul className="mt-4 ml-4 flex flex-col gap-4">
        {responsibilities.map((responsibility, i) => (
          <li
            className="list-disc text-xs text-slate-200 sm:text-sm"
            key={`${i}-${responsibility}`}
          >
            <p>{responsibility}</p>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function ExperiencesSection() {
  return (
    <>
      <div id="experiences-section"></div>
      <div className="relative mx-auto mt-80 w-3/4">
        <div className="flex items-center justify-between gap-4">
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
              <CustomTab>Freelance</CustomTab>
              <CustomTab>Codesignate</CustomTab>
            </Tab.List>
            <AnimatePresence>
              <Tab.Panels className="p-1 sm:basis-8/12">
                <Tab.Panel>
                  <ExperienceItem
                    title="Full Stack Developer"
                    company="Kroma"
                    date="Mar 2022 - Present"
                    responsibilities={[
                      `Designing the architecture of some of our products and projects.`,
                      `Utilizes serverless services that AWS offers when architecting and design some of our products and projects`,
                      `Directly involve in setting up best-practices in building some of our products and projects`,
                      `Uses AWS CDK via SST for structuring our infrastructure (IaC).`,
                      `Uses React for single-page application projects and NextJS for multi-page websites or application.`,
                      `Primarily uses NoSQL (DynamoDB) for most products/projects.`,
                      `Mainly uses Typescript for both backend and frontend.`,
                    ]}
                  />
                </Tab.Panel>
                <Tab.Panel>
                  <ExperienceItem
                    title="Freelance Developer"
                    date="May 2020 - Dec 2021"
                    responsibilities={[
                      `Actively involve in modernizing the stack of the product I'm working on to a microservice architecture and containerization.`,
                      `Uses React and Apollo GraphQL in the frontend while we use NodeJS, Typescript and Apollo Server for the backend.`,
                      `We initially use firestore as our database but migrated to Postgres.`,
                      `Been involved in the user management of the product including the authorization.`,
                      `Actively suggesting good practices both in front-end and back-end.`,
                      `Been involved in doing reports and some simple visualization.`,
                      `Trying out technologies that we can incorporate to our product to solve a particular problem or to build a particcular requested feature`,
                    ]}
                  />
                </Tab.Panel>
                <Tab.Panel>
                  <ExperienceItem
                    title="Web Developer"
                    date="May 2017 - Dec 2020"
                    company="UGroop"
                    responsibilities={[
                      `Uses React and Redux for doing the frontend`,
                      `Uses Nodejs (Loopback) and .NET Core for the backend`,
                      `Responsible for some microservices we had for the backend`,
                      `Created a CLI tool that helps the whole team in generating some code according to our best practices in the company`,
                      `Started using GraphQL using Appsync for doing the metrics feature in the product`,
                      `Actively researching new tech that we can use in order to modernize our stack or modernize our way of how we do things`,
                    ]}
                  />
                </Tab.Panel>
                <Tab.Panel>
                  <ExperienceItem
                    title="Freelance Developer"
                    date="May 2014 - Jan 2019"
                    responsibilities={[
                      `Uses React, React Native and Nodejs to some projects specifically application type projects`,
                      `Present project proposals to some clients which includes presenting the proposed solution and cost for the project`,
                      `Uses Wordpress and PHP for some simple websites`,
                    ]}
                  />
                </Tab.Panel>
                <Tab.Panel>
                  <ExperienceItem
                    title="Web Developer"
                    company="Codesignate"
                    date="May 2014 - Jan 2019"
                    responsibilities={[
                      `Uses Wordpress and PHP for some of the projects especially for simple websites`,
                      `Uses React, Nodejs, PostgresQL and MongoDB for building a blogging platform`,
                      `Was been part of maintaining a news website which have thousands of visitors a day`,
                      `Suggesting ways as we use React especially way back in its early days`,
                      `Was been trained as a Solutions Architect in the company which helps me to think in the bigger picture`,
                    ]}
                  />
                </Tab.Panel>
              </Tab.Panels>
            </AnimatePresence>
          </Tab.Group>
        </div>
      </div>
    </>
  );
}
