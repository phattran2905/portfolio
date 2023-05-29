import SkillBox from "../component/SkillBox";
import data from "../constants/data";
import { styles } from "../styles";

type Props = {};
function Skills({}: Props) {
  return (
    <section
      id="skills"
      className={`${styles.sectionWrapper} bg-extra-light-gray`}
    >
      <div className={`${styles.section} flex flex-col items-center`}>
        <h2 className={`${styles.heading2} mb-12 capitalize `}>Tech stack</h2>
        <div className="grid w-full grid-cols-6 justify-center gap-y-20 whitespace-break-spaces py-10 md:gap-x-32">
          {data.skills.map((skill) => (
            <SkillBox key={skill.name} name={skill.name} logo={skill.logo} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Skills;
