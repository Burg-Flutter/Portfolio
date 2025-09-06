"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Menu,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import Grid from "@mui/material/Grid";

type Project = {
  title: string;
  description: string;
  links?: {
    github?: string;
    live?: string;
  };
};

const projects: Project[] = [
  {
    title: "SafeSteps",
    description:
      "A comprehensive women’s safety app with live tracking, SOS alerts, and privacy-focused features.",
    links: {
      github: "https://github.com/Burg-Flutter",
    },
  },
  {
    title: "Collabeat",
    description:
      "A collaborative Flutter app enabling music creators to jam, share, and build tracks in real-time. The application is Live on Playstore",
    links: {
      live: "https://play.google.com/store/apps/details?id=com.collabs.collabeat&pcampaignid=web_share",
    },
  },
];

const MotionCard = motion(Card);

const Projects: React.FC = () => {
  const isMobile = useMediaQuery("(max-width:1023px)");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleCardClick = (
    event: React.MouseEvent<HTMLElement>,
    project: Project
  ) => {
    if (isMobile) {
      setAnchorEl(event.currentTarget);
      setSelectedProject(project);
    }
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
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
            <MotionCard
              onClick={(e) => handleCardClick(e, project)}
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
                cursor: isMobile ? "pointer" : "default",
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

                {/* Inline buttons only on desktop */}
                {!isMobile && project.links && (
                  <Box sx={{ display: "flex", gap: 2 }}>
                    {project.links.github && (
                      <Button
                        variant="outlined"
                        size="small"
                        sx={{
                          borderColor: "#00E0FF",
                          color: "#00E0FF",
                          "&:hover": {
                            backgroundColor: "rgba(0,224,255,0.1)",
                            borderColor: "#00E0FF",
                          },
                        }}
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </Button>
                    )}
                    {project.links.live && (
                      <Button
                        variant="outlined"
                        size="small"
                        sx={{
                          borderColor: "#00E0FF",
                          color: "#00E0FF",
                          "&:hover": {
                            backgroundColor: "rgba(0,224,255,0.1)",
                            borderColor: "#00E0FF",
                          },
                        }}
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </Button>
                    )}
                  </Box>
                )}
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
        {selectedProject?.links?.github && (
          <MenuItem
            component="a"
            href={selectedProject.links.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleMenuClose}
          >
            GitHub
          </MenuItem>
        )}
        {selectedProject?.links?.live && (
          <MenuItem
            component="a"
            href={selectedProject.links.live}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleMenuClose}
          >
            Live Demo
          </MenuItem>
        )}
      </Menu>
    </Box>
  );
};

export default Projects;
