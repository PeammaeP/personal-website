import Link from "next/link";

// @ts-expect-error : type can be "any"
const NavComponent = ({ title, link }) => {
  {
    /* Add the padding to make the button more space */
  }
  return (
    <Link
      href={link}
      className="block py-3 pl-4 pr-4 text-slate-100  font-light sm:text-xl rounded font-mono hover:bg-[#191919]"
    >
      {title}
    </Link>
  );
};

export default NavComponent;
