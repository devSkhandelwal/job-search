import React from "react";
import { motion } from "framer-motion";

import './loader.css'


const spinTransition = {
  loop: Infinity,
  ease: "linear",
  duration: 1
};

export default function Loader() {
  return (
    <div style={containerStyle}>
      <motion.span
        style={circleStyle}
        animate={{ rotate: 360 }}
        transition={spinTransition}
      />
    </div>
  );
}