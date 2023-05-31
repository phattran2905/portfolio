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
        <div className="grid w-full grid-cols-8 justify-center gap-x-10  gap-y-12 whitespace-break-spaces px-8 py-10 md:grid-cols-6 md:gap-x-32 md:gap-y-20 md:px-0">
          {data.skills.map((skill) => (
            <SkillBox key={skill.name} name={skill.name} logo={skill.logo} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Skills;
