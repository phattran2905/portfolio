import { useState } from "react";
import NavLink from "../component/NavLink";
import data from "../constants/data";

type Props = {};
function Navbar({}: Props) {
  const [activeRoute, setActiveRoute] = useState<string>("home");

  return (
    <nav className="flex w-full flex-col items-center justify-center">
      <div className="flex w-5/6 flex-row items-center justify-between py-8 border-b-[1px] border-b-yellow">
        <a href="" className="font-Pacifico text-2xl font-bold text-white">
          Phat Tran
        </a>

        <ul className="flex list-none flex-row gap-x-8">
          {data.navLinks.map((navLink) => (
            <NavLink
              key={navLink.id}
              {...navLink}
              activeRoute={activeRoute}
              setActiveRoute={setActiveRoute}
            />
          ))}
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
