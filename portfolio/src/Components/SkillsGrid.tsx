"use client";

import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  LinearProgress,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  SiReact,
  SiRedux,
  SiFirebase,
  SiFlutter,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPython,
  SiGit,
  SiGithub,
  SiDigitalocean,
  SiNextdotjs,
  SiMysql,
  SiFigma,
  SiExpress,
  SiNodedotjs,
  SiMui,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const initialSkills = [
  { name: "React", icon: <SiReact />, rating: 90 },
  { name: "Redux", icon: <SiRedux />, rating: 85 },
  { name: "Firebase", icon: <SiFirebase />, rating: 75 },
  { name: "Flutter", icon: <SiFlutter />, rating: 80 },
  { name: "Material UI", icon: <SiMui />, rating: 70 },
  { name: "HTML", icon: <SiHtml5 />, rating: 95 },
  { name: "CSS", icon: <SiCss3 />, rating: 90 },
  { name: "JavaScript", icon: <SiJavascript />, rating: 88 },
  { name: "Python", icon: <SiPython />, rating: 60 },
  { name: "Java", icon: <FaJava />, rating: 55 },
  { name: "Git", icon: <SiGit />, rating: 80 },
  { name: "GitHub", icon: <SiGithub />, rating: 85 },
  { name: "DigitalOcean", icon: <SiDigitalocean />, rating: 50 },
  { name: "Next.js", icon: <SiNextdotjs />, rating: 78 },
  { name: "MySQL", icon: <SiMysql />, rating: 65 },
  { name: "Figma", icon: <SiFigma />, rating: 70 },
  { name: "Node.js", icon: <SiNodedotjs />, rating: 85 },
  { name: "Express", icon: <SiExpress />, rating: 75 },
];

const SkillsGrid = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const [skills, setSkills] = useState(initialSkills);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const i = Math.floor(Math.random() * skills.length);
      let j = Math.floor(Math.random() * skills.length);
      while (i === j) j = Math.floor(Math.random() * skills.length);
      setSkills((prev) => {
        const newSkills = [...prev];
        [newSkills[i], newSkills[j]] = [newSkills[j], newSkills[i]];
        return newSkills;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [skills.length]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: { xs: "20px", md: "40px" },
        backgroundColor: "transparent",
        minHeight: "100vh",
        pt: 6,
      }}
    >
      <Typography
        variant={isMobile ? "h5" : "h4"}
        fontWeight={600}
        color="white"
        mb={4}
        textAlign="center"
      >
        Skills
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(3, 1fr)", // small screens → 2 cols
            sm: "repeat(3, 1fr)", // tablets → 3 cols
            md: "repeat(4, 1fr)", // medium → 4 cols
            lg: "repeat(6, 1fr)", // large → 6 cols
          },
          gap: { xs: 1.5, sm: 2, md: 3 },
          px: { xs: 1, sm: 2, md: 4 },
        }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            layout
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Box
              sx={{
                width: { xs: 90, sm: 110, md: 120 }, // responsive size
                height: { xs: 90, sm: 110, md: 120 },
                borderRadius: "10px",
                backgroundColor: "#f5f5f5",
                margin: "auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: 3,
                cursor: "pointer",
                "&:hover": {
                  boxShadow: 6,
                },
                p: { xs: 1, sm: 1.5 },
                textAlign: "center",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  fontSize: { xs: 28, sm: 32, md: 36 }, // scale icon size
                  mb: 1,
                  color: "#333",
                }}
              >
                {skill.icon}
              </Box>
              <Typography
                variant="body2"
                fontWeight={600}
                color="black"
                fontSize={{ xs: "0.7rem", sm: "0.8rem", md: "0.85rem" }}
              >
                {skill.name}
              </Typography>
              <LinearProgress
                variant="determinate"
                value={skill.rating}
                sx={{
                  mt: 1,
                  height: { xs: 4, md: 6 },
                  borderRadius: 5,
                  width: "80%",
                  backgroundColor: "#ddd",
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: theme.palette.primary.main,
                  },
                }}
              />
              {hoveredIndex === index && (
                <Typography
                  variant="caption"
                  sx={{
                    position: "absolute",
                    bottom: 6,
                    right: 6,
                    fontWeight: 600,
                    fontSize: { xs: "10px", sm: "12px" },
                    color: theme.palette.primary.main,
                    background: "#ffffffdd",
                    px: 0.6,
                    borderRadius: 1,
                  }}
                >
                  {skill.rating}%
                </Typography>
              )}
            </Box>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default SkillsGrid;
