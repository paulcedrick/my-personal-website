import styles from "./polka.module.css";

export default function HeroHeader() {
  return (
    <div className="w-full md:w-3/4 px-10 mx-auto h-[100vh] flex items-center">
      <div className="relative z-10">
        <h1>
          <span className="text-xs md:text-md font-medium text-indigo-300 tracking-wider">
            Hi, my name is
          </span>
          <br />
          <span className="leading-tight text-3xl md:text-7xl font-bold mt-2 text-slate-50">
            Paul Cedrick Artigo.
          </span>
        </h1>
        <h2 className="text-xl md:text-6xl font-bold text-slate-200 opacity-75 tracking-wider">
          I build things for the web.
        </h2>
        <p className="mt-6 text-sm md:text-md text-slate-200 w-full md:w-[40%]">
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
        className={`${styles.polka} block h-[240px] w-[240px] md:h-[540px] md:w-[540px] absolute -bottom-20 md:-bottom-60 -right-0 z-0`}
      ></div>
      <div
        className={`${styles.polka} block h-[480px] w-[560px] md:h-[540px] md:w-[800px] absolute -top-80 -left-80 z-0`}
      ></div>
    </div>
  );
}
