"use client";

import styles from "./Skill.module.scss";
import { TbBrandNextjs } from "react-icons/tb";
import { RiReactjsLine } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section className="new-container section">
      <div className={`${styles.skills_heading} flex items-center gap-3`}>
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.7, type: "tween" }}
          viewport={{ once: true, amount: 0.7 }}
          className="text-3xl font-poppins text-[#cecece] flex-grow-0 font-bold"
        >
          Skills I have
        </motion.h3>
        <motion.hr
          initial={{ opacity: 0, x: 15 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
          viewport={{ once: true, amount: 0.7 }}
          className={`${styles.headingHr}`}
        />
      </div>
      <div className="flex flex-wrap gap-4 justify-center items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, type: "tween" }}
            viewport={{ once: true, amount: 0.7 }}
            className={`border-2 border-neutral-800
            text-gray-500
                p-2 rounded-lg`}
          >
            <TbBrandNextjs size={60} />
          </motion.div>
        </div>
        <div>
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, type: "tween" }}
            viewport={{ once: true, amount: 0.7 }}
            className={`border-2 border-neutral-800 text-blue-500 p-2 rounded-lg`}
          >
            <RiReactjsLine size={60} />
          </motion.div>
        </div>
        <div>
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, type: "tween" }}
            viewport={{ once: true, amount: 0.7 }}
            className={`border-2 border-neutral-800 text-yellow-500 p-2 rounded-lg`}
          >
            <SiJavascript size={60} />
          </motion.div>
        </div>
        <div>
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, type: "tween" }}
            viewport={{ once: true, amount: 0.7 }}
            className={`border-2 border-neutral-800 text-blue-500 p-2 rounded-lg`}
          >
            <BiLogoPostgresql size={60} />
          </motion.div>
        </div>
        <div>
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, type: "tween" }}
            viewport={{ once: true, amount: 0.7 }}
            className={`border-2 border-neutral-800 text-green-400  p-2 rounded-lg`}
          >
            <SiExpress size={60} />
          </motion.div>
        </div>
        <div>
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, type: "tween" }}
            viewport={{ once: true, amount: 0.7 }}
            className={`border-2 border-neutral-800  text-green-500 p-2 rounded-lg`}
          >
            <SiMongodb size={60} />
          </motion.div>
        </div>
        <div>
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, type: "tween" }}
            viewport={{ once: true, amount: 0.7 }}
            className={`border-2 border-neutral-800 text-blue-500 p-2 rounded-lg`}
          >
            <RiTailwindCssFill size={60} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
