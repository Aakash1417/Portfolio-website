import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../sections";
import { fadeIn, slideIn } from "../utils/motion";

const About = () => {
  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className={`bg-black-100 p-8 rounded-2xl mt-12 max-w-lg ml-auto ${styles.paddingX} overflow-hidden`}
      >
        <p className={styles.sectionSubText}>Who am I?</p>
        <h2 className={styles.sectionHeadText}>Introduction</h2>

        <motion.p
          variants={fadeIn("", "", 1, 1)}
          className="mt-4 text-white-100 text-[17px] max-w-3xl leading-[30px]"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur et
          unde pariatur quam id exercitationem eveniet possimus? Minima tempora
          odio, maiores dolores modi aliquid cumque labore. Obcaecati adipisci,
          deleniti voluptas quibusdam nihil molestiae quis corporis expedita
          iste accusamus minus error ut enim porro laudantium sapiente amet ab!
          Veniam odit ab in, sit, esse ratione quibusdam, repellendus at
          explicabo suscipit cumque debitis accusamus iure ad voluptate eveniet
          molestiae vel inventore ex velit enim. Consequuntur aliquam totam
          incidunt id, vero ut modi quod possimus! Magnam saepe, facere
          veritatis doloribus accusamus sed iste ab culpa dignissimos aliquid,
          aut maxime dolorum vitae, praesentium beatae!
        </motion.p>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(About, "about");
