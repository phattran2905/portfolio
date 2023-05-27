import TwoColsTimeline from "../component/TwoColsTimeline";
import data from "../constants/data";
import { styles } from "../styles";

type Props = {};
function Education({}: Props) {
  return (
    <section id="work-experience" className={`${styles.sectionWrapper}`}>
      <div className={`${styles.section} ${styles.paddingX}`}>
        <div className="mb-4">
          <h2 className={`${styles.heading2}`}>Education</h2>
          <p className={`${styles.paragraph} my-6`}>
            Passionate to craft amazing digital product. I can provide your
            business a new creative start right away!
          </p>
        </div>

        <div className="flex flex-col py-10">
          {data.education.map((degree, index) => (
            <TwoColsTimeline
              key={index}
              colorName="primary"
              col1={{
                title: degree.school,
                description: degree.timeline,
              }}
              col2={{
                title: degree.degreeName,
                subtitle: degree.major,
                description: degree.gpa,
              }}
              icon={
                <img
                  src={degree.logo}
                  alt={degree.school}
                  className="h-[100%] w-[100%] rounded-full object-contain"
                />
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Education;
