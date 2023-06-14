import { BsBriefcaseFill } from "react-icons/bs";
import TwoColsTimeline from "../component/TwoColsTimeline";
import data from "../constants/data";
import { styles } from "../styles";

type Props = {};
function WorkExperience({}: Props) {
  return (
    <section id="work-experience" className={`${styles.sectionWrapper}`}>
      <div className={`${styles.section} ${styles.paddingX}`}>
        <div className="mb-4">
          <h2 className={`${styles.heading2}`}>Work Experience</h2>
          {/* <p className={`${styles.paragraph} my-6`}>
            Passionate to craft amazing digital product. I can provide your
            business a new creative start right away!
          </p> */}
        </div>

        <div className="flex flex-col py-10">
          {data.workExperience.map((experience, index) => (
            <TwoColsTimeline
              key={index}
              colorName="primary"
              col1={{
                title: experience.company,
                timeline: experience.timeline,
                timelineLength: experience?.timelineLength,
              }}
              col2={{
                title: experience.position,
                description: experience.description,
                subtitle: experience.subtitle,
              }}
              icon={<BsBriefcaseFill size={26} className="text-blue-500" />}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
export default WorkExperience;
