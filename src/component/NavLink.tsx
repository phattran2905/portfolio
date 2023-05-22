type Props = {
  id: string;
  title: string;
  activeRoute: string;
  setActiveRoute: (route: string) => void;
};

function NavLink({ id, title, activeRoute, setActiveRoute }: Props) {
  const activeStyle = "font-semibold text-[16px] text-yellow underline";
  const inactiveStyle =
    "font-normal text-white no-underline hover:text-yellow hover:underline";

  return (
    <li
      className={`text-[16px] ${
        activeRoute === id ? activeStyle : inactiveStyle
      } `}
      onClick={() => setActiveRoute(id)}
    >
      <a href={`#${id}`} className="">
        {title}
      </a>
    </li>
  );
}
export default NavLink;
