import Link from "next/link";
import NavComponent from "./navLinkComponent";

const MyMenuNavLink = [
  { title: "About Me", link: "#about" },
  { title: "Projects", link: "#project" },
  { title: "Contact", link: "#contact" },
];

const NavBar = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-10 bg-[#121212] opacity-90">
      <div className="flex flex-wrap justify-between mx-auto px-4">
        <Link
          href={"/"}
          className="text-4xl font-semibold text-white px-6 py-6 font-mono"
        >
          Home
        </Link>
        <div className="md:block md:w-auto" id="navbar">
          <ul className="flex flex-row p-4 space-x-8 mt-0">
            {MyMenuNavLink.map((navBar, index) => (
              <li>
                <NavComponent title={navBar.title} link={navBar.link} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
