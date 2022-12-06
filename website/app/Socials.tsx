import Link from "next/link";
import { TbBrandLinkedin, TbBrandGithub } from "react-icons/tb";

export default function Socials() {
  return (
    <div className="fixed bottom-0 left-16 hidden lg:block">
      <ul className="flex flex-col gap-4 after:mx-auto after:block after:h-20 after:w-0.5 after:bg-slate-100">
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
    </div>
  );
}
