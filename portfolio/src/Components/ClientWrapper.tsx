'use client';

import { useEffect } from 'react';
import { toast } from 'react-hot-toast';

const ClientWrapper = () => {
  useEffect(() => {
    const disableRightClick = (e: MouseEvent) => {
      e.preventDefault();
      toast.error('OOPS BUDDY 😎', {
        duration: 2000,
        position: 'bottom-center',
      });
    };

    document.addEventListener('contextmenu', disableRightClick);
    return () => {
      document.removeEventListener('contextmenu', disableRightClick);
    };
  }, []);

  return null;
};

export default ClientWrapper;
