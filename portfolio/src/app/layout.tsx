

import './globals.css';
import { ReactNode } from 'react';
// import Header from '../Components/Header';
import Footer from '../Components/Footer';
// layout.tsx
import Header from '../Components/Header';
import CursorTrail from '../Components/CursorTrail'
import ClientWrapper from '@/Components/ClientWrapper';
import { Toaster } from 'react-hot-toast';
import FloatingParticlesBackground from '@/Components/FloatingParticle';
import { Box } from '@mui/material';



export const metadata = {
  title: 'Harshal.dev',
  description: 'Harshal.dev',
};



export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        <Header />
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* <ClientWrapper />
          <Toaster /> */}
          <CursorTrail />
          <FloatingParticlesBackground />
          <main className="min-h-screen p-4">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
