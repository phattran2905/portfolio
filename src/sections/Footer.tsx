import { BsLinkedin, BsGithub } from "react-icons/bs";
import SocialIcon from "../component/SocialIcon";
import data from "../constants/data";
import { styles } from "../styles";

type Props = {};
function Footer({}: Props) {
  return (
    <footer className="flex w-full flex-col items-center justify-center bg-black">
      <div
        className={`my-4 flex w-full flex-row items-center justify-between md:my-6 md:w-5/6 ${styles.paddingX}`}
      >
        <p className="text-[16px] font-normal leading-[24px] text-gray">
          &copy; 2023 Phat Tran. All rights reserved.
        </p>
        <ul className="flex list-none flex-row items-center gap-x-4">
          <li className="text-gray">
            <SocialIcon href={data.info.LinkedIn}>
              <BsLinkedin size={24} />
            </SocialIcon>
          </li>
          <li>
            <SocialIcon href={data.info.GitHub}>
              <BsGithub size={24} />
            </SocialIcon>
          </li>
        </ul>
      </div>
    </footer>
  );
}
export default Footer;
