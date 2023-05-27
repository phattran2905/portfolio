import { useState } from "react";
import NavLink from "../component/NavLink";
import data from "../constants/data";
import useMediaQuery from "../hooks/useMediaQuery";
import { HiOutlineBars3CenterLeft, HiOutlineXMark } from "react-icons/hi2";
import { styles } from "../styles";

type Props = {};
function Navbar({}: Props) {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [toggled, setToggled] = useState(false);
  const [activeRoute, setActiveRoute] = useState<string>("home");

  return (
    <nav className={`${styles.sectionWrapper} bg-primary`}>
      <div className="flex w-full flex-col md:w-5/6">
        <div
          className={`flex flex-row items-center justify-between bg-primary ${styles.paddingX} ${styles.paddingY}`}
        >
          <a
            href=""
            className="cursor-pointer font-Pacifico text-[30px] font-bold capitalize text-yellow"
          >
            Phat Tran
          </a>

          {isAboveMediumScreens ? (
            <ul className="flex flex-row items-center">
              {data.navLinks.map((navLink) => (
                <NavLink
                  key={navLink.id}
                  {...navLink}
                  activeRoute={activeRoute}
                  setActiveRoute={setActiveRoute}
                />
              ))}
            </ul>
          ) : (
            <>
              <button type="button" onClick={() => setToggled(!toggled)}>
                {!toggled ? (
                  <HiOutlineBars3CenterLeft
                    size={36}
                    className="text-white hover:text-secondary"
                  />
                ) : (
                  <HiOutlineXMark
                    size={36}
                    className=" text-white hover:text-secondary"
                  />
                )}
              </button>

              <>
                {toggled && (
                  <div className="absolute right-1 top-20 z-[50] w-[300px] rounded-lg border-t-4 border-t-secondary bg-primary shadow-xl">
                    <ul className="flex flex-col items-center p-4">
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
                )}
              </>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
