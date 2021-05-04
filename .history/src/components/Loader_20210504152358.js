import React from "react";
import { motion } from "framer-motion";

const containerStyle = {
    width:"100%",
    
  position: "relative",
 
  height: "3rem",
  boxSizing: "border-box",
};

const circleStyle = {
  display: "block",
  width: "10rem",
  height: "10rem",
  border: ".2rem solid #e9e9e9",
  borderTop: "0.2rem solid #3498db",
  borderRadius: "50%",
  position: "absolute",
  boxSizing: "border-box",
  top: "50%",
  left: "50%"
};

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