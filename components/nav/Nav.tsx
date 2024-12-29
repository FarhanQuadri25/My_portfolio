"use client";

import GitHub from "@/svg/GitHub";
import Link from "next/link";
import { motion } from "motion/react";



const Nav = () => {
  return (
    <header className="new-container">
      <nav className="flex justify-between items-center py-4 px-8 ">
        <Link href={"/"}>
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              type: "tween",
            }}
            className={`font-poppins font-bold text-white text-3xl`}
          >
            Syed_Qader
          </motion.p>
        </Link>
        <motion.ul
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            type: "tween",
          }}
        >
          <li>
            <a
              target="_blank"
              href="https://github.com/FarhanQuadri25"
              className="text-white hover:text-gray-400 transition-colors duration-300"
            >
              <GitHub />
            </a>
          </li>
        </motion.ul>
      </nav>
    </header>
  );
};

export default Nav;
