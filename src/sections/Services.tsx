import Service from "../component/Service";
import { styles } from "../styles";
import { BsCodeSlash, BsSearch, BsCheckCircle } from "react-icons/bs";
import { SiMaterialdesignicons } from "react-icons/si";
import { BiMobile } from "react-icons/bi";

type Props = {};
function Services({}: Props) {
  return (
    <section id="services" className={`${styles.sectionWrapper} `}>
      <div className={`${styles.section} ${styles.paddingX}`}>
        <div className="mb-6">
          <h2 className={`${styles.heading2}`}>What do I help?</h2>
          <p className={`${styles.paragraph} my-8`}>
            I will help you with finding a solution and solve your problems. We
            use proccess design to create digital products. besides that i also
            help their business
          </p>
        </div>

        <div className="grid grid-cols-2 grid-rows-2 gap-10">
          <Service
            title="Web development"
            description="Building, creating, and maintaining websites. It includes
            aspects such as web design, web publishing."
            icon={
              <div className="rounded-full bg-[#FDAD57]/[.65] p-3">
                <BsCodeSlash size={30} className="text-white" />
              </div>
            }
          />
          <Service
            title="Mobile App Development"
            description="Designing and building mobile applications on iOS and Android using hybrid platform technology."
            icon={
              <div className="rounded-full bg-[#68CA95]/[.65] p-3">
                <BiMobile size={30} className="text-white" />
              </div>
            }
          />
          <Service
            title="UI/UX Design"
            description="Creating intuitive, aesthetically-pleasing, interactive interfaces for landing pages, websites, and mobile applications."
            icon={
              <div className="rounded-full bg-[#312E81]/[.65] p-3">
                <SiMaterialdesignicons size={30} className="text-white" />
              </div>
            }
          />
          <Service
            title="Brand Identity"
            description="Produce designs across various formats, platforms, and social media, distinguishing the brand in consumers' minds."
            icon={
              <div className="rounded-full bg-[#FF5F5F]/[.65] p-3">
                <BsCheckCircle size={30} className="text-white" />
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
}
export default Services;
