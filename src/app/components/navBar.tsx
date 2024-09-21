"use client";

import Link from "next/link";
import { useState } from "react";
import NavComponent from "./navLinkComponent";
import NavBarMenu from "./navBarMenu";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const MyMenuNavLink = [
  { title: "About Me", link: "#about" },
  { title: "Projects", link: "#projects" },
  { title: "Contact", link: "#contact" },
];

const NavBar = () => {
  const [navBarOpen, setOpenNavBar] = useState(false);

  return (
    <nav className="fixed left-0 right-0 top-0 z-10 bg-[#121212] opacity-90">
      <div className="flex flex-wrap justify-between mx-auto px-4">
        <Link
          href={"/"}
          className="text-4xl font-semibold text-white px-6 py-6 font-mono"
        >
          Home
        </Link>
        <div className="block md:hidden translate-y-5">
          {!navBarOpen ? (
            <button
              onClick={() => setOpenNavBar(true)}
              className="flex items-center px-3 py-3 border rounded border-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="w-5 h-5" />
            </button>
          ) : (
            <button
              onClick={() => setOpenNavBar(false)}
              className="flex items-center px-3 py-3 border rounded border-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="w-5 h-5" />
            </button>
          )}
        </div>
        <div className="hidden md:block md:w-auto" id="navbar">
          <ul className="flex flex-row p-4 space-x-8 mt-0">
            {MyMenuNavLink.map((navBar, index) => (
              <li key={index}>
                <NavComponent title={navBar.title} link={navBar.link} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navBarOpen ? <NavBarMenu menuNav={MyMenuNavLink} /> : null}
    </nav>
  );
};

export default NavBar;
