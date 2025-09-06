"use client";
import React, { useState } from "react";
import Lottie from "lottie-react";
import astronaut from "../../public/lottie/Astronaut and music.json";
import { motion, useScroll, useTransform } from "framer-motion";

const Astronaut: React.FC = () => {
  const { scrollYProgress } = useScroll(); // Scroll position (0 to 1)
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "80vh"]); // Translate scroll to top offset

  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      style={{
        position: "fixed",
        top: y,
        right: 20,
        width: 120,
        height: 120,
        zIndex: 100,
        pointerEvents: "auto", // Allow hover interaction
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      animate={{
        rotate: [0, 1, -1, 0],
        transition: { repeat: Infinity, duration: 4, ease: "easeInOut" },
      }}
    >
      {/* Hover message */}
      {isHovered && (
        <div
          style={{
            position: "absolute",
            // top: "-30px",
            right: "0",
            background: "rgba(255,255,255,0.9)",
            padding: "4px 8px",
            borderRadius: "8px",
            fontSize: "12px",
            color: "#000",
            boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
            whiteSpace: "nowrap",
          }}
        >
          Hi buddy 👋
        </div>
      )}

      <Lottie
        animationData={astronaut}
        loop={true}
        style={{ width: "100%", height: "100%" }}
      />
    </motion.div>
  );
};

export default Astronaut;
