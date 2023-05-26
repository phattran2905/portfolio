import { BsLinkedin, BsGithub } from "react-icons/bs";
import { styles } from "../styles";
import SocialIcon from "../component/SocialIcon";
import data from "../constants/data";

type Props = {};
function Footer({}: Props) {
  return (
    <footer className="flex w-full flex-col items-center justify-center">
      <div className="my-10 flex w-full flex-row items-center justify-between md:w-5/6">
        <p className="text-[16px] font-normal leading-[24px] text-tertiary">
          &copy; 2023 Phat Tran. All rights reserved.
        </p>
        <ul className="flex list-none flex-row items-center gap-x-4">
          <li>
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
