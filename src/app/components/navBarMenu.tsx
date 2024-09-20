import NavComponent from "./navLinkComponent";

// @ts-expect-error typeMenuNav
const NavBarMenu = ({ menuNav }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {menuNav.map((menu, index: number) => (
        <li key={index}>
          <NavComponent title={menu.title} link={menu.link} />
        </li>
      ))}
    </ul>
  );
};
export default NavBarMenu;
