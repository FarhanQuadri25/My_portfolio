"use client";

import { motion } from "motion/react";
import styles from "./About.module.scss";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="section new-container">
      <div className={`${styles.about_heading} flex items-center gap-3 `}>
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.7, type: "tween" }}
          viewport={{ once: true, amount: 0.7 }}
          className="text-3xl font-poppins text-[#cecece] flex-grow-0 font-bold"
        >
          About Me
        </motion.h3>
        <motion.hr
          initial={{ opacity: 0, x: 15 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
          viewport={{ once: true, amount: 0.7 }}
          className={`${styles.headingHr}`}
        />
      </div>
      <div className={`${styles.about_content} flex gap-8 p-4 `}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8, type: "tween" }}
          viewport={{ once: true, amount: 0.7 }}
          className={`${styles.paraContainer}`}
        >
          <p className="text-[#cecece] font-poppins text-justify">
            Hello there! I&apos;m Syed Qader Pasha Quadri and I&apos;m a Full
            Stack Developer. I&apos;ve been working in the field of web
            development for the past 2 years. I&apos;ve worked on various
            projects and have experience in developing web applications using
            React, Node.js, Express.js, and MongoDB. I&apos;m passionate about
            coding and love to learn new technologies. I&apos;m always looking
            for new opportunities to work on challenging projects and expand my
            knowledge.
          </p>
          <br />

          <p className="text-[#cecece] text-lg  font-poppins">
            I&apos;ve been upto date with the latest technologies and have
            experience in working with various libraries and frameworks
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7, type: "tween" }}
          viewport={{ once: true, amount: 0.7 }}
        >
          <Image
            src="/img/computer-portfolio.jpg"
            alt="portfolio-photo"
            width={1200}
            height={800}
            layout="responsive"
            className="rounded-3xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
