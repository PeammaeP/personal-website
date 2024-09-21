import NavComponent from "./navLinkComponent";

interface MenuItem {
  title: string;
  link: string;
}

interface NavBarMenuProps {
  menuNav: MenuItem[];
}

const NavBarMenu = ({ menuNav }: NavBarMenuProps) => {
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
