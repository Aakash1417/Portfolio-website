import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { SectionWrapper } from "../sections";
import { slideIn, fadeIn } from "../utils/motion";
import { Resume } from "../components";
import { Link } from "react-router-dom";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm("", "", formRef.current, "").then(
      (result) => {
        setLoading(false);
        alert("Email sent successfully!");
        e.target.reset();
        console.log(result.text);
      },
      (error) => {
        setLoading(false);
        alert("There was an error, please refresh and try again!");
        console.error(error.text);
      }
    );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[1] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <motion.div variants={fadeIn("", "", 1, 1)}>
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                placeholder="What's your name?"
                className="bg-black-200 py-4 px-6 placeholder:text-white-100 text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your email</span>
              <input
                type="email"
                name="email"
                placeholder="What's your email address?"
                className="bg-black-200 py-4 px-6 placeholder:text-white-100 text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                name="message"
                placeholder="What you want to say?"
                className="bg-black-200 py-4 px-6 placeholder:text-white-100 text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <button
              type="submit"
              className="bg-black-200 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>
      </motion.div>

      <motion.div variants={fadeIn("", "", 1, 1)}>
        <Resume />
        <Link
          to="../assets/Resume.pdf"
          className=" min-[825px]:hidden bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary block mx-auto mt-12"
        >
          Download Resume
        </Link>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
