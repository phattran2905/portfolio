import { BsPersonWorkspace } from "react-icons/bs";
import { styles } from "../styles";

type Props = {};
function WorkExperience({}: Props) {
  return (
    <section id="work-experience" className={`${styles.sectionWrapper}`}>
      <div className={`${styles.section} ${styles.paddingX}`}>
        <div className="mb-4">
          <h2 className={`${styles.heading2}`}>My Work Experience</h2>
          <p className={`${styles.paragraph} my-6`}>
            Passionate to craft amazing digital product. I can provide your
            business a new creative start right away!
          </p>
        </div>

        <div className="flex flex-col py-10">
          <div className="flex flex-row">
            <div className="flex basis-4/12 flex-col py-6">
              <h5 className={`${styles.heading5}`}>Global Solution</h5>
              <p className={`${styles.paragraph} my-2`}>
                March - September 2021
              </p>
            </div>

            <div className="flex basis-8/12 flex-row">
              <div className="relative h-full w-[10px] bg-gray">
                <div className="absolute -left-[11px] top-7 flex h-[26px] w-[26px] items-center justify-center rounded-full border-2 border-gray bg-white">
                  <div className="h-[10px] w-[10px] rounded-full bg-gray"></div>
                </div>
              </div>
              <div className="ml-6 px-4 py-6">
                <h5 className={`${styles.heading5}`}>Javascript Developer</h5>
                <p className={`${styles.paragraph} my-2`}>
                  A visual designer designs for a variety of platforms, which
                  may include internet and intranet sites, games, movies and
                  wearables in short, they create a concepts
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default WorkExperience;
