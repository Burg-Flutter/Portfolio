'use client';

import React from 'react';
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Paper,
  Container,
} from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import Lottie from 'lottie-react';
import experienceLottie from '../../public/lottie/space boy developer.json'; 

const experiences = [
  {
    role: 'Flutter Developer Intern',
    company: 'RenewHeat',
    duration: 'Jan 2024 - June 2024',
    description: 'Created cross-platform app with Flutter focusing on UI development and Database integration.',
  },
  {
    role: 'Flutter Developer',
    company: 'Achievex',
    duration: 'Aug 2024 - Dec 2024',
    description: 'Created cross-platform apps with real-time features using Nodejs and Digital Ocean.',
  },
  {
    role: 'Software Developer',
    company: 'Coditude',
    duration: 'Feb 2025 - Present',
    description: 'Frontend development using React and Next.js, focusing on performance and user experience.',
  },
];

const ExperienceTimeline = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { scrollYProgress } = useScroll();
  const lottieScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        backgroundColor: 'transparent',
        px: 2,
        py: 10,
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          fontWeight={700}
          textAlign="center"
          mb={8}
          color="white"
        >
          Work Experience
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column-reverse' : 'row',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: 6,
          }}
        >
          {/* Timeline Section */}
          <Box sx={{ flex: 2, display: 'flex', flexDirection: 'column', gap: 5 }}>
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Paper
                  elevation={4}
                  sx={{
                    p: 3,
                    borderLeft: '5px solid #007bff',
                    backgroundColor: '#fff',
                    position: 'relative',
                    borderRadius: 2,
                  }}
                >
                  <Typography variant="h6" color="primary" fontWeight={700}>
                    {exp.role}
                  </Typography>
                  <Typography variant="subtitle1" fontWeight={600}>
                    {exp.company}
                  </Typography>
                  <Typography variant="body2" fontStyle="italic" mb={1}>
                    {exp.duration}
                  </Typography>
                  <Typography variant="body1">{exp.description}</Typography>
                </Paper>
              </motion.div>
            ))}
          </Box>

          {/* Lottie with Parallax */}
          <motion.div
            style={{
              scale: lottieScale,
              position: isMobile ? 'relative' : 'sticky',
              top: isMobile ? 0 : 100,
              flex: 1,
              width: isMobile ? '100%' : 350,
              height: isMobile ? 300 : 400,
            }}
          >
            <Lottie animationData={experienceLottie} loop />
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default ExperienceTimeline;
