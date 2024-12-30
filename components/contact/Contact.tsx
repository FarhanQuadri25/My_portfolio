import { ArrowSide } from "@/svg/ArrowSide";
import styles from "./Contact.module.scss";
import React from "react";

type LinkProps = {
  href: string;
  name: string;
};
const Links: React.FC<LinkProps> = ({ href, name }) => {
  return (
    <div className="font-poppins font-bold text-3xl ml-6">
      <a className="hrefs" href={href} target="_blank" rel="noreferrer">
        <span>{name}</span> <ArrowSide />
      </a>
    </div>
  );
};

const Contact = () => {
  return (
    <section
      className={`${`new-container section flex flex-col  items-center justify-center gap-5 pb-8`} ${
        styles.contact
      }`}
    >
      <h2 className="text-5xl text-center font-bold font-poppins text-[#cecece]">
        Contact Me
      </h2>
      <div className={` flex justify-center flex-wrap  `}>
        <Links href="https://github.com/FarhanQuadri25" name="GitHub" />
        <Links
          href="https://www.linkedin.com/in/syed-qader-pasha-quadri/"
          name="LinkedIn"
        />

        <Links href="mailto:zealfarhan@gmail.com" name="Email" />
      </div>
    </section>
  );
};

export default Contact;
