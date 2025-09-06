"use client";

import React, { useEffect, useRef } from "react";
import { Box, Typography, IconButton, Tooltip } from "@mui/material";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dynamic from "next/dynamic";
import heroImg from "../../public/hero.jpg"; // Ensure the image exists at this path
import { useMediaQuery } from "@mui/material";

// MUI Icons
import { GitHub, LinkedIn, Instagram, Email } from "@mui/icons-material";

gsap.registerPlugin(ScrollTrigger);

// Lazy load TypeAnimation
const TypeAnimation = dynamic(
  () => import("react-type-animation").then((mod) => mod.TypeAnimation),
  { ssr: false }
);

const skills = [
  "Flutter_Developer",
  "React_Developer",
  "Node.js_Developer",
  "Java_Developer",
  "Next.js_Developer",
];

const Landing: React.FC = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const isMobile = useMediaQuery("(max-width:1023px)");

  useEffect(() => {
    gsap.from(textRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
      },
    });

    gsap.from(imageRef.current, {
      x: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 90%",
      },
    });
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        // marginTop: "-20px",
        py: 6,
        px: 4,
        position: "relative",
        minHeight: "100vh",
        background: "transparent",
        color: "white",
      }}
    >
      {/* Text Section */}
      <Box ref={textRef} sx={{ flex: 1, zIndex: 2, px: 4, py: 6 }}>
        <Typography variant="h3" fontWeight={700} gutterBottom>
          Hey, I&apos;m Harshal 👋
        </Typography>

        <Typography variant="h4" fontWeight={400} mb={2}>
          I am
        </Typography>

        <Typography
          variant="h4"
          fontWeight={700}
          sx={{
            fontFamily: "monospace",
            whiteSpace: "pre",
            color: "#00E0FF",
          }}
        >
          <TypeAnimation
            sequence={skills.flatMap((s) => [s, 4000, "", 500])}
            speed={50}
            deletionSpeed={30}
            wrapper="span"
            repeat={Infinity}
          />
        </Typography>

        {/* Social Links */}
        <Box
          sx={{
            mt: 3,
            display: "flex",
            gap: 2,
          }}
        >
          {/* Instagram */}
          <Tooltip title="_harshal_15" arrow placement="bottom">
            <IconButton
              component="a"
              // href="https://instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "white",
                transition: "all 0.3s ease",
                "&:hover": { color: "#E1306C", transform: "scale(1.2)" },
              }}
            >
              <Instagram fontSize="large" />
            </IconButton>
          </Tooltip>

          {/* LinkedIn */}
          <IconButton
            component="a"
            href="https://www.linkedin.com/in/harshal-wadne-36169522b/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "white",
              transition: "all 0.3s ease",
              "&:hover": { color: "#0A66C2", transform: "scale(1.2)" },
            }}
          >
            <LinkedIn fontSize="large" />
          </IconButton>

          {/* GitHub */}
          <IconButton
            component="a"
            href="https://github.com/Burg-Flutter"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "white",
              transition: "all 0.3s ease",
              "&:hover": { transform: "scale(1.2)" },
            }}
          >
            <GitHub fontSize="large" />
          </IconButton>
        </Box>
      </Box>

      {/* Hero Image */}
      <Box
        ref={imageRef}
        sx={{
          flex: 1,
          mt: { xs: 6, md: 0 },
          textAlign: "center",
          transition: "transform 0.4s ease",
          zIndex: 2,
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "400px",
            height: "400px",
            margin: "auto",
          }}
        >
          <Box
            className="glow-border"
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              border: "3px solid #00E0FF",
              boxShadow: "0 0 20px rgba(0, 224, 255, 0.6)",
              animation: "glowRotate 6s linear infinite",
              zIndex: 1,
            }}
          />
          <Box
            className="image-wrapper"
            sx={{
              position: "absolute",
              top: "8px",
              left: "8px",
              width: "384px",
              height: "384px",
              borderRadius: "50%",
              overflow: "hidden",
              zIndex: 2,
              "& img": {
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                objectFit: "cover",
                transform: "scale(1.1)",
                filter: isMobile ? "grayscale(0%)" : "grayscale(100%)",
                transition: "filter 0.3s ease",
              },
              "&:hover img": {
                filter: "grayscale(0%)",
              },
            }}
          >
            <Image
              src={heroImg}
              alt="Harshal Hero"
              width={384}
              height={384}
              priority
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Landing;
