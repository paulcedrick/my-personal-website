import { TbBrandGithub, TbBrandLinkedin } from "react-icons/tb";

export default function Footer() {
  return (
    <footer className="min-h-20 flex flex-col items-center justify-center gap-4 py-6">
      <ul className="flex flex-row gap-4 lg:hidden">
        <li className="cursor-pointer">
          <a
            target="_blank"
            href="https://github.com/paulcedrick"
            rel="noreferrer"
          >
            <TbBrandGithub size="32" className="hover:text-indigo-300" />
          </a>
        </li>
        <li className="cursor-pointer">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/paul-cedrick-artigo-227644a1/"
            rel="noreferrer"
          >
            <TbBrandLinkedin size="32" className="hover:text-indigo-300" />
          </a>
        </li>
      </ul>
      <div className="text-center">
        <p className="mb-1 text-xs font-semibold text-slate-300">
          Designed & Built by Paul Cedrick Artigo
        </p>
        <p className="text-xs font-semibold text-slate-300">
          Logo Designed by Ilene Natividad
        </p>
      </div>
    </footer>
  );
}
