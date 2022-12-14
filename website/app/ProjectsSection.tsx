import { ReactNode } from "react";

function Pill({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-md bg-indigo-200 bg-opacity-30 px-4 py-1 text-sm font-semibold text-slate-300">
      {children}
    </div>
  );
}

function ProjectCard({
  title,
  tags,
  description,
}: {
  title: ReactNode;
  description: ReactNode;
  tags?: Array<{ name: string }>;
}) {
  return (
    <div className="flex flex-col gap-4 rounded-sm border-2 border-dashed border-indigo-800 p-4">
      <div className="relative hidden items-center justify-center rounded-xl bg-neutral-800 p-4 sm:flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
          />
        </svg>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-bold text-slate-300">{title}</h3>
        <p className="text-md text-justify">{description}</p>
        {tags && (
          <div className="flex flex-wrap gap-4">
            {tags.map((tag, idx) => (
              <Pill key={`${idx}-${tag.name}`}>{tag.name}</Pill>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <div className="relative mx-auto min-h-screen w-3/4">
      <div className="flex items-center gap-4">
        <h2 className="text-2xl font-bold text-slate-300 md:text-4xl">
          Projects
        </h2>
        <div className="h-[0.5px] w-2/3 bg-indigo-300" />
      </div>

      <div className="mt-4 flex flex-col gap-4">
        <ProjectCard
          title="Project 1"
          tags={[{ name: "Tag 1" }, { name: "Tag 2" }, { name: "Tag 3" }]}
          description="Labore enim duis fugiat cupidatat nostrud pariatur ullamco consectetur ipsum voluptate. Irure dolore id consectetur dolor mollit aliquip elit ullamco aliquip amet. Do culpa laboris exercitation ipsum ad proident elit sunt aute reprehenderit consectetur magna amet fugiat."
        />

        <ProjectCard
          title="Project 2"
          tags={[
            { name: "Tag 1" },
            { name: "Tag 2" },
            { name: "Tag 3" },
            { name: "Tag 4" },
            { name: "Tag 5" },
          ]}
          description="Labore enim duis fugiat cupidatat nostrud pariatur ullamco consectetur ipsum voluptate. Irure dolore id consectetur dolor mollit aliquip elit ullamco aliquip amet. Do culpa laboris exercitation ipsum ad proident elit sunt aute reprehenderit consectetur magna amet fugiat."
        />
      </div>
    </div>
  );
}
