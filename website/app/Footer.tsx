import { TbBrandGithub, TbBrandLinkedin } from "react-icons/tb";

export default function Footer() {
  return (
    <footer className="min-h-20 flex flex-col items-center justify-center gap-4 py-6">
      <ul className="flex flex-row gap-4">
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
            href="https://github.com/paulcedrick"
            rel="noreferrer"
          >
            <TbBrandLinkedin size="32" className="hover:text-indigo-300" />
          </a>
        </li>
      </ul>
      <div className="text-center">
        <p className="text-xs text-slate-300 font-semibold mb-1">
          Designed & Built by Paul Cedrick Artigo
        </p>
        <p className="text-xs text-slate-300 font-semibold">
          Logo Designed by Ilene Natividad
        </p>
      </div>
    </footer>
  );
}
