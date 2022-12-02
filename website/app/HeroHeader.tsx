import styles from "./polka.module.css";

export default function HeroHeader() {
  return (
    <div
      id="hero-section"
      className="mx-auto flex h-[100vh] w-full items-center px-10 md:w-3/4"
    >
      <div className="relative z-10">
        <h1>
          <span className="lg:text-md text-xs font-medium tracking-wider text-indigo-300 sm:text-sm">
            Hi, my name is
          </span>
          <br />
          <span className="mt-2 text-3xl font-bold leading-tight text-slate-50 sm:text-4xl lg:text-7xl">
            Paul Cedrick Artigo.
          </span>
        </h1>
        <h2 className="text-xl font-bold tracking-wider text-slate-200 opacity-75 sm:text-2xl lg:text-4xl">
          I build things for the web.
        </h2>
        <p className="mt-6 w-full text-sm text-slate-200 sm:text-base lg:w-3/4 lg:text-lg">
          <span className="opacity-80">
            I{"'"}m a software engineer/developer who specializes in building
            and architecting products specifically for the web. I{"'"}m
            currently focused on building cool products and solutions at{" "}
          </span>
          <a
            className="font-semibold text-indigo-300 underline underline-offset-8 opacity-100"
            target="_blank"
            href="https://www.kroma.ph/"
            rel="noreferrer"
          >
            Kroma Entertainment.
          </a>
        </p>
      </div>
      <div
        className={`${styles.polka} absolute -bottom-20 -right-0 z-0 block h-[240px] w-[240px] sm:-bottom-40 sm:h-[400px] sm:w-[280px] lg:-bottom-60 lg:h-[540px] lg:w-[320px]`}
      ></div>
      <div
        className={`${styles.polka} absolute -top-80 -left-80 z-0 block h-[480px] w-[560px] sm:-top-64 sm:-left-64 sm:h-[540px] sm:w-[800px] lg:h-[480px] lg:w-[800px]`}
      ></div>
    </div>
  );
}
