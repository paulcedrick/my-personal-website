import "./globals.css";
import { Quicksand } from "@next/font/google";
import Header from "./Header";
import Socials from "./Socials";

const font = Quicksand({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={font.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-neutral-900">
        <Header />
        {children}
        <Socials />
      </body>
    </html>
  );
}
