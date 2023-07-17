import { Tilt } from "react-tilt";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import SocialIcon from "../component/SocialIcon";
import data from "../constants/data";
import images from "../constants/images";
import { styles } from "../styles";

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

type Props = {};
function Header({}: Props) {
  return (
    <header className={`${styles.sectionWrapper} bg-extra-light-gray`}>
      <div
        className={`flex flex-col items-center justify-between md:flex-row ${styles.paddingX} ${styles.paddingY}`}
      >
        <div className="flex basis-6/12 flex-col items-start justify-between gap-y-10 md:gap-y-16 md:pl-16">
          <div className="">
            <h1 className="text-[32px] font-semibold text-black">
              Hi! I'm <span className="text-red">Phat Tran</span>
              <br />
              <span className="mb-10 mt-6 inline-block text-[64px] font-bold leading-[76px] text-primary">
                {data.about.occupation}
              </span>
            </h1>

            <p className="mb-10 text-[20px] font-normal leading-[36px] text-tertiary">
              {data.about.biography}
            </p>

            <div className="flex flex-row">
              <a
                href="#contact"
                className="cursor-pointer rounded-[8px] bg-primary px-10 py-4 text-[16px] font-semibold leading-[24px] text-white duration-200 ease-in-out hover:underline hover:shadow-md hover:shadow-primary"
              >
                Hire me
              </a>
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1fabSb5_4VML33tM1fOb3cudzhhpmwwh5/view?usp=sharing"
                className="ml-6 cursor-pointer rounded-[8px] bg-gray px-10 py-4 text-[16px] font-semibold leading-[24px] text-black duration-200 ease-in hover:underline hover:shadow-md hover:shadow-primary"
              >
                View Resume
              </a>
            </div>
          </div>

          <div className="flex w-full flex-col">
            <ul className="flex list-none flex-row items-center justify-start gap-x-4">
              <li>
                <SocialIcon href={data.info.LinkedIn}>
                  <BsLinkedin size={30} />
                </SocialIcon>
              </li>
              <li>
                <SocialIcon href={data.info.GitHub}>
                  <BsGithub size={30} />
                </SocialIcon>
              </li>
            </ul>
          </div>
        </div>

        <Tilt options={defaultOptions} style={{ height: 540 }}>
          <div className="h-[540px] w-full basis-6/12">
            <img
              src={images.laptop3d}
              alt="learning web dev"
              className="h-[100%] w-[100%] object-fill"
            />
          </div>
        </Tilt>
      </div>
    </header>
  );
}
export default Header;
