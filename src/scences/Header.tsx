import SocialIcon from "../component/SocialIcon";
import data from "../constants/data";
import images from "../constants/images";
import { styles } from "../styles";
import { BsLinkedin, BsGithub } from "react-icons/bs";

type Props = {};
function Header({}: Props) {
  return (
    <header className={`${styles.sectionWrapper} bg-extra-light-gray`}>
      <div
        className={`${styles.section} flex flex-col items-center justify-between md:flex-row ${styles.paddingX}`}
      >
        <div className="flex basis-6/12 flex-col items-start justify-between gap-y-10 md:gap-y-16">
          <div className="">
            <h1 className="text-[32px] font-semibold text-black">
              Hi! I'm <span className="text-red">Phat Tran</span>
              <br />
              <span className="mb-10 mt-6 inline-block text-[64px] font-bold leading-[76px] text-primary">
                Web Developer
              </span>
            </h1>

            <p className="mb-10 text-[20px] font-normal leading-[36px] text-tertiary">
              I’m a UI/UX Designer, creating bold and brave Interface design for
              companies all across the world
            </p>

            <div className="flex flex-row">
              <a className="cursor-pointer rounded-[8px] bg-primary px-10 py-4 text-[16px] font-semibold leading-[24px] text-white duration-200 ease-in-out hover:underline hover:shadow-md hover:shadow-primary">
                Let's Talk
              </a>
              <a className="ml-6 cursor-pointer rounded-[8px] bg-gray px-10 py-4 text-[16px] font-normal leading-[24px] text-black duration-200 ease-in hover:underline hover:shadow-md hover:shadow-primary">
                Portfolio
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

        <div className="h-[540px] w-full basis-6/12">
          <img
            src={images.programming3dIllustrationTrans}
            alt="learning web dev"
            className="h-[100%] w-[100%] object-fill"
          />
        </div>
      </div>
    </header>
  );
}
export default Header;
