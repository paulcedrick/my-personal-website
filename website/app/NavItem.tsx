"use client";

import { ReactNode } from "react";

interface NavItemProps {
  children: ReactNode;
}
export default function NavItem({ children }: NavItemProps) {
  return (
    <li className="text-slate-100 font-bold hover:underline hover:decoration-indigo-300 hover:decoration-2 hover:underline-offset-8">
      {children}
    </li>
  );
}
