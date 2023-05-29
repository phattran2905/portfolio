import { FiExternalLink } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";
import images from "../constants/images";

type Props = {
  name: string;
  imageSrc: string;
  description: string;
  demoUrl: string;
  githubUrl: string;
  techStackImages: string[];
};
function ProjectCard({
  name,
  imageSrc,
  demoUrl,
  description,
  githubUrl,
  techStackImages,
}: Props) {
  return (
    <div className="basis-1/3 bg-extra-light-gray shadow-md shadow-gray hover:shadow-primary">
      <h6 className="w-full rounded-t-[10px] bg-primary py-4 text-center font-bold text-white">
        {name}
      </h6>
      <div className="h-[300px] w-full rounded-lg">
        <img
          src={imageSrc}
          alt=""
          className="h-[100%] w-[100%] object-contain"
        />
      </div>
      <div className="flex w-full flex-col gap-y-4 border-t-2 border-t-primary px-5 py-4">
        <p className={`text-[16px] font-normal text-tertiary`}>{description}</p>
        <div className="flex flex-row gap-x-5">
          <b className="block basis-1/3">Tech Stack:</b>
          <ul className="flex basis-2/3 list-none flex-row flex-wrap gap-2">
            {techStackImages.map((tech, index) => (
              <li
                key={index}
                className="h-[32px] w-[32px] rounded-lg border-[1px] border-gray p-[1px] shadow-sm shadow-gray"
              >
                <img
                  src={tech}
                  alt={tech}
                  className="h-[100%] w-[100%] object-fill"
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-3 flex w-full flex-row items-center justify-center gap-x-4">
          <a
            href={demoUrl}
            target="_blank"
            className="flex basis-1/2 flex-row items-center justify-center rounded-lg bg-primary px-4 py-2 font-semibold text-white transition duration-200 hover:bg-secondary"
          >
            <FiExternalLink size={16} className="mr-2" />
            Demo
          </a>
          <a
            href={githubUrl}
            target="_blank"
            className="flex basis-1/2 flex-row items-center justify-center rounded-lg bg-tertiary px-4 py-2 font-semibold text-white transition duration-200 hover:bg-secondary"
          >
            <BsGithub size={16} className="mr-2" />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
export default ProjectCard;
