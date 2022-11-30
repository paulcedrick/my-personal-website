export default function AboutSection() {
  return (
    <div className="w-3/4 mx-auto relative min-h-screen mt-20">
      <div className="flex items-center gap-4">
        <h2 className="text-2xl md:text-4xl font-bold text-neutral-200">
          About Me
        </h2>
        <div className="w-1/3 h-[0.5px] bg-indigo-300" />
      </div>

      <div className="mt-10 md:mt-20">
        <p className="text-sm md:text-lg text-slate-300 max-w-2xl">
          Hello! My name is Paul Cedrick Artigo and I enjoy learning new things
          and building cool stuff. My interest in programming in general started
          back in my highschool days when we start learning about Visual Basic
          which taught me about the basics of programming.
        </p>
        <br />
        <p className="text-sm md:text-lg text-slate-300 max-w-2xl">
          Fast-forward today, I am privileged to be able to work at a{" "}
          <span className="text-indigo-300 font-bold">software shop</span>,{" "}
          <span className="text-indigo-300 font-bold">start-ups</span> and also
          being able to do some{" "}
          <span className="text-indigo-300 font-bold">freelance work</span> as
          well. These days, my main focus revolves around architecting solutions
          using AWS (mainly around their serverless products) and doing cool
          products/web apps/websites at{" "}
          <span className="text-indigo-300 font-bold">Kroma Entertainment</span>
          .
        </p>
        <br />
        <p className="text-sm md:text-lg text-slate-300 max-w-2xl">
          Here are the few technologies I had some experience working with:
        </p>

        <ul className="list-disc list-inside mt-4 grid grid-cols-2 w-full md:w-[50%] md:gap-4">
          <li className="text-xs font-semibold text-indigo-300">
            <span className="text-slate-200 font-bold">Typescript</span>
          </li>
          <li className="text-xs font-semibold text-indigo-300">
            <span className="text-slate-200 font-bold">React</span>
          </li>
          <li className="text-xs font-semibold text-indigo-300">
            <span className="text-slate-200 font-bold">Vue</span>
          </li>
          <li className="text-xs font-semibold text-indigo-300">
            <span className="text-slate-200 font-bold">Next.js</span>
          </li>
          <li className="text-xs font-semibold text-indigo-300">
            <span className="text-slate-200 font-bold">Tailwind CSS</span>
          </li>
          <li className="text-xs font-semibold text-indigo-300">
            <span className="text-slate-200 font-bold">SST</span>
          </li>
          <li className="text-xs font-semibold text-indigo-300">
            <span className="text-slate-200 font-bold">AWS</span>
          </li>
          <li className="text-xs font-semibold text-indigo-300">
            <span className="text-slate-200 font-bold">Go</span>
          </li>
          <li className="text-xs font-semibold text-indigo-300">
            <span className="text-slate-200 font-bold">NoSQL</span>
          </li>
          <li className="text-xs font-semibold text-indigo-300">
            <span className="text-slate-200 font-bold">SQL</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
