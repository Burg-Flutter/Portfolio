
'use client';

import React from 'react';
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion, useAnimation, Easing } from 'framer-motion';
import Image from 'next/image';
import heroImg from '../../public/hero2.jpg';
const floatAnimation = {
  animate: {
    y: [0, -3, 3, -2, 2, 0],
    x: [0, 2, -2, 1, -1, 0],
    rotate: [0, 1, -1, 0.5, -0.5, 0], 
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: [0.42, 0, 0.58, 1], 
    },
  },
};


const AnimatedWord = ({ children }: { children: string }) => (
  <motion.span
    // variants={floatAnimation}
    animate="animate"
    style={{ display: 'inline-block' }}
  >
    {children}
  </motion.span>
);

const AboutMe: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        px: 2,
        py: 6,
        // mt: 4,
        mb: 4,
      }}
    >
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        sx={{
          backgroundColor: 'transparent',
          borderRadius: '16px',
          color: '#fff',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'center',
          gap: '30px',
          maxWidth: '1000px',
          width: '100%',
          mx: 'auto',
          px: 2,
        }}
      >
        {/* Left Hero Image */}
        <motion.div
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ type: 'spring', stiffness: 200 }}
          style={{
            borderRadius: '16px',
            overflow: 'hidden',
            width: isMobile ? '100%' : '300px',
            flexShrink: 0,
          }}
        >
          <Image
            src={heroImg}
            alt="About Me"
            width={300}
            height={300}
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
            }}
          />
        </motion.div>

        {/* Right Description */}
        <Box
          component={motion.div}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          sx={{
            maxWidth: '700px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            mx: 'auto',
          }}
        >
          <Typography variant="h4" component="h2" sx={{ fontWeight: 700 }}>
            About Me
          </Typography>

          <Typography variant="body1">
            I am a <AnimatedWord>Full-Stack Developer</AnimatedWord> based in{' '}
            <AnimatedWord>Pune</AnimatedWord>, India. I am a{' '}
            <AnimatedWord>Computer Science</AnimatedWord> undergraduate from SPPU. I am passionate
            about <AnimatedWord>turning ideas</AnimatedWord> into real-world
            applications through clean and efficient code. I build{' '}
            <AnimatedWord>cross-platform mobile apps</AnimatedWord> using{' '}
            <AnimatedWord>Flutter</AnimatedWord> and dynamic WebApps using{' '}
            <AnimatedWord>Next.js</AnimatedWord> and{' '}
            <AnimatedWord>Node.js</AnimatedWord> with{' '}
            <AnimatedWord>MySQL</AnimatedWord>. I’ve also completed a freelance
            project and constantly work on improving my skills by building
            meaningful, full-stack applications.
          </Typography>

          <Typography>Email : harshalwadne1978@gmail.com</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutMe;
