import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { github } from "../assets";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => (
  <motion.div variants={fadeIn("up", "spring", 0.5 * index, 0.75)}>
    <Tilt
      options={{ max: 45, scale: 1, speed: 450 }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
    >
      <div className="relative w-full h-[230px]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-e-2xl"
        />

        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            onClick={() => window.open(source_code_link, "_blank")}
          >
            <img src={github} alt="github" className="w-8 h-8 object-contain" />
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>

      <div className="mt-4 flex gap-3 flew-wrap">
        {
          tags.map(item => (
            <p key={item.name} className={`${item.color}`}>
              #{item.name}
            </p>
          ))
        }
      </div>
    </Tilt>
  </motion.div>
);

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Intoduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-17px leading-[30px] max-w-3xl"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil adipisci
        ad non similique dolor cum quam laborum eos repellat aut, dolore commodi
        facilis temporibus omnis sequi odit, quisquam iure optio dicta excepturi
        eius. Obcaecati, sunt? Nulla expedita nam, ad ipsam architecto a? Fuga
        at totam architecto officiis consectetur
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((proj, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...proj} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
