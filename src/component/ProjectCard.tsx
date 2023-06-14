import { FiExternalLink } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";

type Props = {
  name: string;
  imageSrc: string;
  description: string;
  demoUrl: string;
  githubUrl: string;
  techStackImages: Array<{ name: string; img: string }>;
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
    <div className="flex min-w-[380px] flex-col bg-extra-light-gray shadow-lg shadow-gray hover:shadow-primary ">
      <h6 className="w-full rounded-t-[10px] bg-primary py-4 text-center font-bold text-white">
        {name}
      </h6>
      <div className="w-full rounded-lg bg-slate-100">
        <img
          src={imageSrc}
          alt={name}
          className="h-[100%] w-[100%] object-contain"
        />
      </div>
      <div className="flex h-full w-full flex-col gap-y-4 border-t-2 border-t-primary px-5 py-4">
        <p
          className={`my-4 min-h-[70px] text-[16px] font-normal text-tertiary`}
        >
          {description}
        </p>

        <div className="flex flex-col gap-y-1">
          <span className="my-2 block text-[14px] font-semibold">
            Tech Stack
          </span>
          <ul className="flex w-full list-none flex-row flex-wrap gap-2">
            {techStackImages.map((tech, index) => (
              <li
                key={index}
                className="flex flex-row items-center rounded-md border-[1px] border-gray p-[1px] shadow-sm shadow-gray"
              >
                <div className="h-[24px] w-[24px]">
                  <img
                    src={tech.img}
                    alt={tech.name}
                    className="h-[100%] w-[100%] object-fill"
                  />
                </div>
                <span className="ml-1 block text-[11px] capitalize">
                  {tech.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col gap-y-4 px-5 py-4">
        <div className="flex w-full flex-row items-center justify-center gap-x-4">
          <a
            href={demoUrl}
            target="_blank"
            className="flex basis-1/2 flex-row items-center justify-center rounded-lg bg-primary px-4 py-2 font-semibold text-white transition duration-200 hover:bg-black"
          >
            <FiExternalLink size={16} className="mr-2" />
            Demo
          </a>
          <a
            href={githubUrl}
            target="_blank"
            className="flex basis-1/2 flex-row items-center justify-center rounded-lg bg-tertiary px-4 py-2 font-semibold text-white transition duration-200 hover:bg-black"
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
