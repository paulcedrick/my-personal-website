import Link from "next/link";
import { TbBrandLinkedin, TbBrandGithub } from "react-icons/tb";

export default function Socials() {
  return (
    <div className="fixed bottom-0 left-16 hidden md:block">
      <ul className="after:block after:w-0.5 after:h-20 after:mx-auto after:bg-slate-100 flex flex-col gap-4">
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
    </div>
  );
}
