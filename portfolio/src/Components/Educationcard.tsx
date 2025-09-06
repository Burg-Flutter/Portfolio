"use client";

import React from "react";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Card,
  CardContent,
} from "@mui/material";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import zealImg from "../../public/zeal.jpeg";
import poonawalaImg from "../../public/poonawala.jpg";
import schoolBoyAnimation from "../../public/lottie/Back to School.json";
import Image from "next/image";

const educationData = [
  {
    institute: "Zeal College of Engineering",
    degree: "B.Tech in Computer Engineering",
    duration: "2021 - 2025 | Completed",
    logo: zealImg,
  },
  {
    institute: "Dr. Cyrus Poonawala International School",
    degree: "HSC",
    duration: "2019 - 2021 | Completed",
    logo: poonawalaImg,
  },
];

const EducationCard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        backgroundColor: "transparent",
        minHeight: "100vh",
        // py: 10,
        px: 3,
        // marginTop:'-50px',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h4"
        fontWeight={700}
        color="white"
        mb={6}
        textAlign="center"
      >
        Education
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 6,
          width: "100%",
          maxWidth: 1000,
        }}
      >
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
          >
            <Card
              elevation={6}
              sx={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                alignItems: "center",
                position: "relative",
                overflow: "hidden",
                backgroundColor: "#ffffff",
                borderRadius: 4,
                minHeight: isMobile ? 200 : 160,
                p: isMobile ? 2 : 3,
              }}
            >
              {/* Logo */}
              <Box
                sx={{
                  width: isMobile ? "100%" : 160,
                  height: isMobile ? 140 : 140,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  p: 2,
                }}
              >
                <Image
                  src={edu.logo}
                  alt={edu.institute}
                  width={170}
                  height={140}
                  style={{
                    objectFit: "cover",
                    borderRadius: 12,
                  }}
                />
              </Box>

              {/* Content */}
              <CardContent sx={{ flex: 1, pl: isMobile ? 0 : 3 }}>
                <Typography variant="h6" fontWeight={700} color="primary">
                  {edu.institute}
                </Typography>
                <Typography variant="subtitle1" fontWeight={600} mt={1}>
                  {edu.degree}
                </Typography>
                <Typography variant="body2" mt={0.5}>
                  {edu.duration}
                </Typography>
              </CardContent>

              {/* Lottie Animation */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: -15,
                  right: -15,
                  width: 120,
                  height: 120,
                  opacity: 0.85,
                }}
              >
                <Lottie animationData={schoolBoyAnimation} loop />
              </Box>
            </Card>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default EducationCard;
