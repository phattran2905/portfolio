type Props = {
  id: string;
  title: string;
  activeRoute: string;
  setActiveRoute: (route: string) => void;
};

function NavLink({ id, title, activeRoute, setActiveRoute }: Props) {
  const activeStyle = "font-semibold underline text-yellow";
  const inactiveStyle =
    "font-normal no-underline text-white hover:text-yellow hover:underline";

  return (
    <li onClick={() => setActiveRoute(id)}>
      <a
        href={`#${id}`}
        className={`block p-3 text-center text-[16px] ${
          activeRoute === id ? activeStyle : inactiveStyle
        } `}
      >
        {title}
      </a>
    </li>
  );
}
export default NavLink;
