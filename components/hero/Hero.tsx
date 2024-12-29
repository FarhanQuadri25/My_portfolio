"use client";

import styles from "./hero.module.scss";
import ArrowDown from "@/svg/ArrowDown";
import Link from "next/link";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <section className="hero new-container section">
      <div className={styles.hero__details}>
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            type: "tween",
          }}
          className={`font-poppins font-bold text-center text-[whitesmoke] ${styles.hero_name}`}
        >
          <span className={`${styles.hero_name_MainText}`}>Syed_Qader</span>{" "}
          <span className={`${styles.hero_name_OutlineText}`}>
            Full-Stack Developer
          </span>
        </motion.h3>
        <h4
          className={`text-center font-poppins  text-[#cecece] font-bold ${styles.hero__title}`}
        >
          Full-Stack Developer
        </h4>
        <p
          className={`text-xl font-poppins text-[whitesmoke] mt-[8rem] ${styles.hero__desc}`}
        >
          I am a full-stack developer with a passion for creating web
          applications. I specialize in JavaScript and have professional
          experience working with React, Node,Next js and Express. I am always
          looking for new opportunities to learn and grow as a developer.
        </p>
        <div className={styles.arrowDownDiv}>
          <Link href="#about">
            <ArrowDown />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
