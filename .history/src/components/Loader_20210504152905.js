import React from "react";
import { motion } from "framer-motion";

import './Loader.css'


const spinTransition = {
  loop: Infinity,
  ease: "linear",
  duration: 1
};

export default function Loader() {
  return (
    <div className="containerStyle">
      <motion.span
        className="circleStyle"
        animate={{ rotate: 360 }}
        transition={spinTransition}
      />
    </div>
  );
}