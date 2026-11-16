import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Opens every new page at the top, instantly (no visible scroll animation). */
export const ScrollRestoration = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
};
