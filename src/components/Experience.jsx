import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ exp }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={exp.date}
    iconStyle={{ background: exp.iconBg }}
    icon={
      <div className="w-full h-full flex items-center justify-center">
        <img
          src={exp.icon}
          alt={exp.title}
          className="w-[50px] h-[50px] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] text-bold">{exp.title}</h3>
      <p
        className="text-secondary text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        {exp.company_name}
      </p>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {exp.points.map((point, index) => (
          <li
            key={`experince-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </div>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Что я делал годного</p>
        <h2 className={styles.sectionHeadText}>Дельный опыт.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((exp, index) => (
            <ExperienceCard exp={exp} key={index} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
