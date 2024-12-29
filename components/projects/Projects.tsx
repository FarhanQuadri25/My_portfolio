"use client";

import { motion } from "motion/react";
import { DATA_LIST } from "@/data/data";
import styles from "./Projects.module.scss";
import Link from "next/link";
import Image from "next/image";

interface ProjectProps {
  id: number;
  title: string;
  description: string;
  src: string;
  allImages?: {
    first: string;
    second: string;
    third: string;
    fourth: string;
  };
}

const Project = (props: ProjectProps) => {
  return (
    <Link href={`/project/${props.id}`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          delay: props.id ? 0.2 + props.id * 0.17 : 0.2,
          duration: 0.7,
          type: "tween",
        }}
        viewport={{ once: true, amount: 0.7 }}
        className={styles.project}
      >
        <Image
          width={300}
          height={300}
          layout="responsive"
          src={props.src}
          alt={props.title}
        />
        <div className={styles.hoverDetails}>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </div>
      </motion.div>
    </Link>
  );
};

const Projects = () => {
  const data = DATA_LIST;
  return (
    <section className="new-container p-4 section">
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
      <div className="flex flex-wrap mt-[1em] gap-14 items-center justify-center">
        {data.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
