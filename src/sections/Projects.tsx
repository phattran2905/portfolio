import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useRef } from "react";
import { styles } from "../styles";
import ProjectCard from "../component/ProjectCard";
import data from "../constants/data";

type Props = {};
function Projects({}: Props) {
  const scrollRef = useRef(null);

  const scroll = (direction: string) => {
    const { current } = scrollRef;

    if (direction === "left") {
      (current as any).scrollLeft -= 340;
    } else {
      (current as any).scrollLeft += 340;
    }
  };

  return (
    <section id="projects" className={`${styles.sectionWrapper} bg-blue-50`}>
      <h2 className={`${styles.heading2} my-10 text-left`}>Projects</h2>

      <div className="flex w-full flex-row items-center justify-between gap-x-4  px-6">
        <button
          type="button"
          onClick={() => scroll("left")}
          className="hidden hover:text-tertiary md:block"
        >
          <BsFillArrowLeftCircleFill size={30} />
        </button>
        <div
          ref={scrollRef}
          className="flex w-full gap-y-10 overflow-auto py-10 md:flex-row md:gap-x-10 md:gap-y-1"
        >
          {data.projects.map((project, index) => (
            <ProjectCard
              key={index}
              name={project.name}
              description={project.description}
              imageSrc={project.imgSrc}
              techStackImages={project.techStackImages}
              demoUrl={project.demoUrl}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => scroll("right")}
          className="hidden hover:text-tertiary md:block"
        >
          <BsFillArrowRightCircleFill size={30} />
        </button>
      </div>
    </section>
  );
}
export default Projects;
