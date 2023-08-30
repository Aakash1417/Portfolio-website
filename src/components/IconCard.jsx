import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { CircularProgressbar } from "react-circular-progressbar";
import VisibilitySensor from "react-visibility-sensor";

const IconCard = ({ index, name, icon, fill }) => {
  const gradientTransform = `rotate(90)`;
  const gradientId = `progress-${index}`;

  return (
    <Tilt className="xs:w-[175px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.1, 0.75)}
        className="w-full gold-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-7 px-7 h-[175px] flex justify-evenly items-center flex-col"
        >
          <svg style={{ height: 0, width: 0 }}>
            <defs>
              <linearGradient
                id={gradientId}
                gradientTransform={gradientTransform}
              >
                <stop offset="0%" stopColor="#57370D" />
                <stop offset="100%" stopColor="#FFE998" />
              </linearGradient>
            </defs>
          </svg>

          <VisibilitySensor>
            {({ isVisible }) => {
              const percentage = isVisible ? fill : 0;
              return (
                <CircularProgressbar
                  value={percentage}
                  strokeWidth={13}
                  gradientId={gradientId}
                  styles={{
                    root: {},
                    path: {
                      // Path color #00cea8 1.9%, #bf61ff
                      stroke: `url(#${gradientId})`,
                      opacity: 0.25 + fill / 100,
                      strokeLinecap: "butt",
                      transition: "stroke-dashoffset 2.5s ease 0s",
                      transform: "rotate(0.25turn)",
                      transformOrigin: "center center",
                    },
                    trail: {
                      // Trail color
                      stroke: "#434343",
                      opacity: 0.8,
                      strokeLinecap: "butt",
                      transform: "rotate(0.25turn)",
                      transformOrigin: "center center",
                    },
                  }}
                />
              );
            }}
          </VisibilitySensor>

          <img src={icon} alt="icon" className="absolute object-contain h-14" />
        </div>
      </motion.div>
    </Tilt>
  );
};

export default IconCard;
