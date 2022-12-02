"use client";

import Image from "next/image";
import LogoLarge from "../public/logo-big.png";
import LogoSmall from "../public/logo-small.png";

export default function Logo() {
  return <Image src={LogoSmall} alt="logo-mobile" className="h-10 w-[80px]" />;
}
