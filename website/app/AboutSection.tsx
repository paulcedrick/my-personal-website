export default function AboutSection() {
  return (
    <>
      <div id="about-section"></div>
      <div className="relative mx-auto mt-20 w-3/4">
        <div className="mt-16 flex items-center gap-4">
          <h2 className="text-2xl font-bold text-neutral-200 md:text-4xl">
            About Me
          </h2>
          <div className="h-[0.5px] w-1/3 bg-indigo-300" />
        </div>

        <div className="mt-10">
          <p className="max-w-2xl text-sm text-slate-300 sm:text-base md:text-lg">
            Hello! My name is Paul Cedrick Artigo and I enjoy learning new
            things and building cool stuff. My interest in programming in
            general started back in my highschool days when we start learning
            about Visual Basic which taught me about the basics of programming.
          </p>
          <br />
          <p className="max-w-2xl text-sm text-slate-300 sm:text-base md:text-lg">
            Fast-forward today, I am privileged to be able to work at a{" "}
            <span className="font-bold text-indigo-300">software shop</span>,{" "}
            <span className="font-bold text-indigo-300">start-ups</span> and
            also being able to do some{" "}
            <span className="font-bold text-indigo-300">freelance work</span> as
            well. These days, my main focus revolves around architecting
            solutions using AWS (mainly around their serverless products) and
            doing cool products/web apps/websites at{" "}
            <span className="font-bold text-indigo-300">
              Kroma Entertainment
            </span>
            .
          </p>
          <br />
          <p className="max-w-2xl text-sm text-slate-300 sm:text-base md:text-lg">
            Here are the few technologies I had some experience working with:
          </p>

          <ul className="mt-4 grid w-full list-inside list-disc grid-cols-2 sm:gap-4">
            <li className="text-xs font-semibold text-indigo-300 sm:text-base">
              <span className="font-bold text-slate-200">Typescript</span>
            </li>
            <li className="text-xs font-semibold text-indigo-300 sm:text-base">
              <span className="font-bold text-slate-200">React</span>
            </li>
            <li className="text-xs font-semibold text-indigo-300 sm:text-base">
              <span className="font-bold text-slate-200">Vue</span>
            </li>
            <li className="text-xs font-semibold text-indigo-300 sm:text-base">
              <span className="font-bold text-slate-200">Next.js</span>
            </li>
            <li className="text-xs font-semibold text-indigo-300 sm:text-base">
              <span className="font-bold text-slate-200">Tailwind CSS</span>
            </li>
            <li className="text-xs font-semibold text-indigo-300 sm:text-base">
              <span className="font-bold text-slate-200">SST</span>
            </li>
            <li className="text-xs font-semibold text-indigo-300 sm:text-base">
              <span className="font-bold text-slate-200">AWS</span>
            </li>
            <li className="text-xs font-semibold text-indigo-300 sm:text-base">
              <span className="font-bold text-slate-200">Go</span>
            </li>
            <li className="text-xs font-semibold text-indigo-300 sm:text-base">
              <span className="font-bold text-slate-200">NoSQL</span>
            </li>
            <li className="text-xs font-semibold text-indigo-300 sm:text-base">
              <span className="font-bold text-slate-200">SQL</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
