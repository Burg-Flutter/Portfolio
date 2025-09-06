"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import Grid from "@mui/material/Grid";
import LaunchIcon from "@mui/icons-material/Launch";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const projects = [
  {
    title: "SafeSteps",
    description:
      "A comprehensive women’s safety app with live tracking, SOS alerts, and privacy-focused features.",
    // links: {
    //   github: "https://github.com/yourusername/safesteps",
    //   live: "https://safesteps.example.com",
    // },
  },
  {
    title: "Collabeat",
    description:
      "A collaborative Flutter app enabling music creators to jam, share, and build tracks in real-time.The application is Live on Playstore",
    // links: {
    //   github: "https://github.com/yourusername/collabeat",
    //   live: "https://collabeat.example.com",
    // },
  }
];

const MotionCard = motion(Card);

const Projects: React.FC = () => {
  const isMobile = useMediaQuery("(max-width:1023px)");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const handleMenuOpen = (
    event: React.MouseEvent<HTMLButtonElement>,
    project: any
  ) => {
    setAnchorEl(event.currentTarget);
    setSelectedProject(project);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedProject(null);
  };

  return (
    <Box
      sx={{
        px: { xs: 2, md: 6 },
        py: 8,
        background: "transparent",
        color: "white",
      }}
    >
      <Typography
        variant="h4"
        fontWeight={700}
        textAlign="center"
        mb={6}
        sx={{ color: "#00E0FF" }}
      >
        My Projects
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <MotionCard
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 8px 25px rgba(0,224,255,0.3)",
              }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              sx={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "16px",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "white",
                height: "100%",
                // width:'300px',
                cursor: "pointer",
                backdropFilter: "blur(8px)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  fontWeight={700}
                  gutterBottom
                  sx={{ color: "#00E0FF" }}
                >
                  {project.title}
                </Typography>
                <Typography variant="body2" color="white" sx={{ mb: 2 }}>
                  {project.description}
                </Typography>

                {/* Desktop: show links on hover */}
                {/* Desktop: show links on hover */}
                {/* {!isMobile && (
                  <Box
                    sx={{
                      opacity: 0,
                      transition: "opacity 0.3s",
                      position: "absolute",
                      top: 8,
                      right: 8,
                      display: "flex",
                      gap: 1,
                      "&:hover": { opacity: 1 },
                    }}
                  >
                    <IconButton
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ color: "#00E0FF" }}
                    >
                      <LaunchIcon />
                    </IconButton>
                    <IconButton
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ color: "#00E0FF" }}
                    >
                      <LaunchIcon />
                    </IconButton>
                  </Box>
                )} */}

                {/* Mobile: show menu button */}
                {/* {isMobile && (
                  <IconButton
                    onClick={(e) => handleMenuOpen(e, project)}
                    sx={{ color: "#00E0FF" }}
                  >
                    <MoreVertIcon />
                  </IconButton>
                )} */}
              </CardContent>
            </MotionCard>
          </Grid>
        ))}
      </Grid>

      {/* Mobile menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        {selectedProject && (
          <>
            <MenuItem
              component="a"
              href={selectedProject.links.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleMenuClose}
            >
              GitHub
            </MenuItem>
            <MenuItem
              component="a"
              href={selectedProject.links.live}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleMenuClose}
            >
              Live Demo
            </MenuItem>
          </>
        )}
      </Menu>
    </Box>
  );
};

export default Projects;
