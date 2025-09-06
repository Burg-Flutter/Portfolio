'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useMediaQuery, useTheme } from '@mui/material';

const CursorTrail = () => {
  const circleRef = useRef<HTMLDivElement>(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // returns true if screen < 600px

  useEffect(() => {
    if (isMobile) return; // Skip setting up the trail on mobile

    const circle = circleRef.current;
    if (!circle) return;

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const xTo = gsap.quickTo(circle, 'x', { duration: 0.3, ease: 'power3' });
    const yTo = gsap.quickTo(circle, 'y', { duration: 0.3, ease: 'power3' });

    const move = (e: MouseEvent) => {
      pos.x = e.clientX + 10;
      pos.y = e.clientY + 10;
      xTo(pos.x);
      yTo(pos.y);
    };

    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <div
      ref={circleRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '40px',
        height: '40px',
        backgroundColor: 'white',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9999,
        transform: 'translate(-50%, -50%)',
        boxShadow: '0 0 10px 5px rgba(255, 255, 255, 0.2)',
        opacity: 0.1,
        mixBlendMode: 'screen',
      }}
    />
  );
};

export default CursorTrail;
