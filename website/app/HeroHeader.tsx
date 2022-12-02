import styles from "./polka.module.css";

export default function HeroHeader() {
  return (
    <div className="w-full md:w-3/4 px-10 mx-auto h-[100vh] flex items-center">
      <div className="relative z-10">
        <h1>
          <span className="text-xs sm:text-sm lg:text-md font-medium text-indigo-300 tracking-wider">
            Hi, my name is
          </span>
          <br />
          <span className="leading-tight text-3xl sm:text-4xl lg:text-7xl font-bold mt-2 text-slate-50">
            Paul Cedrick Artigo.
          </span>
        </h1>
        <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-slate-200 opacity-75 tracking-wider">
          I build things for the web.
        </h2>
        <p className="mt-6 text-sm sm:text-base lg:text-lg text-slate-200 w-full lg:w-3/4">
          <span className="opacity-80">
            I{"'"}m a software engineer/developer who specializes in building
            and architecting products specifically for the web. I{"'"}m
            currently focused on building cool products and solutions at{" "}
          </span>
          <a
            className="text-indigo-300 font-semibold opacity-100 underline underline-offset-8"
            target="_blank"
            href="https://www.kroma.ph/"
            rel="noreferrer"
          >
            Kroma Entertainment.
          </a>
        </p>
      </div>
      <div
        className={`${styles.polka} block h-[240px] w-[240px] sm:h-[400px] sm:w-[280px] lg:h-[540px] lg:w-[320px] absolute -bottom-20 sm:-bottom-40 lg:-bottom-60 -right-0 z-0`}
      ></div>
      <div
        className={`${styles.polka} block h-[480px] w-[560px] sm:h-[540px] sm:w-[800px] lg:h-[480px] lg:w-[800px] absolute -top-80 -left-80 sm:-top-64 sm:-left-64 z-0`}
      ></div>
    </div>
  );
}
